"use client";

import { useRouter } from "next/navigation";

import Modal from "./ui/modal";
import useReviewModal from "@/hooks/use-review-modal";
import ReviewForm from "./review-form";


export default function ReviewModal() {
  const { isOpen, onClose } = useReviewModal();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div
          className="sm:col-span-4 lg:col-span-5 hover:cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <h2>Write a review</h2>
          </div>
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <ReviewForm />
        </div>
      </div>
    </Modal>
  );
}
