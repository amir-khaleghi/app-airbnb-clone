'use client';
import { motion } from 'framer-motion';

interface SearchInputProps {
  text1: string;
  text2: string;
  id: number;
  handleActive: (id: string) => void;
  activeId: string;
}

const SearchInput = ({
  activeId,
  handleActive,
  id,
  text1,
  text2,
}: SearchInputProps) => {
  let isActive = activeId === id.toString();
  // ─── Return ──────────────────────────────────────────────

  return (
    <div
      className={`flex rounded-full  items-start h-14 flex-col hover:cursor-pointer p-2 border-r ${
        activeId === id.toString()
          ? 'bg-white shadow-lg z-20'
          : 'hover:bg-zinc-200'
      }`}
    >
      <motion.div
        layout
        data-isopen={isActive}
        initial={{ borderRadius: 100 }}
        className={`parent duration-500 text-sm px-4 h-full ${
          activeId === id.toString()
            ? 'lg:flex-[3.5] flex-[10]  '
            : 'lg:flex[0.5] flex-[2]'
        }`}
        onClick={() => handleActive(id.toString())}
      >
        <div className="text-sm font-semibold ">{text1}</div>
        <div className="text-gray-500">{text2}</div>
      </motion.div>
    </div>
  );
};
export default SearchInput;
