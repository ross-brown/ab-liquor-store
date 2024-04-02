import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";


export default function ContactLoadingPage() {
  return (
    <Container className="mx-auto grid max-w-[80rem] grid-cols-1 lg:grid-cols-2">
      <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div className="mx-auto max-w-[36rem] lg:mx-0 lg:max-w-[32rem]">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="mt-6 w-[32rem] h-40" />
          <div className="mt-10 space-y-4">
            <div className="flex gap-x-4">
              <div className="flex-[0_0_auto]">
                <Skeleton className="h-10 w-72" />
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex-[0_0_auto]">
                <Skeleton className="h-10 w-[10rem]" />
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex-[0_0_auto]">
                <Skeleton className="h-10 w-48" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div className="mx-auto max-w-[36rem] lg:mr-0 lg:max-w-[32rem]">
          <Skeleton className="h-[30rem]" />
        </div>
      </div>
    </Container>
  );
}
