'use server';

import { redirect } from 'next/navigation';
import db from './db';

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
    return redirect(`/create-home/${homeId}/description`);
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
    return redirect(`/create-home/${homeId}/finish-setup`);
  } else {
    console.error(`Home with ID ${homeId} not found`);
    return redirect('/');
  }
}
