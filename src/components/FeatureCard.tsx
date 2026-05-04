interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card p-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-[#EBF5FB] rounded-lg flex items-center justify-center text-3xl">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-[#1B4F72]">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
