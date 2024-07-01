import { getMyImages } from "~/server/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get("limit"));
  const offset = Number(searchParams.get("offset"));

  const images = await getMyImages(limit, offset);
  const imagesAsJson = JSON.stringify(images);

  return Response.json({ imagesAsJson });
}
