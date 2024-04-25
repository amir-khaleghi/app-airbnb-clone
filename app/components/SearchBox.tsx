'use client';
import Link from 'next/link';
import SearchInput from './SearchInput';
import { searchItems } from '@/lib/constants';
import { useEffect, useRef, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import NavItems from './NavItems';
import { handleClickLocation } from '@/lib/utils';

const SearchBox = () => {
  /* State -------------------------- */
  const [activeId, setActiveId] = useState('');
  const boxRef = useRef(null);
  /* Handler -------------------------- */
  const handleActive = (id: string) => {
    if (activeId === id) {
      setActiveId('');
    } else {
      setActiveId(id);
    }
  };

  /* HandleClick -------------------- */

  useEffect(() => {
    handleClickLocation({ boxRef, setActiveId });
  }, []);

  // ─── Return ──────────────────────────────────────────────

  return (
    <form className="w-full justify-center  flex-col   items-center hidden md:flex  ">
      <NavItems className="flex gap-4 mb-4 lg:hidden items-center h-full justify-center" />

      {/* bottom section */}
      <div
        ref={boxRef}
        className={`flex items-center border rounded-full shadow-lg mb-4 gap-2 h-fit ${
          activeId && 'bg-zinc-100'
        }`}
      >
        {searchItems.map((item) => {
          return (
            <SearchInput
              key={item.id}
              activeId={activeId}
              handleActive={handleActive}
              id={item.id}
              text1={item.text1}
              text2={item.text2}
            />
          );
        })}
        {/* search */}
        <div
          className={`rounded-full  duration-500 transition-all  bg-red-500 text-white w-14 h-14 flex gap-2 items-center justify-center hover:cursor-pointer ${
            activeId && 'w-28'
          }`}
        >
          {activeId && 'Search'}
          <IoSearch className="text-3xl " />
        </div>
      </div>
    </form>
  );
};
export default SearchBox;
