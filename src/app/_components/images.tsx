"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { ImageMetaData } from "~/lib/types";

const initialImages: ImageMetaData[] = [];
const NUMBER_OF_IMAGES_TO_FETCH = 15;

export function Images() {
  const [images, setImages] = useState<ImageMetaData[]>(initialImages);
  const [offset, setOffset] = useState(0);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetch(`/api/images?limit=${NUMBER_OF_IMAGES_TO_FETCH}&offset=${offset}`)
        .then((res) => res.json())
        .then((data) => {
          const moreImages = JSON.parse(data.imagesAsJson);
          setImages([...images, ...moreImages]);
          setOffset(offset + NUMBER_OF_IMAGES_TO_FETCH);
        });
    }
  }, [inView]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3">
          {images.map((image) => (
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
