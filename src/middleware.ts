import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Allowed routes
  const allowedRoutes = [
    '/Plasticos', 
    '/Metalicos', 
    '/', 
    '/auth/signin', 
    '/pages/membros', 
    '/pages/tecnologias']

  if (allowedRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Redirect everything else to /
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|static|img|images).*)'],
}
