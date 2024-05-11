'use server';

import { redirect } from 'next/navigation';
import db from './db';
import { supabase } from './supabase';

//LINK - Create Home
// ─── Create Home ──────────────────────────────────── 🟩 ─

export async function createAirbnbHome({ userId }: { userId: string }) {
  /* Search My Database ------------- */
  const data = await db.home.findFirst({
    where: {
      userId: userId,
    },
    orderBy: {
      createAT: 'desc',
    },
  });

  /* Redirect To Current Home ------- */
  if (data === null) {
    const data = await db.home.create({
      data: {
        userId: userId,
      },
    });

    return redirect(`/create-home/${data.id}/structure`);
  } else if (!data.title) {
    return redirect(`/create-home/${data.id}/title`);
  } else if (!data.description) {
    return redirect(`/create-home/${data.id}/description`);
  } else if (!data.bathrooms) {
    return redirect(`/create-home/${data.id}/bathrooms`);
  } else if (!data.photo) {
    return redirect(`/create-home/${data.id}/photos`);
  } else if (!data.location) {
    return redirect(`/create-home/${data.id}/location`);
  } else {
    return redirect('/home-page');
  }
}

//LINK - Create Category
// ─── Create Category ──────────────────────────────── 🟩 ─
export async function createCategoryPage(formData: FormData) {
  const categoryName = formData.get('categoryName') as string;
  const homeId = formData.get('homeId') as string;

  const existingHome = await db.home.findUnique({
    where: { id: homeId },
  });

  if (existingHome) {
    // If the record exists, update it
    const data = await db.home.update({
      where: { id: homeId },
      data: {
        categoryName: categoryName,
      },
    });
    return redirect(`/create-home/${homeId}/title`);
  } else {
    console.error(`Home with ID ${homeId} not found`);
    return redirect('/');
  }
}

//LINK - Add Title
// ─── Add Title ──────────────────────────────── 🟩 ─
export async function addTitle(formData: FormData) {
  const title = formData.get('title') as string;
  const homeId = formData.get('homeId') as string;

  const existingHome = await db.home.findUnique({
    where: { id: homeId },
  });

  if (existingHome) {
    // If the record exists, update it
    const data = await db.home.update({
      where: { id: homeId },
      data: {
        title: title,
      },
    });
    return redirect(`/create-home/${homeId}/description`);
  } else {
    console.error(`Home with ID ${homeId} not found`);
    return redirect('/');
  }
}

//LINK - Add Description
// ─── Add Description ──────────────────────────────── 🟩 ─
export async function addDescription(formData: FormData) {
  const description = formData.get('description') as string;
  const homeId = formData.get('homeId') as string;

  const existingHome = await db.home.findUnique({
    where: { id: homeId },
  });

  if (existingHome) {
    // If the record exists, update it
    const data = await db.home.update({
      where: { id: homeId },
      data: {
        description: description,
      },
    });
    return redirect(`/create-home/${homeId}/bathrooms`);
  } else {
    console.error(`Home with ID ${homeId} not found`);
    return redirect('/');
  }
}
//LINK - Add bathrooms
// ─── Add bathrooms ──────────────────────────────── 🟩 ─
export async function addBathrooms(formData: FormData) {
  const bathrooms = formData.get('bathroomsNumber') as string;
  const homeId = formData.get('homeId') as string;

  const existingHome = await db.home.findUnique({
    where: { id: homeId },
  });

  if (existingHome) {
    // If the record exists, update it
    const data = await db.home.update({
      where: { id: homeId },
      data: {
        bathrooms: bathrooms,
      },
    });
    return redirect(`/create-home/${homeId}/photos`);
  } else {
    console.error(`Home with ID ${homeId} not found`);
    return redirect('/');
  }
}
//LINK - Add photos
// ─── Add photos ──────────────────────────────── 🟩 ─
export async function addPhotos(formData: FormData) {
  const homeId = formData.get('homeId') as string;
  const photoFile = formData.get('photos') as File;
  const { data: photoData } = await supabase.storage
    .from('airbnb-photos')
    .upload(`${photoFile.name}-${new Date()}`, photoFile, {
      cacheControl: '2592000',
      contentType: 'image/png',
    });

  const data = await db.home.update({
    where: {
      id: homeId,
    },
    data: {
      photo: photoData?.path,
    },
  });
  return redirect(`/create-home/${homeId}/location`);
}

//LINK - Add Location
// ─── Add Location ──────────────────────────────── 🟩 ─
export async function addLocation(formData: FormData) {
  const homeId = formData.get('homeId') as string;
  const location = formData.get('location') as string;
  const countryName = formData.get('countryName') as string;

  const data = await db.home.update({
    where: {
      id: homeId,
    },
    data: {
      location: location,
      country: countryName,
    },
  });
  return redirect(`/create-home/${homeId}/finish-setup`);
}
