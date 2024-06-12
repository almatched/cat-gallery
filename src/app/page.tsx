import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-4 p-4">
        {images.map((image) => (
          <div className="aspect-square overflow-hidden rounded-md">
            <Link href={`/img/${image.id}`} key={image.id}>
              <Image
                src={image.url}
                alt={image.name}
                width={192}
                height={192}
                className="h-full w-full object-cover object-center"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function HomePage() {
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
