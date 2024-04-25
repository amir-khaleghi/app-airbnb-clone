import db from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || user === null || !user.id) {
      return res.status(400).json({ error: 'Invalid user' });
    }

    let dbUser = await db.user.findUnique({
      where: { id: user?.id },
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

    return res.redirect('https://airbnb-clone.liara.run');
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
