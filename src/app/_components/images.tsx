"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { getNewImages } from "~/app/_components/get-new-images";
import { useInView } from "react-intersection-observer";
import { ImageMetaData } from "~/lib/types";

const initialImages: ImageMetaData[] = [];
const NUMBER_OF_IMAGES_TO_FETCH = 15;

export function Images() {
  const [myImages, setMyImages] = useState<ImageMetaData[]>(initialImages);
  const [isPending, startTransition] = useTransition();
  const [offset, setOffset] = useState(0);
  const { ref, inView } = useInView();

  function loadMoreImages() {
    startTransition(async () => {
      const newImages = await getNewImages(NUMBER_OF_IMAGES_TO_FETCH, offset);
      setMyImages([...myImages, ...newImages]);
      setOffset(offset + NUMBER_OF_IMAGES_TO_FETCH);
    });
  }

  useEffect(() => {
    if (inView) {
      loadMoreImages();
    }
  }, [inView]);

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
      <div ref={ref} />
    </div>
  );
}
