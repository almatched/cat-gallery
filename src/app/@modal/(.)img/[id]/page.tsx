import ImagePageView from "~/components/image-page-view";
import { Modal } from "./modal";

export default function ImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return (
    <Modal>
      <ImagePageView id={idAsNumber} />
    </Modal>
  );
}
