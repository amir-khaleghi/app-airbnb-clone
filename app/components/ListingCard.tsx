import { useCountries } from '@/hooks/useCountries';
import db from '@/lib/db';
import formatPrice from '@/lib/formatPrice';
import Image from 'next/image';
import Link from 'next/link';

interface ListingCardProps {
  title: string;
  description: string;
  location: string;
  photo: string;
  price: number | string;
  categoryName: string;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const ListingCard = async ({
  location,
  title,
  categoryName,
  description,
  photo,
  price,
}: ListingCardProps) => {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);
  const formattedPrice = formatPrice(price as number);

  /* Get Home id ------------------ */
  const home = await db.home.findFirst({
    where: {
      location: location,
      categoryName: categoryName,
      photo: photo,
      price: price,
    },
    select: {
      id: true,
    },
  });
  // ─── Return ──────────────────────────────────────────────

  return (
    <Link href={`/home-page/${home?.id}`}>
      <div className="  flex gap-2 flex-col items-start justify-start ">
        <div className="w-[250px] h-[250px] relative">
          <Image
            alt="home image"
            src={`https://kutfdqxasgjxovjyrglc.supabase.co/storage/v1/object/public/airbnb-photos/${photo}`}
            fill
            className="rounded-xl "
          />
        </div>
        <div>
          <p className="font-bold">
            {country?.label} / {country?.region}
          </p>
          <p>Category : {categoryName}</p>
          <p className="text-muted-foreground w-64 text-sm line-clamp-2">
            {description}
          </p>
          <p>
            <span className="font-bold">{formattedPrice}</span> night
          </p>
        </div>
      </div>
    </Link>
  );
};
export default ListingCard;
