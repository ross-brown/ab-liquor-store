"use client";

import { Toaster } from "react-hot-toast";


export default function ToastProvider() {
  return (
    <Toaster
      toastOptions={{
        style: {
          fontSize: "1rem",
          fontWeight: "bold",
          padding: "0.75rem 1rem"
        }
      }}
    />
  );
}
