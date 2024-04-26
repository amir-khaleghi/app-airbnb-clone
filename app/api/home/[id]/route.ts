import db from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('id')?.toString();

  try {
    const home = await db.home.findFirst({
      where: { id: query },
    });

    if (!home) {
      return NextResponse.json({ message: 'Home not found', status: 404 });
    }

    return NextResponse.json(home);
  } catch (error) {
    return NextResponse.json(error);
  }
}
