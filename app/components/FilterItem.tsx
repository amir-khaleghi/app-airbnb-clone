'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import useQueryString from '@/hooks/useQueryString';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const FilterItem = ({ item }) => {
  /* Create Query ------------------- */
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* get To Filter ----------------- */
  const search = searchParams.get('filter') ?? 'omg';
  let isActive = search === item.name;

  //NOTE clean code:[custom hook] /* Query String Function ------------ */
  const { createQueryString } = useQueryString();

  // ─── Return ──────────────────────────────────────────────

  return (
    <Link
      href={pathname + '?' + createQueryString('filter', item.name)}
      key={item.id}
    >
      <div
        className={cn(
          'flex w-18 gap-4 text-xs flex-col m-2 p-2 mb-2 items-center justify-center  pb-2  ',
          isActive
            ? '  border-b-2 font-semibold border-black pb-2  '
            : 'opacity-70 hover:border-b-2 pb-2 '
        )}
      >
        <Image
          src={item.imageUrl}
          width={24}
          height={24}
          alt={item.description}
        />
        <div className="text-center  whitespace-no-wrap ">{item.title}</div>
      </div>
    </Link>
  );
};
export default FilterItem;
