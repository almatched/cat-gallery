import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function ImagePageView(props: { id: number }) {
  const image = await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full text-white min-w-0">
      <div className="flex h-full w-full items-center justify-center">
        <img src={image.url} className="h-full w-full object-contain" />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-lg text-center">{image.name}</div>

        <div className="p-2">
          <p>Uploaded by:</p>
          <p>{uploaderInfo.fullName}</p>
        </div>
        <div className="p-2">
          <p>Uploaded on:</p>
          <p>{new Date(image.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
