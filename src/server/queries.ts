import "server-only";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { db } from "~/server/db";
import { images } from "./db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import analyticsServerClient from "./analytics";
import { utapi } from "./uploadthing";

export async function getImages(page: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const fullUserData = await clerkClient.users.getUser(user.userId);

  if (fullUserData?.privateMetadata?.["can-read"] !== true) {
    throw new Error("User Does Not Have Read Permissions");
  }

  const pageAsNumber = Number(page);
  const limit = 15 * pageAsNumber;

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
    limit: limit,
  });

  return images;
}

export async function getImage(id: number) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const fullUserData = await clerkClient.users.getUser(user.userId);

  if (fullUserData?.privateMetadata?.["can-read"] !== true) {
    throw new Error("User Does Not Have Read Permissions");
  }

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) notFound();

  return image;
}

export async function deleteImage(id: number, url: string) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const fullUserData = await clerkClient.users.getUser(user.userId);

  if (fullUserData?.privateMetadata?.["can-delete"] !== true) {
    throw new Error("User Does Not Have Delete Permissions");
  }

  const urlArray = url.split("/");
  const deleteKey = urlArray[urlArray.length - 1];

  if (typeof deleteKey === "string") {
    await db.delete(images).where(eq(images.id, id));
    await utapi.deleteFiles(deleteKey);
  }

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
      imageId: id,
    },
  });
}
