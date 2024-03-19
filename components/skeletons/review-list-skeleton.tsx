import { Skeleton } from "../ui/skeleton";

export default function ReviewListSkeleton() {
  return (
    <div
      className="mx-auto mx-w-[42rem] px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-[80rem] lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32"
    >
      <div className="lg:col-span-4">
        <Skeleton className="h-8 w-48" />
        <div className="mt-3 flex items-center">
          <div>
            <div className="flex items-center">
              <Skeleton className="h-6 w-32" />
            </div>
          </div>
          <Skeleton className="ml-2 h-5 w-32" />
        </div>
        <Skeleton className="mt-6 w-full h-40" />
        <div className="mt-10">
          <Skeleton className="h-6 w-40 mb-4" />
          <Skeleton className="h-4 w-full mb-1" />
          <Skeleton className="h-4 w-16 mb-4" />
          <Skeleton className="h-10 w-full sm:w-auto lg:w-full" />
        </div>
      </div>
      <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
        <div className="flow-root">
          <div className="space-y-3">
            <Skeleton className="relative py-10 w-full h-36" />
            <Skeleton className="relative py-10 w-full h-36" />
            <Skeleton className="relative py-10 w-full h-36" />
          </div>
        </div>
      </div>
    </div>
  );
}
