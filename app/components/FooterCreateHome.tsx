import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SubmitButton from './SubmitButton';
import { useRouter } from 'next/navigation';

const FooterCreateHome = () => {
  const router = useRouter(); // Initialize the router
  /* Handle Back -------------------- */
  const handleBackNavigation = () => {
    router.back(); // Navigate back to the previous URL
  };
  // ─── Return ──────────────────────────────────────────────

  return (
    <nav className=" border-t fixed bottom-0 bg-white left-0 w-full flex flex-col ">
      <div className="flex justify-between items-center sm:px-12 px-4 py-4 ">
        <Button
          className="underline underline-offset-4 text-lg"
          variant={'ghost'}
          onClick={handleBackNavigation}
        >
          Back
        </Button>

        <SubmitButton
          className="bg-black/80 hover:bg-black"
          size={'lg'}
        >
          Next
        </SubmitButton>
      </div>
    </nav>
  );
};
export default FooterCreateHome;
