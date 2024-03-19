import { Skeleton } from "../ui/skeleton";

export default function ProductListSkeleton() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-10 w-1/4" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <Skeleton className="rounded-xl p-3 space-y-4 aspect-square relative" />
        <Skeleton className="rounded-xl p-3 space-y-4 aspect-square relative" />
        <Skeleton className="rounded-xl p-3 space-y-4 aspect-square relative" />
        <Skeleton className="rounded-xl p-3 space-y-4 aspect-square relative" />
      </div>
    </div>
  );
}
