import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "~/app/_components/images";

export const dynamic = "force-dynamic";

export default function HomePage() {
  return (
    <div>
      <SignedOut>
        <div className="h-full w-full text-center text-xl">
          Sign in to view your images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </div>
  );
}
