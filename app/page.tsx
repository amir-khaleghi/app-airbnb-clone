import Image from 'next/image';
import working from '@/public/svgs/working.svg';
import Navbar from './components/Navbar';
import FilterItems from './components/FilterItems';
import { Suspense } from 'react';
import db from '@/lib/db';
import ListingCard from './components/ListingCard';

/* Get data of homes ------------------- */

async function getHomeData() {
  const data = await db.home.findMany({
    where: {
      location: {
        not: undefined,
      },
      categoryName: {
        not: undefined,
      },
      description: {
        not: undefined,
      },
      title: {
        not: undefined,
      },
    },
    select: {
      title: true,
      description: true,
      categoryName: true,
      country: true,
      price: true,
      photo: true,
      id: true,
    },
  });
  return data;
}

// ─── Home ─────────────────────────────────────────── 🟩 ─

export default async function Home() {
  const data = await getHomeData();
  // ─── Return ──────────────────────────────────────────────

  return (
    <main className="flex flex-col items-center p-x-24 gap-10">
      <Navbar />
      <Suspense>
        <div className="w-full ">
          <FilterItems />
        </div>
      </Suspense>

      {/* listing */}
      <div className="w-full flex flex-wrap items-center justify-center gap-4">
        {data.map((item) => (
          <ListingCard
            key={item.id}
            title={item.title as string}
            description={item.description as string}
            country={item.country as string}
            photo={item.photo as string}
            categoryName={item.categoryName as string}
            price={item.price || 0}
          />
        ))}
      </div>
    </main>
  );
}
