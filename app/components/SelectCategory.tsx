'use client';
import { Card, CardHeader } from '@/components/ui/card';
import { categoryItems } from '@/lib/categories';
import Image from 'next/image';
import { useState } from 'react';

const SelectCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // ─── Return ──────────────────────────────────────────────

  return (
    <div className="flex flex-wrap justify-center items-center  py-8 max-w-[600px] gap-2 ">
      <input
        type="hidden"
        name="categoryName"
        value={selectedCategory as string}
      />

      {/* render categories */}
      {categoryItems.map((item) => {
        return (
          <Card
            className={`w-48 h-24 flex items-start justify-center border-2  flex-col  hover:cursor-pointer hover:border-black duration-200 ${
              selectedCategory === item.name ? 'bg-zinc-100 border-black' : ''
            }`}
            key={item.id}
            onClick={() => setSelectedCategory(item.name)}
          >
            <CardHeader>
              <Image
                src={item.imageUrl}
                width={28}
                height={28}
                alt={item.name}
              />
              <p>{item.name}</p>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
};
export default SelectCategory;
