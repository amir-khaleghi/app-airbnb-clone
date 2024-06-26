'use client';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import SelectCategory from '@/app/components/SelectCategory';
import { createCategoryPage } from '@/lib/actions';
import { motion } from 'framer-motion';
const Structure = ({ params }: { params: { id: string } }) => {
  // ─── Return ──────────────────────────────────────────────

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" flex flex-col items-center justify-center py-40"
    >
      <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center">
        Which of these best describes your place?
      </h1>
      <form action={createCategoryPage}>
        <input
          type="hidden"
          name="homeId"
          value={params.id}
        />
        <SelectCategory />
        <FooterCreateHome />
      </form>
    </motion.div>
  );
};
export default Structure;
// variants={fadeIn('right', 'spring', 2)}
