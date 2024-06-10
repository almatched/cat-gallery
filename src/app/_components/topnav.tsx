import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { UploadButton } from "./upload-button";

export function TopNav() {
  return (
    <nav className="font-semiboldg flex w-full items-center justify-between border-b p-4 text-xl">
      <div>Gallery</div>
      <div className="flex gap-4 items-center">
        <UploadButton />
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
