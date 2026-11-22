import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mario Adventure Quiz — Game Edukasi Platformer 2D" },
      {
        name: "description",
        content:
          "Petualangan platformer 2D dengan kuis edukasi, mode satu atau dua pemain, dan bank soal untuk kelas 1–6.",
      },
      { property: "og:title", content: "Mario Adventure Quiz — Game Edukasi" },
      {
        property: "og:description",
        content:
          "Mainkan platformer edukasi dengan 36 soal bawaan, pilihan satu atau dua pemain, dan tantangan checkpoint.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="fixed inset-0 h-dvh w-full overflow-hidden bg-background">
      <iframe
        src="/game/index.html"
        title="Mario Adventure Quiz"
        className="block h-full w-full border-0"
        allow="autoplay; fullscreen"
        allowFullScreen
      />
    </main>
  );
}
