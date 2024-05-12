'use client';
import FooterCreateHome from '@/app/components/FooterCreateHome';
import { Textarea } from '@/components/ui/textarea';
import { addTitle } from '@/lib/actions';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarCreateHome from '@/app/components/NavbarCreateHome';

const Title = ({ params }: { params: { id: string } }) => {
  /* State ---------------------------- */
  const [home, setHome] = useState('');
  const [title, setTitle] = useState('');
  let textAreaActive = title.length <= 32;
  /* Effect --------------------------- */
  useEffect(() => {
    /* Handler ------------------------ */
    const fetchData = async () => {
      axios
        .get(`/api/home/${params.id}`, {
          params: { id: params.id },
        })
        .then((response) => {
          setHome(response.data);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    };

    fetchData();
  }, [params.id]);

  /* React Query --------------------- */

  // ─────────────────────────────────────────────────────────

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=" flex flex-col items-center min-h-screen justify-start py-32"
    >
      <NavbarCreateHome />
      {home ? (
        <div className="flex flex-col p-8 ">
          <h1 className="text-3xl   transition-colors tracking-tight mb-2">
            {`Now, let's give your ${home.categoryName} a title`}
          </h1>
          <p className=" text-zinc-500 opacity-80">
            Short titles work best. Have fun with it – you can always change it
            later.
          </p>
          <form action={addTitle}>
            <input
              type="hidden"
              name="homeId"
              value={params.id}
            />
            <Textarea
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              value={title}
              maxLength={32}
              className="w-full  transition-all duration-300 text-lg p-4 my-4 h-36 border-black/50 focus-visible:ring-offset-0 focus-visible:ring-1 focus-visible:ring-black/80 focus-visible:h-32"
              placeholder="write here..."
            />
            <p
              className={`text-xs text-zinc-500 opacity-70 font-bold ${
                !textAreaActive ? 'text-red-400' : ''
              }`}
            >{`${title.length}/32`}</p>
            <FooterCreateHome />
          </form>
        </div>
      ) : (
        <div className="h-80 flex items-center justify-center">
          <div className="loader"></div>
        </div>
      )}
    </motion.div>
  );
};
export default Title;

// variants={fadeIn('right', 'spring', 2)}
