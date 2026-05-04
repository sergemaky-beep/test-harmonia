interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export default function TestimonialCard({ quote, author, role, rating }: TestimonialCardProps) {
  return (
    <div className="card p-8">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? 'text-[#F39C12] text-xl' : 'text-gray-300 text-xl'}>
            ★
          </span>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-[#1B4F72]">{author}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
}
