"use client";

import ReactCountryFlag from "react-country-flag";
import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";
import Currency from "./ui/currency";
import Button from "./ui/button";
import useCart from "@/hooks/use-cart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import ReviewStars from "./ui/review-stars";
import { FaCartPlus } from "react-icons/fa6";

interface InfoProps {
  data: Product;
}

export default function Info({ data }: InfoProps) {
  const [quantity, setQuantity] = useState("1");

  const cart = useCart();

  function addToCart() {
    cart.addItem(data, Number(quantity));
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-center justify-start gap-x-5">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
        <ReviewStars />
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <div className="font-medium">
            {data.description}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>
            {data.size.name}
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Country:</h3>
          <div>
            {data.country.name}
            <ReactCountryFlag
              countryCode={data.country.value}
              svg
              style={{ width: "3rem", height: "1.5rem" }}
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={addToCart} className="flex items-center gap-x-2 bg-primary">
          Add to Cart
          <FaCartPlus size={24} />
        </Button>
        <Select onValueChange={(value) => setQuantity(value)} defaultValue={quantity}>
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
  );
}
