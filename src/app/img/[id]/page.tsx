import ImagePageView from "~/components/image-page-view";

export default function ImagePage({
  params: { id: photoId },
  searchParams,
}: {
  params: { id: string };
  searchParams?: {
    page?: string;
  };
}) {
  const page = Number(searchParams?.page) || 1;

  return <ImagePageView id={photoId} page={page} />;
}
