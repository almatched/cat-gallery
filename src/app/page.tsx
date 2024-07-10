import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from '@clerk/nextjs/server';
import { redirect } from "next/navigation";
import { Images } from "~/app/_components/images";
import { InfiniteScrolling } from "~/app/_components/infinite-scrolling";

export const dynamic = "force-dynamic";

export default function HomePage({
  searchParams,
}: {
  searchParams?: { page?: string };
}) {
  const { userId }: { userId: string | null } = auth();
  const isPage = !!(searchParams?.page);

  if (!userId) {
    if (isPage) {
      redirect("/");
    }
  }
  if (userId) {
    if (!isPage) {
      redirect("/?page=1");
    }
  }
  
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
