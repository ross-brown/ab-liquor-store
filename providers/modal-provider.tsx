"use client";

import { useEffect, useState } from "react";

import PreviewModal from "@/components/preview-modal";
import ReviewModal from "@/components/reviews/review-modal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <PreviewModal />
      <ReviewModal />
    </>
  );
}
