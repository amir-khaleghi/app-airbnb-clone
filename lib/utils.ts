import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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
