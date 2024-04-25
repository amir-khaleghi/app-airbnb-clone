'use client';
import FooterCreateHome from '@/app/components/FooterCreateHome';
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

        <FooterCreateHome />
      </form>
    </motion.div>
  );
};
export default Description;
// variants={fadeIn('right', 'spring', 2)}
