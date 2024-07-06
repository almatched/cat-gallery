import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "~/app/_components/images";
import { InfiniteScrolling } from "~/app/_components/infinite-scrolling";

export const dynamic = "force-dynamic";

export default function HomePage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const page = Number(searchParams?.page);
  return (
    <div>
      <SignedOut>
        <div className="h-full w-full text-center text-xl">
          Sign in to view your images
        </div>
      </SignedOut>
      <SignedIn>
        <div>
          <Images page={page} />
          <InfiniteScrolling />
        </div>
      </SignedIn>
    </div>
  );
}
