import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  
  const auth = request.cookies.get("auth");
  console.log("🚀 ~ middleware ~ auth:", auth)

  const isLoggedIn = auth?.value === "true";
  const isLoginPage = request.nextUrl.pathname === "/login";

  if (auth?.value === "true") {
    return NextResponse.next();
  }

  if (!isLoggedIn && !isLoginPage) {
    // Redirect to login page
  console.log('not logged in')

    return NextResponse.redirect(new URL("/login", request.url));
  }
  console.log('auth and logged in redirect')

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
