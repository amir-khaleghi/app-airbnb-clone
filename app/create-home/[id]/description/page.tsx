'use client';
import Counter from '@/app/components/Counter';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import NavbarCreateHome from '@/app/components/NavbarCreateHome';
import { Textarea } from '@/components/ui/textarea';
import { addDescription } from '@/lib/actions';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Description = ({ params }: { params: { id: string } }) => {
  const [description, setDescription] = useState('');

  // ─── Return ──────────────────────────────────────────────

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center min-h-screen justify-start py-32"
    >
      <NavbarCreateHome />
      <div className="flex flex-col p-8 ">
        <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center">
          Write a description?
        </h1>
        <form action={addDescription}>
          <input
            type="hidden"
            name="homeId"
            value={params.id}
          />
          <Textarea
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            value={description}
            className="w-full  transition-all duration-300 text-lg p-4 my-4 h-36 border-black/50 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black/80 focus-visible:h-32"
            placeholder="write here..."
          />

          <FooterCreateHome />
        </form>
      </div>
    </motion.div>
  );
};
export default Description;
// variants={fadeIn('right', 'spring', 2)}
