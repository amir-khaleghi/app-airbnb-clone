import { Button } from '@/components/ui/button';
import FilterItems from '../components/FilterItems';
import Image from 'next/image';
import working from '@/public/svgs/working.svg';
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24 gap-20">
      {/* <FilterItems /> */}
      <h1 className="text-3xl">Still Working On it... </h1>
      <Image
        alt="working"
        src={working}
      />
    </main>
  );
}
