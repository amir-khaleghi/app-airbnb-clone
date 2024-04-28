import { Suspense } from 'react';
import Navbar from '../components/Navbar';
import FilterItems from '../components/FilterItems';

const Experiences = () => {
  return (
    <main className="flex flex-col items-center p-x-24 gap-10">
      <Navbar />
      <Suspense>
        <div className="w-full ">
          <FilterItems />
        </div>
      </Suspense>
      Experiences
    </main>
  );
};
export default Experiences;
