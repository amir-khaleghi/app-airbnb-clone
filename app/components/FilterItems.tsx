/* eslint-disable @next/next/no-img-element */
import { categoryItems } from '@/lib/categories';
import FilterItem from './FilterItem';

const FilterItems = () => {
  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex items-center justify-center gap-10   overflow-x-scroll no-scrollbar ">
      {categoryItems.map((item) => {
        return (
          <FilterItem
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
export default FilterItems;
