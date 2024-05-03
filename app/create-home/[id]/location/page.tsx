'use client';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import SelectCategory from '@/app/components/SelectCategory';
import { motion } from 'framer-motion';

const addLocation = ({ params }: { params: { id: string } }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className=" flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center">
        Choose the location.
      </h1>
      <form>
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
export default addLocation;

// variants={fadeIn('right', 'spring', 2)}
