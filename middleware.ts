import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DESTINATION = "https://socketshock.com";

export function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const host = nextUrl.host || "";

  // Allow local development without redirect
  if (host.startsWith("localhost") || host.startsWith("127.0.0.1") || host.startsWith("0.0.0.0")) {
    return NextResponse.next();
  }

  // Always send to the root of the destination
  return NextResponse.redirect(DESTINATION, 308);
}

export const config = {
  matcher: "/:path*",
};
