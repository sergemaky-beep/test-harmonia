import { Metadata } from "next";
import Link from "next/link";
import { guides, getGuideBySlug, getRelatedGuides } from "@/lib/guides";

const COLORS = {
  primary: "#0E7377",
  secondary: "#0E7377",
  accent: "#C4A35A",
  light: "#FDF0EB",
};

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return {
      title: "Guide non trouvé | Harmonia Syndic",
      description: "Le guide que vous recherchez n'existe pas.",
    };
  }

  return {
    title: `${guide.title} | Harmonia Syndic`,
    description: guide.excerpt,
    keywords: [guide.category, "copropriété", "syndic", guide.title],
    authors: [{ name: "Harmonia Syndic" }],
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      type: "article",
      publishedTime: guide.publishedDate,
      url: `https://harmonia-syndic.fr/guides-copropriete/${guide.slug}`,
    },
  };
}

interface GuidePageProps {
  params: { slug: string };
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    return (
      <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: COLORS.primary }}
          >
            Guide non trouvé
          </h1>
          <p className="text-gray-600 mb-6">
            Désolé, le guide que vous recherchez n'existe pas.
          </p>
          <Link
            href="/guides-copropriete"
            className="inline-block px-6 py-3 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.secondary }}
          >
            Retour aux guides
          </Link>
        </div>
      </main>
    );
  }

  const relatedGuides = getRelatedGuides(guide.slug, 2);

  return (
    <main className="min-h-screen">
      {/* Breadcrumbs */}
      <nav className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center text-sm text-gray-600 space-x-2">
            <Link
              href="/"
              className="hover:text-gray-900 transition-colors"
              style={{ color: COLORS.secondary }}
            >
              Accueil
            </Link>
            <span>•</span>
            <Link
              href="/guides-copropriete"
              className="hover:text-gray-900 transition-colors"
              style={{ color: COLORS.secondary }}
            >
              Guides
            </Link>
            <span>•</span>
            <span className="text-gray-900 font-medium truncate">
              {guide.title}
            </span>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: COLORS.accent }}
            >
              {guide.category}
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ color: COLORS.primary }}
          >
            {guide.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 text-sm border-b border-gray-200 pb-6 mb-8">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Publié le</span>
              <time dateTime={guide.publishedDate}>
                {new Date(guide.publishedDate).toLocaleDateString("fr-FR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Temps de lecture</span>
              <span>{guide.readTime} minutes</span>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none mb-12"
            style={{
              "--tw-prose-headings": COLORS.primary,
              "--tw-prose-links": COLORS.secondary,
              "--tw-prose-bold": COLORS.primary,
            } as React.CSSProperties}
          >
            <ArticleContent content={guide.content} />
          </div>

          {/* CTA Section */}
          <section
            className="my-12 p-8 rounded-lg"
            style={{ backgroundColor: COLORS.light }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: COLORS.primary }}
            >
              Besoin d'un accompagnement personnalisé ?
            </h2>
            <p className="text-gray-700 mb-6">
              Notre équipe est là pour vous aider à gérer votre copropriété de
              manière efficace et transparente. Contactez-nous pour une première
              consultation.
            </p>
            <Link
              href="/demande-devis"
              className="inline-block px-8 py-3 rounded-lg text-white font-semibold transition-opacity hover:opacity-90"
              style={{ backgroundColor: COLORS.secondary }}
            >
              Demander une consultation
            </Link>
          </section>

          {/* Related Articles */}
          {relatedGuides.length > 0 && (
            <section className="mt-12 pt-12 border-t border-gray-200">
              <h2
                className="text-2xl font-bold mb-8"
                style={{ color: COLORS.primary }}
              >
                Articles similaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedGuides.map((relatedGuide) => (
                  <Link
                    key={relatedGuide.slug}
                    href={`/guides-copropriete/${relatedGuide.slug}`}
                  >
                    <article
                      className="p-6 rounded-lg border-2 hover:shadow-lg transition-all cursor-pointer h-full"
                      style={{ borderColor: COLORS.light }}
                    >
                      <span
                        className="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white mb-3"
                        style={{ backgroundColor: COLORS.accent }}
                      >
                        {relatedGuide.category}
                      </span>
                      <h3
                        className="text-lg font-bold mb-2"
                        style={{ color: COLORS.primary }}
                      >
                        {relatedGuide.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {relatedGuide.excerpt}
                      </p>
                      <div className="text-xs text-gray-500">
                        {relatedGuide.readTime} min de lecture
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </main>
  );
}

/**
 * Parse and render markdown-like content with proper heading and paragraph styling
 */
function ArticleContent({ content }: { content: string }) {
  const paragraphs = content.split("\n\n").filter((p) => p.trim());

  return (
    <div className="space-y-6">
      {paragraphs.map((para, index) => {
        // Check if it's a heading (## prefix)
        if (para.startsWith("## ")) {
          const headingText = para.slice(3);
          return (
            <h2
              key={index}
              className="text-2xl font-bold mt-8 mb-4"
              style={{ color: COLORS.primary }}
            >
              {headingText}
            </h2>
          );
        }

        // Regular paragraph
        return (
          <p key={index} className="text-gray-800 leading-relaxed text-base">
            {para}
          </p>
        );
      })}
    </div>
  );
}
