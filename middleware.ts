import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let authCookie = request.cookies.get('auth')
  if(authCookie === undefined)
  {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  if (request.nextUrl.pathname === '/login' && authCookie) {
    return NextResponse.redirect(new URL('/', request.url)) // redireciona para home
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/builds', "/projects"],
}