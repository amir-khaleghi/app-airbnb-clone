import Image from 'next/image';
import Link from 'next/link';
import notFound from '@/public/svgs/404.svg';
import { Button } from '@/components/ui/button';
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col w-full  gap-4">
      <Link
        className="absolute top-4 left-4"
        href="/"
      >
        <Button>Back Home</Button>
      </Link>
      <Image src={notFound}></Image>
    </div>
  );
}
