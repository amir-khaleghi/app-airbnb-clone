/* eslint-disable @next/next/no-img-element */
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CircleUserRound, Menu } from 'lucide-react';
import Image from 'next/image';

const NavUser = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border hover:shadow-lg duration-300 rounded-full ">
        <div className="flex gap-2 items-center">
          <Menu className="w-5 h-5 ml-4" />
          <img
            className="w-8 h-8 m-2 rounded-full hidden lg:block"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNskLysx-bhYLWXuebdAbB4rjz9u8sNTkR4o4w484CkY8Fp0tdAfMbncOvg4I9eZMtpg&usqp=CAU"
            alt="User Image"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-60 "
      >
        <DropdownMenuItem className="font-semibold">Sign up</DropdownMenuItem>
        <DropdownMenuItem>Log in</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Gift cards</DropdownMenuItem>
        <DropdownMenuItem>Airbnb your home</DropdownMenuItem>
        <DropdownMenuItem>Help center</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default NavUser;
