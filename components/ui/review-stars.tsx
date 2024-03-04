import { FaStar } from "react-icons/fa";


// interface ReviewStarsProps {
//   reviewData: Review[];
// }

export default function ReviewStars() {
  return (
    <div className="flex items-center">
      <FaStar className="shrink-0 h-5 w-5 text-yellow-400" />
      <FaStar className="shrink-0 h-5 w-5 text-yellow-400" />
      <FaStar className="shrink-0 h-5 w-5 text-yellow-400" />
      <FaStar className="shrink-0 h-5 w-5 text-yellow-400" />
      <FaStar className="shrink-0 h-5 w-5 text-gray-200" />
      <p className="text-sm ml-2 text-gray-500">53 reviews</p>
    </div>
  );
}
