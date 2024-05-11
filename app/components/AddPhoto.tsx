'use client';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import { motion } from 'framer-motion';
import { addPhotos } from '@/lib/actions';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AddPhotoProps {
  params: { id: string };
  isHomePhoto: boolean;
  imageUrl: string | null;
}
const AddPhoto = ({ isHomePhoto, params, imageUrl }: AddPhotoProps) => {
  const router = useRouter();

  /* Handler -------------------------- */
  // Function to handle form submission

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If imageUrl exists, it means a photo is already uploaded
    // So, redirect to the next step without uploading a new photo
    if (imageUrl) {
      router.push(`/create-home/${params.id}/location`);
      return;
    }

    // If imageUrl doesn't exist, proceed with uploading the new photo
    const formData = new FormData(event.currentTarget);
    try {
      await addPhotos(formData);
    } catch (error) {
      console.error('Error uploading photo:', error);
      // Handle error, e.g., display an error message to the user
    }
  };

  // ─── Return ──────────────────────────────────────────────
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center  justify-start py-32"
        >
          {isHomePhoto ? (
            <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center pb-8">
              Change Photos of your Home
            </h1>
          ) : (
            <h1 className="text-3xl font-semibold  transition-colors tracking-tight text-center pb-8">
              Add Photos of your Home
            </h1>
          )}
          <input
            type="hidden"
            name="homeId"
            value={params.id}
          />
          <input
            required={!isHomePhoto}
            type="file"
            name="photos"
          />
          <Image
            className=" rounded-2xl m-8"
            src={`https://kutfdqxasgjxovjyrglc.supabase.co/storage/v1/object/public/airbnb-photos/${imageUrl}`}
            alt="image"
            width={200}
            height={200}
          />
        </motion.div>
        <FooterCreateHome />
      </form>
    </div>
  );
};
export default AddPhoto;
