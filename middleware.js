// middleware.js

import { NextResponse } from "next/server";

export default function middleware(req) {
  let loggedin = req.cookies.get("authToken");
  const { pathname } = req.nextUrl;
  // console.log("called middleware---", loggedin, pathname);

  // if (loggedin && pathname === "/profile") {
  //   console.log("called");
  //   return NextResponse.redirect(new URL("/profile", req.url));
  // }

  if (loggedin && pathname == "/signin") {
    console.log("singed in called");
    return NextResponse.redirect(new URL("/profile", req.url));
  }
  if (!loggedin && pathname == "/profile") {
    console.log("not called");
    return NextResponse.redirect(new URL("/signin", req.url));
  }
}

// export const config = {
//   matcher: "/((?!api|static|.*\\..*|_next).*)",
//   // matcher: ["/profile"],
// };
