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
      {userAuth && <h1 className="text-2xl p-2">Your Home</h1>}

      <Suspense fallback={<Skeleton />}>
        {userAuth ? (
          <Link
            className="relative"
            href={`/create-home/${home?.id}/photos`}
          >
            <Image
              className=" sm:rounded-2xl w-full sm:w-fit mt-4"
              src={`https://kutfdqxasgjxovjyrglc.supabase.co/storage/v1/object/public/airbnb-photos/${home?.photo}`}
              alt="image"
              width={600}
              height={600}
            />
            <p className="absolute flex text-2xl font-bold hover:opacity-100 opacity-0 duration-300 transition-all items-center justify-center right-0 text-white top-0 w-full h-full hover:backdrop-blur-sm rounded-lg">
              Edit the Image
            </p>
          </Link>
        ) : (
          <Image
            className=" rounded-2xl  m-4"
            src={`https://kutfdqxasgjxovjyrglc.supabase.co/storage/v1/object/public/airbnb-photos/${home?.photo}`}
            alt="image"
            width={600}
            height={600}
          />
        )}
      </Suspense>
      <div className="border rounded-xl  flex p-4 shadow-lg m-4 gap-2">
        <div className="w-full m-2">
          <div className="flex gap-2 items-center justify-between max-w-[500px] ">
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
        </div>
      </div>
      <Link href="/">
        <Button>Back Home</Button>
      </Link>
    </main>
  );
};
export default homePage;
