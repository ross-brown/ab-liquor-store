import { Review as ReviewType } from "@/types";
import ReviewStars from "./ui/review-stars";
import { FaStar } from "react-icons/fa";
import { Progress } from "./ui/progress";
import Link from "next/link";
import Image from "next/image";
import Review from "./review";

interface ReviewListProps {
  reviews: ReviewType[];
}

export default function ReviewList({ reviews }: ReviewListProps) {

  const averageStars = 4;



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
            Based on {reviews.length} reviews
          </p>
        </div>
        <div className="mt-6">
          <h3 className="sr-only">Review data</h3>
          <dl className="space-y-3">
            <div className="flex items-center text-sm">
              <dt className="flex items-center flex-1">
                <p className="w-3 font-medium text-gray-900">
                  5
                  <span className="sr-only"> star reviews</span>
                </p>
                <div className="ml-1 flex flex-1 items-center">
                  <FaStar className="w-5 h-5 shrink-0 text-yellow-400" />
                  <Progress className="flex-1 ml-3 relative" value={50} />
                </div>
              </dt>
              <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                {50}%
              </dd>
            </div>
            <div className="flex items-center text-sm">
              <dt className="flex items-center flex-1">
                <p className="w-3 font-medium text-gray-900">
                  4
                  <span className="sr-only"> star reviews</span>
                </p>
                <div className="ml-1 flex flex-1 items-center">
                  <FaStar className="w-5 h-5 shrink-0 text-yellow-400" />
                  <Progress className="flex-1 ml-3 relative" value={50} />
                </div>
              </dt>
              <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                {50}%
              </dd>
            </div>
            <div className="flex items-center text-sm">
              <dt className="flex items-center flex-1">
                <p className="w-3 font-medium text-gray-900">
                  3
                  <span className="sr-only"> star reviews</span>
                </p>
                <div className="ml-1 flex flex-1 items-center">
                  <FaStar className="w-5 h-5 shrink-0 text-yellow-400" />
                  <Progress className="flex-1 ml-3 relative" value={50} />
                </div>
              </dt>
              <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                {50}%
              </dd>
            </div>
            <div className="flex items-center text-sm">
              <dt className="flex items-center flex-1">
                <p className="w-3 font-medium text-gray-900">
                  2
                  <span className="sr-only"> star reviews</span>
                </p>
                <div className="ml-1 flex flex-1 items-center">
                  <FaStar className="w-5 h-5 shrink-0 text-yellow-400" />
                  <Progress className="flex-1 ml-3 relative" value={50} />
                </div>
              </dt>
              <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                {50}%
              </dd>
            </div>
            <div className="flex items-center text-sm">
              <dt className="flex items-center flex-1">
                <p className="w-3 font-medium text-gray-900">
                  1
                  <span className="sr-only"> star reviews</span>
                </p>
                <div className="ml-1 flex flex-1 items-center">
                  <FaStar className="w-5 h-5 shrink-0 text-yellow-400" />
                  <Progress className="flex-1 ml-3 relative" value={50} />
                </div>
              </dt>
              <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                {50}%
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">
            Share your thoughts
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            If you&apos;ve used this product, share your thoughts with other customers
          </p>
          <Link
            href="#"
            className="mt-6 inline-flex w-full items-center justify-center rounded-sm border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 sm:w-auto lg:w-full hover:bg-gray-100"
          >
            Write a review
          </Link>
        </div>
      </div>
      <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
        <h3 className="sr-only">Recent reviews</h3>
        <div className="flow-root">
          <div className="-my-12 divide-y divide-gray-200">
            <Review data={{
              id: "99",
              author: "Michelle Chahda",
              text: "This stuff is AMAZING! I highly recommend!",
              stars: 5
            }} />
            <Review data={{
              id: "93",
              author: "Ross Brown",
              text: "This is another review",
              stars: 3
            }}
            />
            <Review data={{
              id: "912",
              author: "Stephen Brown",
              text: "Never a let down. Good for football games and gatherings on the weekends.",
              stars: 4
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
