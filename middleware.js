import { NextResponse } from "next/server";
export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const session =  String([...req.headers])
    if (session.includes('teaToken')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
  else if (req.nextUrl.pathname.startsWith("/dashboard")) {
    const session =  String([...req.headers])
    if (session.includes('localUserToken')) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", req.url));
  }
  console.log("req"+req.nextUrl.pathname)
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*','/dashboard/:path*']

}
