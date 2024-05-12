import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface ListingCardProps {
  title: string;
  description: string;
  categoryName: string;
  country: string;
  photo: string;
  price: number | string;
}

const ListingCard = ({
  title,
  description,
  categoryName,
  country,
  photo,
  price,
}: ListingCardProps) => {
  return (
    <div className="  flex gap-2 flex-col items-start justify-start w-64">
      <div className="w-64 h-64 relative">
        <Image
          alt="home image"
          src={`https://kutfdqxasgjxovjyrglc.supabase.co/storage/v1/object/public/airbnb-photos/${photo}`}
          fill
          className="rounded-xl "
        />
      </div>
      <div>
        <p className="font-bold">{title}</p>
        <p>Category : {categoryName}</p>
        {/* <p>Description: {description}</p> */}
        <p>
          price: {price} <br /> location:{country}
        </p>
      </div>
    </div>
  );
};
export default ListingCard;
