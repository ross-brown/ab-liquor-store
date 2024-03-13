import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import ReviewList from "@/components/review-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.productId);
  const productsInCategory = await getProducts({
    categoryId: product?.category?.id
  });
  const suggestedProducts = productsInCategory.filter(p => p.id !== product.id);

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 md:px-8">
          <div className="md:grid md:grid-cols-2 md:items-start md:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 md:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Products" items={suggestedProducts} />
          <hr className="my-10" />
          <ReviewList reviews={[]} />
        </div>
      </Container>
    </div>
  );
}
