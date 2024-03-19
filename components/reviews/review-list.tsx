"use client";

import { Review as ReviewType } from "@/types";
import ReviewStars from "../ui/review-stars";
import Review from "./review";
import useReviewModal from "@/hooks/use-review-modal";
import Button from "../ui/button";
import { SignInButton, SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import ReviewPercents from "./review-percents";
import { getAverageRating } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface ReviewListProps {
  reviews: ReviewType[];
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const { onOpen } = useReviewModal();
  const averageStars = getAverageRating(reviews);
  const pathname = usePathname();

  function onClick() {
    onOpen();
  }

  return (
    <div
      className="mx-auto mx-w-[42rem] px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-[80rem] lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32"
    >
      <div className="lg:col-span-4">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customer Reviews
        </h2>
        <div className="mt-3 flex items-center">
          <div>
            <div className="flex items-center">
              <ReviewStars stars={averageStars} />
            </div>
            <p className="sr-only">{averageStars} out of 5 stars</p>
          </div>
          <p className="ml-2 text-sm text-gray-900">
            Based on {reviews.length} review{reviews.length !== 1 && "s"}
          </p>
        </div>
        <ReviewPercents reviews={reviews} />
        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">
            Share your thoughts
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            If you&apos;ve used this product, share your thoughts with other customers
          </p>
          <SignedIn>
            <Button
              onClick={onClick}
              className={`mt-6 inline-flex w-full items-center justify-center rounded-sm border
            border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 sm:w-auto lg:w-full hover:bg-gray-100`}
            >
              Write a review
            </Button>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" afterSignInUrl={pathname}>
              <Button
                className={`mt-6 inline-flex w-full items-center justify-center rounded-sm border
              border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 sm:w-auto lg:w-full hover:bg-gray-100`}
              >
                Write a review
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
      <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
        <h3 className="sr-only">Recent reviews</h3>
        <div className="flow-root">
          {reviews.length === 0 && (
            <p
              className="text-gray-500 text-center mt-10 lg:mt-0"
            >
              No reviews yet.
            </p>
          )}
          <div className="-my-12 divide-y divide-gray-200">
            {reviews.map(review => (
              <Review key={review.id} data={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
