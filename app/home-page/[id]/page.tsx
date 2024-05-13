import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import db from '@/lib/db';
import formatPrice from '@/lib/formatPrice';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

const homePage = async ({ params }: { params: { id: string } }) => {
  /* Get User ----------------------- */
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  /* Get Home ------------------------- */
  let home = await db.home.findFirst({
    where: {
      id: params.id,
    },
  });

  /* Auth --------------------------- */
  const userAuth = user?.id === home?.userId;

  /* Price -------------------------- */
  const formattedPrice = formatPrice(home?.price);

  // ─── Return ──────────────────────────────────────────────

  return (
    <main className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-2xl p-2">Your Home</h1>
      <div className="border rounded-xl flex-col flex p-4 shadow-lg m-4 gap-2">
        <div className="flex gap-2 items-center justify-between w-80">
          <Label>Category Name :</Label>
          <div>{home?.categoryName}</div>
        </div>
        <div className="flex gap-2 items-center justify-between w-80">
          <Label>Location :</Label>
          <div>{home?.country}</div>
        </div>
        <div className="flex gap-2 items-center justify-between w-80">
          <Label>Price per night :</Label>
          <div>{formattedPrice}</div>
        </div>
        <Suspense fallback={<Skeleton />}>
          {userAuth ? (
            <Link
              className="relative"
              href={`/create-home/${home?.id}/photos`}
            >
              <Image
                className=" rounded-2xl w-full mt-4"
                src={`https://kutfdqxasgjxovjyrglc.supabase.co/storage/v1/object/public/airbnb-photos/${home?.photo}`}
                alt="image"
                width={200}
                height={200}
              />
              <p className="absolute flex text-2xl font-bold hover:opacity-100 opacity-0 duration-300 transition-all items-center justify-center right-0 text-white top-0 w-full h-full hover:backdrop-blur-sm rounded-lg">
                Edit the Image
              </p>
            </Link>
          ) : (
            <Image
              className=" rounded-2xl w-full mt-4"
              src={`https://kutfdqxasgjxovjyrglc.supabase.co/storage/v1/object/public/airbnb-photos/${home?.photo}`}
              alt="image"
              width={200}
              height={200}
            />
          )}
        </Suspense>
      </div>
      <Link href="/">
        <Button>Back Home</Button>
      </Link>
    </main>
  );
};
export default homePage;
