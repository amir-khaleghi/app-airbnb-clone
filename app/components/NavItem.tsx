import Link from 'next/link';

const NavItem = ({ text, href }) => {
  return (
    <div className="hover:bg-zinc-100 rounded-3xl p-2">
      <Link href={href}>{text}</Link>
    </div>
  );
};
export default NavItem;
