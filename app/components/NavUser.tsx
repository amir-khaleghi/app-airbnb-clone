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
import Link from 'next/link';
import { createAirbnbHome } from '@/lib/actions';

const NavUser = async () => {
  /* Get Session -------------------- */
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  /* Bind Function ------------------ */
  const createHome = createAirbnbHome.bind(null, {
    userId: user?.id as string,
  });

  // ─── Return ──────────────────────────────────────────────

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border hover:shadow-lg duration-300 rounded-full ">
        <div className="flex gap-2 items-center">
          <Menu className="w-5 h-5 sm:ml-4 m-4 " />

          <img
            className="w-8 h-8 m-2 rounded-full "
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
          <>
            <DropdownMenuItem>Hi {user.given_name} ! 🖐</DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <Link
                className="w-full"
                href="/messages"
              >
                Messages
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="w-full"
                href="/notifications"
              >
                Notifications
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="w-full"
                href="/trips"
              >
                Trips
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="w-full"
                href="/whishlists"
              >
                Whishlists
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="bg-blue-200 ">
              <form
                className="w-full"
                action={createHome}
              >
                <button
                  className="w-full text-left"
                  type="submit"
                >
                  Add your home
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="w-full"
                href="/account"
              >
                Account
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                className="w-full"
                href="/gift-cards"
              >
                Gift cards
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link
                className="w-full"
                href="/help-center"
              >
                Help center
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutLink className="w-full">Log out</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem className="font-semibold">
              <RegisterLink className="w-full">Sign up</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Log in</LoginLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Gift cards</DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Add your home 👈</LoginLink>
            </DropdownMenuItem>
            <DropdownMenuItem>Help center</DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavUser;
