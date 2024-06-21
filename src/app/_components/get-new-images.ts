"use server";
import { getMyImages } from "~/server/queries";

export async function getNewImages(limit: number, offset: number) {
    const images = await getMyImages(limit, offset);

    return images;
}