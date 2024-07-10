import {
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "./upload-button";
import { Skeleton } from "~/components/ui/skeleton";

export function TopNav() {
  return (
    <nav className="font-semiboldg flex w-full items-center justify-between gap-4 border-b p-4 text-xl">
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
          <div className="flex h-8 w-16 items-center justify-center">
            <ClerkLoading>
              <Skeleton className="h-8 w-16 " />
            </ClerkLoading>
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
          <UploadButton />
          <div className="flex h-8 w-8 items-center justify-center">
            <ClerkLoading>
              <Skeleton className="h-8 w-8 rounded-full" />
            </ClerkLoading>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}
