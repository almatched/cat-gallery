import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, request) => {
  const { userId }: { userId: string | null } = auth();
  const reqSearchParams = request.nextUrl.searchParams;
  const hasPage = reqSearchParams.has("page");

  if (!userId) {
    if (hasPage) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (userId) {
    if (!hasPage) {
      return NextResponse.redirect(new URL("/?page=1", request.url));
    }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
