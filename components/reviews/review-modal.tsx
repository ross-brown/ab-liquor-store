"use client";

import Modal from "../ui/modal";
import useReviewModal from "@/hooks/use-review-modal";
import ReviewForm from "./review-form";


export default function ReviewModal() {
  const { isOpen, onClose } = useReviewModal();

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <div className="w-full">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Write a Review
          </h2>
          <p className="mt-2 text-base leading-8 text-gray-600">
            Fields marked with an asterisk (*) must be filled in.
          </p>
        </div>
        <ReviewForm />
      </div>
    </Modal>
  );
}
