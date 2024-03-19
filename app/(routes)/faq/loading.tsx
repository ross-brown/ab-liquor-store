import Container from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function FAQLoadingPage() {
  return (
    <Container>
      <div className="px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-[56rem]">
          <Skeleton className="h-8 w-[21rem]"/>
          <Skeleton className="w-full h-[23rem] mt-10"/>
        </div>
      </div>
    </Container>
  );
}
