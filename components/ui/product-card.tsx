"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import IconButton from "@/components/ui/icon-button";

import Currency from "@/components/ui/currency";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { FaStar } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { getAverageRating } from "@/lib/utils";

interface ProductCardProps {
  data: Product;
}

export default function ProductCard({ data }: ProductCardProps) {
  const cart = useCart();
  const { onOpen } = usePreviewModal();
  const router = useRouter();
  const averageStars = getAverageRating(data.reviews);

  function handleClick() {
    router.push(`/product/${data?.id}`);
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    cart.addItem(data, 1);
  };

  return (
    <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 flex flex-col justify-between">
      <div className="space-y-4">
        <div className="aspect-square rounded-xl bg-white relative">
          <Image
            alt="Image"
            src={data?.images?.[0]?.url}
            fill
            className="object-contain rounded-md"
          />
          <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
            <div className="flex gap-x-6 justify-center">
              <IconButton
                onClick={onPreview}
                icon={<Expand size={20} className="text-gray-600" />}
                ariaLabel="Open preview"
              />
              <IconButton
                onClick={onAddToCart}
                icon={<FaCartPlus size={20} className="text-gray-600" />}
                ariaLabel="Add to cart"
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-semibold text-sm lg:text-base">
            {data.name}
          </p>
          <p className="text-sm text-gray-500">
            {data.size?.name}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-3 mt-auto">
        <Currency value={data?.price} />
        {averageStars !== 0 && (
          <div className="flex items-center gap-x-1 text-base">
            <FaStar className="text-yellow-400" />
            <span>{averageStars}</span>
          </div>
        )}
      </div>
    </div>
  );
}
