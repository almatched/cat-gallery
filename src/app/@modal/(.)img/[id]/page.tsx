import ImagePageView from "~/components/image-page-view";
import { Modal } from "./modal";
import { Suspense } from "react";

export default function ImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <Suspense>
        <ImagePageView id={photoId} />
      </Suspense>
    </Modal>
  );
}
