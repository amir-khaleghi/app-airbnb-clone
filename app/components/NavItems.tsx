import { navigationItems } from '@/lib/constants';

import NavItem from './NavItem';
import { cn } from '@/lib/utils';

const NavItems = ({ className }) => {
  return (
    <div className={cn(className)}>
      {navigationItems.map((navItem) => {
        return (
          <NavItem
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
