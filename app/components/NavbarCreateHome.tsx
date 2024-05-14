import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo_.png';

const NavbarCreateHome = () => {
  // ─── Return ──────────────────────────────────────────────

  return (
    <nav className=" border-b w-full fixed top-0 flex flex-col bg-white">
      <div className="flex items-center justify-between px-10 h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            alt="logo"
            src={logo}
            width={150}
            height={150}
          />{' '}
        </Link>
        <div className="flex gap-4">
          <Link>
            <Button
              className="rounded-3xl hover:border-black"
              variant={'outline'}
            >
              Questions?
            </Button>
          </Link>
          <Link href="/">
            <Button
              className="rounded-3xl hover:border-black"
              variant={'outline'}
            >
              Save & exit
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavbarCreateHome;
