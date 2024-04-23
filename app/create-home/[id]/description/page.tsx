'use client';
import SelectCategory from '@/app/components/SelectCategory';
import { createCategoryPage } from '@/lib/actions';
import { motion } from 'framer-motion';

const Description = ({ params }: { params: { id: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center">
        Write a description?
      </h1>
      <form action={createCategoryPage}>
        <input
          type="hidden"
          name="homeId"
          value={params.id}
        />
        <SelectCategory />
      </form>
    </motion.div>
  );
};
export default Description;
// variants={fadeIn('right', 'spring', 2)}
