import GallerySkeleton from "@/components/skeletons/gallery-skeleton";
import InfoSkeleton from "@/components/skeletons/info-skeleton";
import Container from "@/components/ui/container";


export default function Loading() {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 md:px-8">
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
            <GallerySkeleton />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
              <InfoSkeleton />
            </div>
          </div>
          <hr className="my-10" />
          {/* <ProductList title="Related Products" items={suggestedProducts} /> */}
          <hr className="my-10" />
          {/* <ReviewList reviews={product.reviews} /> */}
        </div>
      </Container>
    </div>
  );
}
