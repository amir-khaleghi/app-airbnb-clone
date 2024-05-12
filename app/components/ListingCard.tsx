import { useCountries } from '@/hooks/useCountries';
import Image from 'next/image';

interface ListingCardProps {
  title: string;
  description: string;
  location: string;
  photo: string;
  price: number | string;
  categoryName: string;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const ListingCard = ({
  location,
  title,
  categoryName,
  description,
  photo,
  price,
}: ListingCardProps) => {
  const { getCountryByValue } = useCountries();
  const country = getCountryByValue(location);
  // ─── Return ──────────────────────────────────────────────

  return (
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
          <span className="font-bold">${price}</span> night
        </p>
      </div>
    </div>
  );
};
export default ListingCard;
