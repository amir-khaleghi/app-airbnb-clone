import Navbar from './components/Navbar';
import FilterItems from './components/FilterItems';
import { Suspense } from 'react';

import ListingCard from './components/ListingCard';
import SkeletonCard from './components/SkeletonCard';
import Empty from './components/Empty';
import { getFilteredHome } from '@/lib/utils';

// ─── Home ─────────────────────────────────────────── 🟩 ─

export default function Home({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  // ─── Return ──────────────────────────────────────────────
  return (
    <main className="flex flex-col items-center p-x-24 gap-10">
      <Navbar />
      <div className="w-full ">
        <FilterItems />
      </div>

      {/* listing */}
      <Suspense
        key={searchParams?.filter}
        fallback={<LoadingSkeleton />}
      >
        <ListContainer searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

// ─── List container ────────────────────────────────── 🟩 ─

async function ListContainer({
  searchParams,
}: {
  searchParams?: {
    filter?: string;
  };
}) {
  const data = await getFilteredHome({ searchParams: searchParams });

  return (
    <>
      {data.length === 0 ? (
        <Empty />
      ) : (
        <div className="grid xl:grid-cols-4 justify-around	 md:grid-cols-2 sm:grid-cols-2 gap-8 m-8 mx-12 pb-40">
          {data.map((item) => {
            // if (!item.photo) return;
            return (
              <ListingCard
                key={item.id}
                title={item.title as string}
                description={item.description as string}
                location={item.location as string}
                photo={item.photo as string}
                categoryName={item.categoryName as string}
                price={item.price}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

// ─── Skeleton Loading ─────────────────────────────── 🟩 ─

function LoadingSkeleton() {
  return (
    <div className="grid xl:grid-cols-4 justify-around	 md:grid-cols-2 sm:grid-cols-2 gap-8 m-8 mx-12">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
}
