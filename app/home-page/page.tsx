import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import db from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const homePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  let home = await db.home.findFirst({
    where: {
      userId: user?.id,
    },
  });

  return (
    <main className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-2xl p-2">Your Home</h1>
      <div className="border rounded-xl flex-col flex p-4 shadow-lg m-4">
        <div className="flex gap-2 items-center justify-between w-80">
          <Label>Your Email :</Label>
          {user?.email}
        </div>
        <div className="flex gap-2 items-center justify-between w-80">
          <Label>Category Name :</Label>
          <div>{home?.categoryName}</div>
        </div>
        <Suspense fallback={<Skeleton />}>
          <Link href={`/create-home/${home?.id}/photos`}>
            <Image
              className=" rounded-2xl w-full mt-4"
              src={`https://kutfdqxasgjxovjyrglc.supabase.co/storage/v1/object/public/airbnb-photos/${home?.photo}`}
              alt="image"
              width={200}
              height={200}
            />
          </Link>
        </Suspense>
      </div>
      <Link href="/">
        <Button>Back Home</Button>
      </Link>
    </main>
  );
};
export default homePage;
