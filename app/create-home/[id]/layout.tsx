import NavbarCreateHome from '@/app/components/NavbarCreateHome';
import { ReactNode } from 'react';

const CreateHomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavbarCreateHome />
      <main>{children}</main>
    </div>
  );
};

export default CreateHomeLayout;
