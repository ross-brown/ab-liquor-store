"use client";

import Image from "next/image";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { useState } from "react";

interface CartItemProps {
  data: { product: Product, quantity: number; };
}

export default function CartItem({ data }: CartItemProps) {
  const [quantity, setQuantity] = useState(data.quantity.toString());

  const cart = useCart();

  function onRemove() {
    cart.removeItem(data.product.id);
  }

  function onQuantityChange(value: string) {
    setQuantity(value)
    cart.updateItem(data.product.id, Number(value));
  }

  return (
    <li className="flex py-8 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.product.images[0].url}
          alt=""
          className="object-contain object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 -top-7">
          <IconButton onClick={onRemove} icon={<X size={15} className="text-red-600" />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">
              {data.product.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{data.product.country.name}</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
              {data.product.size.name}
            </p>
          </div>
          <Currency value={data.product.price} />
        </div>
        <div className="mt-5 sm:mt-0">
          <Select onValueChange={onQuantityChange} defaultValue={quantity}>
            <SelectTrigger className="w-16">
              <SelectValue placeholder="Quantity" />
            </SelectTrigger>
            <SelectContent>
              {[...Array(10)].map((_, i) => (
                <SelectItem
                  key={i}
                  value={(i + 1).toString()}
                >
                  {i + 1}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </li>
  );
}
