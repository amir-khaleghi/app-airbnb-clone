import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TbBrandAirbnb } from 'react-icons/tb';

const NavbarCreateHome = () => {
  // ─── Return ──────────────────────────────────────────────

  return (
    <nav className=" border-b w-full fixed top-0 flex flex-col bg-white">
      <div className="flex items-center justify-between px-10 h-20">
        {/* Logo */}
        <Link href="/">
          <TbBrandAirbnb className="text-black text-4xl" />
        </Link>
        <div className="flex gap-4">
          <Button
            className="rounded-3xl hover:border-black"
            variant={'outline'}
          >
            Questions?
          </Button>
          <Button
            className="rounded-3xl hover:border-black"
            variant={'outline'}
          >
            Save & exit
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default NavbarCreateHome;
