'use client';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import { params } from '@/lib/types';

import { motion } from 'framer-motion';
import { useCountries } from '@/hooks/useCountries';
import SelectItemComp from './SelectItemComp';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';
import { addLocation } from '@/lib/actions';
import { useRouter } from 'next/navigation';

// ─── Comp ─────────────────────────────────────────── 🟩 ─
interface AddLocationProps {
  params: params;
  isAddress: boolean;
}

const AddLocation = ({ params, isAddress }: AddLocationProps) => {
  /* Lazy Load ------------------------ */

  const LazyMap = dynamic(() => import('@/app/components/Map'), {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center">
        <Skeleton className="h-[50vh] w-[380px]" />
      </div>
    ),
  });

  /* State ---------------------------- */
  const [location, setLocation] = useState('');

  /* Hook --------------------------- */
  const { getAllCountries, getCountryByValue } = useCountries();
  const countries = getAllCountries();
  const countryName = getCountryByValue(location)?.label;

  const router = useRouter();

  /* Handler -------------------------- */
  // Function to handle form submission

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If location exists, it means a photo is already uploaded
    // So, redirect to the next step without uploading a new photo
    if (isAddress) {
      router.push(`/create-home/${params.id}/finish-setup`);
      return;
    }

    // If finish-setup doesn't exist, proceed with uploading the new photo
    const formData = new FormData(event.currentTarget);
    try {
      await addLocation(formData);
    } catch (error) {
      console.error('Error adding location:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  // ─── Return ──────────────────────────────────────────────
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden"
      >
        <input
          type="hidden"
          name="homeId"
          value={params.id}
        />
        <input
          type="hidden"
          name="countryName"
          value={countryName}
        />
        <input
          type="hidden"
          name="location"
          value={location}
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" flex flex-col items-center justify-center pt-20"
        >
          <div className="flex flex-col items-start mt-10">
            <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center mb-4">
              Where is your home Location?
            </h1>
            <div className="mb-4 w-full">
              <SelectItemComp
                isAddress={isAddress}
                setLocation={setLocation}
                items={countries}
              />
            </div>
          </div>
        </motion.div>
        <FooterCreateHome />
      </form>
      <LazyMap location={location} />
    </>
  );
};
export default AddLocation;
