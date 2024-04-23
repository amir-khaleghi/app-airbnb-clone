'use client';
import { navigationItems } from '@/lib/constants';
import NavItem from './NavItem';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const NavItems = ({ className }) => {
  const [activeId, setActiveId] = useState(1);

  /* Handle Active Id ----------------- */
  const handleActiveId = (id) => {
    setActiveId(id);
  };

  // ─── Return ──────────────────────────────────────────────

  return (
    <div className={cn(className)}>
      {navigationItems.map((navItem) => {
        return (
          <NavItem
            handleActiveId={handleActiveId}
            id={navItem.id}
            activeId={activeId}
            key={navItem.id}
            text={navItem.text}
            href={navItem.href}
          />
        );
      })}
    </div>
  );
};
export default NavItems;
