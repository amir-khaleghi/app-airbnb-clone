import NavbarCreateHome from '@/app/components/NavbarCreateHome';
import { ReactQueryProvider } from '@/app/components/ReactQueryProvider';
import { ReactNode } from 'react';

const CreateHomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ReactQueryProvider>
      <div>
        <NavbarCreateHome />
        <main>{children}</main>
      </div>
    </ReactQueryProvider>
  );
};

export default CreateHomeLayout;
