import ImagePageView from "~/components/image-page-view";
import { Modal } from "./modal";

export default function ImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <ImagePageView id={photoId} />
    </Modal>
  );
}
