import type { NextRequest } from 'next/server'
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('currentUser')?.value

  // if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
  //   return Response.redirect(new URL('/dashboard', request.url))
  // }

  // if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
  //   return Response.redirect(new URL('/login', request.url))
  // }
// }


// export function middleware(request: NextRequest) {
//   const isAuthenticated = auth(request)
 
//   // If the user is authenticated, continue as normal
//   if (isAuthenticated) {
//     return NextResponse.next()
//   }
 
//   // Redirect to login page if not authenticated
//   return NextResponse.redirect(new URL('/login', request.url))
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }


export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', "/dashboard/:path*", "/editor/:path*", "/login", "/register", "/analytics", "/clients", "/mail", "/orders", "/products", "/settings"],
}
