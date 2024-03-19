import { FaStar } from "react-icons/fa";
import { Progress } from "../ui/progress";
import { Review } from "@/types";
import { getRatingPercents } from "@/lib/utils";

interface ReviewPercentsProps {
  reviews: Review[];
}

export default function ReviewPercents({ reviews }: ReviewPercentsProps) {
  const percents = getRatingPercents(reviews);

  const starRatings = [5, 4, 3, 2, 1];

  return (
    <div className="mt-6">
      <h3 className="sr-only">Review data</h3>
      <dl className="space-y-3">
        {starRatings.map(rating => (
          <div className="flex items-center text-sm" key={rating}>
            <dt className="flex items-center flex-1">
              <p className="w-3 font-medium text-gray-900">
                {rating}
                <span className="sr-only"> star reviews</span>
              </p>
              <div className="ml-1 flex flex-1 items-center">
                <FaStar className="w-5 h-5 shrink-0 text-yellow-400" />
                <Progress className="flex-1 ml-3 relative" value={percents[rating]} />
              </div>
            </dt>
            <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
              {percents[rating]}%
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
