"use client";

import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center m-12">
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: "bg-primary hover:bg-primary/80",
            footerActionLink: "text-primary hover:text-primary"
          }
        }}
      />
    </div>
  );


}
