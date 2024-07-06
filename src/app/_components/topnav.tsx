import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { UploadButton } from "./upload-button";

export function TopNav() {
  return (
    <nav className="font-semiboldg flex w-full items-center justify-between border-b p-4 text-xl">
      <SignedOut>
        <Link href="/" className="cursor-pointer">
          Gallery
        </Link>
      </SignedOut>
      <SignedIn>
        <Link href="/?page=1" className="cursor-pointer">
          Gallery
        </Link>
      </SignedIn>
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
