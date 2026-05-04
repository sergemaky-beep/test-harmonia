import Link from 'next/link';

interface GuideCardProps {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
}

export default function GuideCard({ title, description, slug, icon }: GuideCardProps) {
  return (
    <Link href={`/guides-copropriete/${slug}`}>
      <div className="card p-8 cursor-pointer hover:border-l-4 hover:border-[#F39C12]">
        <div className="flex items-start gap-4">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#1B4F72] group-hover:text-[#F39C12]">
              {title}
            </h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <span className="text-[#2E86C1] font-medium hover:text-[#F39C12] transition-colors">
              Lire la suite →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
