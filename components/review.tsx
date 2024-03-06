import { Review } from "@/types";
import ReviewStars from "./ui/review-stars";

interface ReviewProps {
  data: Review;
}

export default function Review({ data }: ReviewProps) {
  return (
    <div className="py-12">
      <div className="flex items-center">
        {/* <Image /> */}
        <div className="ml-4">
          <h4 className="text-sm font-bold text-gray-900">
            {data.author}
          </h4>
          <div className="mt-1 flex items-center">
            <ReviewStars stars={data.stars} />
          </div>
          <p className="sr-only">
            {data.stars} out of 5 stars
          </p>
        </div>
      </div>
      <div className="mt-4 text-base italic text-gray-600">
        <p>{data.text}</p>
      </div>
    </div>
  );
}
