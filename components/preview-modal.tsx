"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./ui/modal";
import Gallery from "./gallery";
import Info from "./info";
import { useRouter } from "next/navigation";


export default function PreviewModal() {
  const { isOpen, onClose } = usePreviewModal();
  const product = usePreviewModal((state) => state.data);
  const router = useRouter();

  function onClick() {
    if (product) {
      router.push(`/product/${product.id}`);
      onClose();
    }
  }

  if (!product) return null;

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div
          className="sm:col-span-4 lg:col-span-5 hover:cursor-pointer"
          onClick={onClick}
        >
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
}
