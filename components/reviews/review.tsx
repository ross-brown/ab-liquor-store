import { format } from "date-fns";
import { X } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

import { Review } from "@/types";
import ReviewStars from "../ui/review-stars";
import IconButton from "../ui/icon-button";

const DATE_FORMAT = "MMMM dd, yyyy";

interface ReviewProps {
  data: Review;
}

export default function Review({ data }: ReviewProps) {
  const { user } = useUser();
  const router = useRouter();

  async function onRemove() {
    toast.promise(axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/reviews/${data.id}`), {
      loading: "Deleting review",
      success: "Review deleted",
      error: "Failed to delete review"
    });
    router.refresh();
  }

  return (
    <div className="relative py-10">
      {user?.id === data.storeUserId && (
        <div className="absolute z-10 right-0 top-4">
          <IconButton
            onClick={onRemove}
            icon={<X size={15} className="text-red-600" />}
            ariaLabel="Remove review"
          />
        </div>
      )}
      <div className="flex items-center">
        <div className="flex flex-col gap-3">
          <div>
            <h4 className="text-sm font-bold text-gray-900">
              {data.author}
            </h4>
            <p className="text-sm text-gray-400">
              {format(new Date(data.createdAt), DATE_FORMAT)}
            </p>
          </div>
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
