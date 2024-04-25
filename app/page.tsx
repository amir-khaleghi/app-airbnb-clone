import Image from 'next/image';
import working from '@/public/svgs/working.svg';
import Navbar from './components/Navbar';
import FilterItems from './components/FilterItems';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-x-24 gap-20">
      <Navbar />
      <Suspense>
        <div className="w-full">
          <FilterItems />
        </div>
      </Suspense>
      <h1 className="text-3xl">Still Working On it... </h1>
      <Image
        alt="working"
        src={working}
      />
    </main>
  );
}
