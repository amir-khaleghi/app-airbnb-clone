import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const response = NextResponse.next();

  // Check if the request is for the `/title` route
  if (req.nextUrl.pathname.startsWith('/title')) {
    // Set the 'no-store' cache control header
    response.headers.set('Cache-Control', 'no-store');
  }

  return response;
}

export const config = {
  matcher: ['/title/:path*'],
};
