import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Images } from "~/app/_components/images";
import { getNewImages } from "~/app/_components/get-new-images";

export const dynamic = "force-dynamic";

const NUMBER_OF_IMAGES_TO_FETCH = 5;
const initialImages = await getNewImages(NUMBER_OF_IMAGES_TO_FETCH, 0);

export default function HomePage() {
  return (
    <div>
      <SignedOut>
        <div className="h-full w-full text-center text-xl">
          Sign in to view your images
        </div>
      </SignedOut>
      <SignedIn>
        <Images images={initialImages} numberOfImagesToFetch={NUMBER_OF_IMAGES_TO_FETCH} />
      </SignedIn>
    </div>
  );
}
