import Link from 'next/link';
import NavItems from './NavItems';
import NavUser from './NavUser';
import SearchBox from './SearchBox';
import Image from 'next/image';
import logo from '@/public/logo_.png';
const Navbar = () => {
  // ─── Return ──────────────────────────────────────────────

  return (
    <nav className=" border-b w-full flex flex-col ">
      <div className="flex items-center justify-between pr-4 sm:px-10 h-20">
        {/* Logo */}
        <Link href="/">
          <div className="p-2">
            {/* <TbBrandAirbnb className="text-red-500 text-4xl" /> */}
            <Image
              alt="logo"
              src={logo}
              width={150}
              height={150}
            />
          </div>
        </Link>
        {/* links */}
        <NavItems className="hidden gap-4 my-4 lg:flex items-center justify-center" />
        {/* login */}
        <div>
          <NavUser />
        </div>
      </div>
      {/* search box */}
      <SearchBox />
    </nav>
  );
};
export default Navbar;
