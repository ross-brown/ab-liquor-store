"use client";

import { Product } from "@/types";
import Currency from "./ui/currency";
import ReactCountryFlag from "react-country-flag";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";


interface InfoProps {
  data: Product;
}

export default function Info({ data }: InfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
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
        <Button className="flex items-center gap-x-2">
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
}
