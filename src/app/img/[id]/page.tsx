import ImagePageView from "~/components/image-page-view";

export default function ImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <ImagePageView id={photoId} />;
}
