'use client';
import Counter from '@/app/components/Counter';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import { Textarea } from '@/components/ui/textarea';
import { createCategoryPage } from '@/lib/actions';
import { motion } from 'framer-motion';

const Description = ({ params }: { params: { id: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center min-h-screen justify-start py-32"
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
        <Textarea
          className="w-80 my-4 border-2 min-h-40 "
          placeholder="write here..."
        />

        <FooterCreateHome />
      </form>
    </motion.div>
  );
};
export default Description;
// variants={fadeIn('right', 'spring', 2)}
