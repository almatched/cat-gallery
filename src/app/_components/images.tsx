import { getImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";
import { InfiniteScrolling } from "~/app/_components/infinite-scrolling";

export async function Images({ page }: { page: number }) {
  const images = await getImages(page);

  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3">
        {images.map((image) => (
          <div
            className="aspect-square overflow-hidden rounded-md"
            key={image.id}
          >
            <Link href={`/img/${image.id}?page=${page}`}>
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
        <InfiniteScrolling />
      </div>
    </div>
  );
}
