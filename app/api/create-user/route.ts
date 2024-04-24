'use server';

import db from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();

    const user = await getUser();

    if (!user || user === null || !user.id) {
      NextResponse.json({ error: 'Invalid user' });
      // throw new Error('There is no such user!!');
    }

    let dbUser = await db.user.findUnique({
      where: {
        id: user?.id,
      },
    });

    if (!dbUser) {
      dbUser = await db.user.create({
        data: {
          email: user.email ?? '',
          firstName: user.given_name ?? '',
          lastName: user.family_name ?? '',
          id: user.id,
          profileImage:
            user?.picture ?? `https://avatar.vercel.sh/${user?.given_name}`,
        },
      });
    }

    return NextResponse.redirect('http://localhost:3000');
  } catch (error) {
    console.log(error);
  }
}
