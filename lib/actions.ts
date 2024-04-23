'use server';

import { redirect } from 'next/navigation';
import db from './db';

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
  } else if (
    !data.addedCategory &&
    !data.addedDescription &&
    !data.addedLocation
  ) {
    return redirect(`/create-home/${data.id}/structure`);
  } else if (data.addedCategory && !data.addedDescription) {
    return redirect(`/create-home/${data.id}/description`);
  }
}

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
        addedCategory: true,
      },
    });
    return redirect(`/create-home/${homeId}/description`);
  } else {
    console.error(`Home with ID ${homeId} not found`);
    return redirect('/');
  }
}
