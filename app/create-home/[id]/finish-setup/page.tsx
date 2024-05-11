import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FinishSetup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col w-full  gap-4">
      <h1 className="text-3xl text-center p-8">
        congratulations for your first home.
      </h1>
      <Link href="/">
        <Button>Back Home</Button>
      </Link>
    </div>
  );
};
export default FinishSetup;
