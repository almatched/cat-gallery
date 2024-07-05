import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "~/components/ui/button";
import { revalidatePath } from "next/cache";

export default async function ImagePageView({ id, page }: { id: string, page: number }) {
  const idAsNumber = Number(id);

  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");

  const image = await getImage(idAsNumber);

  async function handleDeleteImage(page: number) {
    "use server";

    await deleteImage(idAsNumber, image.url, page);
    revalidatePath("/");
  }

  const handleDeleteImageWithPage = handleDeleteImage.bind(null, page);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex h-full w-full min-w-0 text-white">
      <div className="flex h-full w-full items-center justify-center">
        <img
          alt={image.name}
          src={image.url}
          className="h-full w-full object-contain object-center"
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>

        <div className="p-2">
          <p>Uploaded by:</p>
          <p>{uploaderInfo.fullName}</p>
        </div>

        <div className="p-2">
          <p>Uploaded on:</p>
          <p>{new Date(image.createdAt).toLocaleDateString()}</p>
        </div>

        <div className="p-2">
          <form
            action={handleDeleteImageWithPage}
          >
            <Button type="submit" variant="destructive">
              Delete
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
