import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/e63b9a51-786d-4e64-a325-bf981a4a0970-s0un3.42.34.jpeg",
  "https://utfs.io/f/124e9e9c-6175-420b-95b6-5d8a958e6867-k742nn.jpeg",
  "https://utfs.io/f/5c158316-036d-4e10-8651-ecf19638772e-g98sqs.04.46.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index+1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}