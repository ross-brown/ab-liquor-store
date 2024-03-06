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
        <div className="">
          <h4 className="text-sm font-bold text-gray-900">
            {data.author}
          </h4>
          <p className="text-sm text-gray-400">
            {data.createdAt}
          </p>
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
