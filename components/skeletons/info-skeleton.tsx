import { Skeleton } from "../ui/skeleton";

export default function InfoSkeleton() {
  return (
    <div>
      <Skeleton className="h-10 w-4/6"/>
      <div className="mt-3 flex items-center justify-start gap-x-5">
        <Skeleton className="h-8 w-24"/>
        <div className="flex items-center gap-x-2">
          <Skeleton className="h-8 w-28"/>
          <Skeleton className="h-6 w-20"/>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col items-center gap-y-2">
            <Skeleton className="h-6 w-full"/>
            <Skeleton className="h-6 w-full"/>
            <Skeleton className="h-6 w-full"/>
            <Skeleton className="h-6 w-full"/>
            <Skeleton className="h-6 w-full"/>
        </div>
        <div className="flex items-center gap-x-4">
          <Skeleton className="h-6 w-10"/>
          <Skeleton className="h-6 w-12"/>
        </div>
        <div className="flex items-center gap-x-4">
          <Skeleton className="h-6 w-20"/>
          <Skeleton className="h-6 w-20"/>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Skeleton className="h-10 w-32"/>
        <Skeleton className="h-10 w-16"/>
      </div>
    </div>
  );
}
