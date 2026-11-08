import { Metadata } from "next";
import GuidesFilter from "@/components/GuidesFilter";

export const metadata: Metadata = {
  title: "Guides pratiques de la copropriété | Harmonia Syndic",
  description:
    "Tout ce que vous devez savoir pour bien gérer votre copropriété. Guides complets sur le syndic, les charges et vos droits en tant que copropriétaire.",
  keywords: [
    "guide copropriété",
    "syndic",
    "charges",
    "copropriétaire",
    "immeuble",
  ],
  openGraph: {
    title: "Guides pratiques de la copropriété",
    description:
      "Tout ce que vous devez savoir pour bien gérer votre copropriété.",
    url: "https://harmoniasyndic.fr/guides-copropriete",
    siteName: "Harmonia Syndic",
    type: "website",
  },
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            Guides pratiques de la copropriété
          </h1>
          <p className="text-xl text-gray-700">
            Tout ce que vous devez savoir pour bien gérer votre copropriété
          </p>
        </div>
      </section>

      {/* Filter + Grid (Client Component) */}
      <GuidesFilter />
    </main>
  );
}
