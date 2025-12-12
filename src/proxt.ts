import { NextRequest, NextResponse } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  // return NextResponse.redirect(new URL('/home', request.url))
  return NextResponse.next();
}
 

export const config = {
  matcher: [
     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.).*)",
  ],
};