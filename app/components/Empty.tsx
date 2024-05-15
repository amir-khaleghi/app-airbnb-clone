import empty from '@/public/empty.svg';
import Image from 'next/image';
const Empty = () => {
  return (
    <div className="flex w-80 sm:w-[500px] h-[500px] flex-col items-center justify-center rounded-full shadow-lg border border-dashed p-8 text-center animate-in gap-4 fade-in-60 ">
      <div>
        <Image
          src={empty}
          alt="empty"
          width="300"
          height="300"
        />
      </div>

      <h1 className="text-xl text-center">
        Sorry! There is no home currently for this category.
      </h1>
    </div>
  );
};
export default Empty;
