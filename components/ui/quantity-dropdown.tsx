"use client";

import { SelectContent, SelectItem } from "./select";

interface QuantityDropdownProps {
  maxQuantity: number;
}

export default function QuantityDropdown({ maxQuantity }: QuantityDropdownProps) {
  const quantityOptions = Array.from({ length: maxQuantity }, (_, i) => i + 1);

  return (
    <SelectContent>
      {quantityOptions.map((amount) => (
        <SelectItem
          key={amount}
          value={amount.toString()}
        >
          {amount}
        </SelectItem>
      ))}
    </SelectContent>
  );
}
