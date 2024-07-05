import ImagePageView from "~/components/image-page-view";
import { Modal } from "./modal";
import { Suspense } from "react";

export default function ImagePage({
  params: { id: photoId },
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    page?: string;
  },
}) {
  const page = Number(searchParams?.page) || 1;
  return (
    <Modal>
      <Suspense>
        <ImagePageView id={photoId} page={page} />
      </Suspense>
    </Modal>
  );
}
