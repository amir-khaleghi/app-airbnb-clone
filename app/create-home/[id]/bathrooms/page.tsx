'use client';
import Counter from '@/app/components/Counter';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import { Label } from '@/components/ui/label';
import { addBathrooms } from '@/lib/actions';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Bathrooms = ({ params }: { params: { id: string } }) => {
  const [amount, setAmount] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center min-h-screen justify-start py-32"
    >
      <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center pb-8">
        Equipments
      </h1>
      <form action={addBathrooms}>
        <input
          type="hidden"
          name="homeId"
          value={params.id}
        />
        <input
          type="hidden"
          name="bathroomsNumber"
          value={amount}
        />

        <FooterCreateHome />
      </form>
      <div className="flex items-center gap-4 border p-4 border-black/50 rounded-xl">
        <Label className="text-xl">Number of Bathrooms?</Label>
        <Counter
          amount={amount}
          setAmount={setAmount}
        />
      </div>
    </motion.div>
  );
};
export default Bathrooms;
// variants={fadeIn('right', 'spring', 2)}
