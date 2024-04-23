import Link from 'next/link';
// ─── Type ─────────────────────────────────────────── 🟩 ─

interface NavItemProps {
  text: string;
  href: string;
  id: number;
  activeId: number;
  handleActiveId: (id: number) => void;
}

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const NavItem: React.FC<NavItemProps> = ({
  text,
  href,
  id,
  activeId,
  handleActiveId,
}: NavItemProps) => {
  /* check the active Id -------------------- */
  let isActive = id === activeId;

  // ─── Return ──────────────────────────────────────────────

  return (
    <Link
      onClick={() => {
        handleActiveId(id);
      }}
      className={`hover:bg-zinc-100 text-zinc-600 rounded-3xl p-2 ${
        isActive ? 'font-bold text-black' : ''
      }`}
      href={href}
    >
      {text}
    </Link>
  );
};
export default NavItem;
