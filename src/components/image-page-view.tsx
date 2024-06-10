import { getImage } from "~/server/queries";

export default async function ImagePageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full text-white">
      <div className="h-full w-full flex justify-center items-center">
        <img src={image.url} className="w-96" />
      </div>
      
      <div className="w-48 border-l shrink-0">
        meta
      </div>
    </div>
  );
}
