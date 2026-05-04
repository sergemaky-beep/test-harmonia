"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { guides, categories, type Guide } from "@/lib/guides";

const COLORS = {
  primary: "#0E7377",
  secondary: "#0E7377",
  accent: "#C4A35A",
  light: "#FDF0EB",
};

export default function GuidesFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredGuides: Guide[] = useMemo(() => {
    if (!selectedCategory) return guides;
    return guides.filter((guide) => guide.categorySlug === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <div className="mb-12">
          <h2
            className="text-lg font-semibold mb-6"
            style={{ color: COLORS.primary }}
          >
            Filtrer par catégorie
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? "text-white shadow-md"
                  : "border-2 text-gray-700 hover:border-opacity-50"
              }`}
              style={{
                backgroundColor:
                  selectedCategory === null ? COLORS.secondary : "transparent",
                borderColor: COLORS.secondary,
              }}
            >
              Tous les guides
            </button>

            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.slug
                    ? "text-white shadow-md"
                    : "border-2 text-gray-700 hover:border-opacity-50"
                }`}
                style={{
                  backgroundColor:
                    selectedCategory === category.slug
                      ? COLORS.secondary
                      : "transparent",
                  borderColor: COLORS.secondary,
                }}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucun guide trouvé pour cette catégorie.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/guides-copropriete/${guide.slug}`}>
      <article
        className="h-full p-6 rounded-lg border-2 hover:shadow-lg transition-all cursor-pointer flex flex-col"
        style={{ borderColor: COLORS.light }}
      >
        <div className="mb-4">
          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white"
            style={{ backgroundColor: COLORS.accent }}
          >
            {guide.category}
          </span>
        </div>

        <h3
          className="text-xl font-bold mb-3 flex-grow"
          style={{ color: COLORS.primary }}
        >
          {guide.title}
        </h3>

        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {guide.excerpt}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
          <span>{guide.readTime} min de lecture</span>
          <span>
            Lire l&apos;article{" "}
            <span
              className="font-bold"
              style={{ color: COLORS.secondary }}
            >
              →
            </span>
          </span>
        </div>
      </article>
    </Link>
  );
}
