"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
    const router = useRouter();

  return (
    <nav className="font-semiboldg flex w-full items-center justify-between border-b p-4 text-xl">
      <div>Gallery</div>
      <div className="flex gap-4">
        <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
            router.refresh();
        }}/>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
