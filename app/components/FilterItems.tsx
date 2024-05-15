/* eslint-disable @next/next/no-img-element */
import { categoryItems } from '@/lib/categories';
import FilterItem from './FilterItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const FilterItems = () => {
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex items-center justify-center gap-10   overflow-x-scroll no-scrollbar ">
      <Carousel className="w-full max-w-3xl">
        <CarouselContent>
          {categoryItems.map( ( item ) => {
            return (
              <CarouselItem
                className="basis-1/8 sm:w-24 w-28 hover:scale-105 duration-300"
                key={item.id}
              >
                <FilterItem item={item} />
              </CarouselItem>
            );
          } )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default FilterItems;
