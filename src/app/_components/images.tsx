"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import { getNewImages } from "~/app/_components/get-new-images";

export function Images({ images, numberOfImagesToFetch }) {
  const [myImages, setMyImages] = useState(images);
  const [isPending, startTransition] = useTransition();
  const [offset, setOffset] = useState(numberOfImagesToFetch);

  function handleClick() {
    startTransition(async () => {
      const newImages = await getNewImages(numberOfImagesToFetch, offset);
      setMyImages([...myImages, ...newImages]);
      setOffset(offset + numberOfImagesToFetch);
    });
  }

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3">
          {myImages.map((image) => (
            <div
              className="aspect-square overflow-hidden rounded-md"
              key={image.id}
            >
              <Link href={`/img/${image.id}`}>
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
      <button type="button" className="bg-red-500 p-5" onClick={handleClick}>
        more
      </button>
    </div>
  );
}
