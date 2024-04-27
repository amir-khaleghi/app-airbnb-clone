import db from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser().catch((err) => {
      console.error('Error fetching user from Kinde Auth:', err);
      throw err;
    });

    if (!user || user === null || !user.id) {
      console.error('Invalid user data:', user);
      return NextResponse.json({ error: 'Invalid user data' }, { status: 400 });
    }

    let dbUser = await db.user
      .findUnique({
        where: { id: user.id },
      })
      .catch((err) => {
        console.error('Error fetching user from database:', err);
        throw err;
      });

    if (!dbUser) {
      try {
        const userData = {
          email: user.email ?? '',
          firstName: user.given_name ?? '',
          lastName: user.family_name ?? '',
          id: user.id,
          profileImage:
            user?.picture ?? `https://avatar.vercel.sh/${user?.given_name}`,
        };

        // Validate user data before creating
        Object.keys(userData).forEach((key) => {
          if (typeof userData[key] === 'undefined' || userData[key] === null) {
            console.error(`Invalid value for ${key}: ${userData[key]}`);
            return NextResponse.json(
              { error: 'Invalid user data' },
              { status: 400 }
            );
          }
        });

        dbUser = await db.user.create({
          data: userData,
        });
      } catch (err) {
        console.error('Error creating user in database:', err);
        throw err;
      }
    }

    return NextResponse.redirect(
      'https://app-airbnb-clone-amirdev.vercel.app/'
    );
  } catch (err) {
    console.error('Internal Server Error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
