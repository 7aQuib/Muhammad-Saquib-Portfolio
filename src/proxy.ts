import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth_token')?.value;

  // Protect Admin Dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard/admin')) {
    if (authCookie !== 'admin') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Protect Community Dashboard (Any /dashboard route)
  if (request.nextUrl.pathname.startsWith('/dashboard') && !request.nextUrl.pathname.startsWith('/dashboard/admin')) {
    if (!authCookie || (authCookie !== 'user' && authCookie !== 'admin')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If already logged in, redirect away from login page
  if (request.nextUrl.pathname === '/login') {
    if (authCookie === 'admin') {
      return NextResponse.redirect(new URL('/dashboard/admin', request.url));
    } else if (authCookie === 'user') {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
