import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import db from './db';

/* Cn ------------------------------- */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/* Click Focus ---------------------- */

export const handleClickLocation = ({ boxRef, setActiveId }) => {
  const handler = (e: MouseEvent) => {
    if (!boxRef.current?.contains(e.target)) {
      setActiveId('');
    }
  };
  document.addEventListener('mousedown', handler);
  //Cleanup
  return () => {
    document.removeEventListener('mousedown', handler);
  };
};

/* Get data of homes ------------------- */

export async function getFilteredHome({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const data = await db.home.findMany({
    where: {
      location: {
        not: undefined,
      },
      description: {
        not: undefined,
      },
      title: {
        not: undefined,
      },
      categoryName: searchParams?.filter ?? undefined,
    },
    select: {
      title: true,
      description: true,
      categoryName: true,
      location: true,
      price: true,
      photo: true,
      id: true,
    },
  });
  return data;
}
