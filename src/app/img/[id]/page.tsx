import ImagePageView from "~/components/image-page-view";

export default function ImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  return <ImagePageView id={idAsNumber} />;
}
