import NavItems from './NavItems';
import NavUser from './NavUser';
import SearchBox from './SearchBox';
import { TbBrandAirbnb } from 'react-icons/tb';

const Navbar = () => {
  // ─── Return ──────────────────────────────────────────────

  return (
    <nav className=" border-b w-full flex flex-col ">
      <div className="flex items-center justify-between px-10 h-20">
        {/* Logo */}
        <div>
          <TbBrandAirbnb className="text-red-500 text-4xl" />
        </div>
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
