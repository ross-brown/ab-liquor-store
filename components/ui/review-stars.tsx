import { FaStar } from "react-icons/fa";

interface ReviewStarsProps {
  stars: number;
}

export default function ReviewStars({ stars }: ReviewStarsProps) {
  const yellowStars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className={`shrink-0 h-5 w-5
      ${index < stars
          ? 'text-yellow-400'
          : 'text-gray-200'
        }`}
    />
  ));

  return (
    <div className="flex items-center">
      {yellowStars}
    </div>
  );
}
