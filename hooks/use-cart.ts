import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import toast from "react-hot-toast";

import { Product } from "@/types";

interface CartStore {
  items: { product: Product; quantity: number; }[];
  addItem: (data: Product, quantity: number) => void;
  updateItem: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product, quantity: number = 1) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.product.id === data.id);

      if (existingItem) return toast("Item already in your cart.");

      set({ items: [...get().items, { product: data, quantity }] });
      toast.success("Item added to cart.");
    },
    updateItem: (id, newQuantity) => {
      const updatedItems = get().items.map((item) => {
        return item.product.id === id
          ? { ...item, quantity: newQuantity }
          : item;
      });

      set({ items: updatedItems });
    },
    removeItem: (id: string) => {
      set({ items: [...get().items.filter(item => item.product.id !== id)] });
      toast.success("Item removed from cart.");
    },
    removeAll: () => {
      set({ items: [] });
      toast.success("All items removed from cart.");
    }
  }), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage)
  })
);

export default useCart;
