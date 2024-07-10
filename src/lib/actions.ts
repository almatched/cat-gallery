"use server";

import { deleteImage } from "~/server/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteImageAction(
  idAsNumber: number,
  imageUrl: string,
  page: number,
) {
  await deleteImage(idAsNumber, imageUrl);

  revalidatePath("/");
  redirect(`/?page=${page}`);
}
