"use server";

import { deleteImage } from "~/server/queries";
import { revalidatePath } from "next/cache";

export async function deleteImageAction(idAsNumber: number, imageUrl: string, page: number) {
    await deleteImage(idAsNumber, imageUrl, page);
    revalidatePath("/");
  }