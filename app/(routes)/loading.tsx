import ProductListSkeleton from "@/components/skeletons/product-list-skeleton";
import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl">
          <Skeleton className="rounded-xl overflow-hidden relative aspect-[4/1.3] bg-cover bg-center" />
        </div>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductListSkeleton />
        </div>
      </div>
    </Container>
  );
}
