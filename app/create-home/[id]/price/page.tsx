'use client';
import Counter from '@/app/components/Counter';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { addBathrooms, addPrice } from '@/lib/actions';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AddPrice = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center pb-8">
        Equipments
      </h1>
      <form action={addPrice}>
        <input
          type="hidden"
          name="homeId"
          value={params.id}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col items-center min-h-screen justify-start py-32"
        >
          <div className="flex flex-col min-w-80 items-center gap-4 border p-4 border-black/50 rounded-xl">
            <Label className="text-xl  w-full">Price</Label>
            <Input
              name="price"
              type="number"
              required
              placeholder="Price per night in USD $"
            />
          </div>
        </motion.div>
        <FooterCreateHome />
      </form>
    </>
  );
};
export default AddPrice;
