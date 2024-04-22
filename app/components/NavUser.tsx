/* eslint-disable @next/next/no-img-element */
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from '@kinde-oss/kinde-auth-nextjs/components';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu } from 'lucide-react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const NavUser = async () => {
  /* Get Session -------------------- */
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // ─── Return ──────────────────────────────────────────────

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border hover:shadow-lg duration-300 rounded-full ">
        <div className="flex gap-2 items-center">
          <Menu className="w-5 h-5 sm:ml-4 m-4 " />

          <img
            className="w-8 h-8 m-2 rounded-full hidden sm:block"
            src={
              user?.picture ??
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNskLysx-bhYLWXuebdAbB4rjz9u8sNTkR4o4w484CkY8Fp0tdAfMbncOvg4I9eZMtpg&usqp=CAU'
            }
            alt="User Image"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60 "
      >
        {user ? (
          <DropdownMenuItem>
            <LogoutLink>Log out</LogoutLink>
          </DropdownMenuItem>
        ) : (
          <>
            <DropdownMenuItem className="font-semibold">
              <RegisterLink>Sign up</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink>Log in</LoginLink>
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem>Gift cards</DropdownMenuItem>
        <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
        <DropdownMenuItem>Help center</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavUser;
