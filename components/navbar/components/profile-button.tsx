import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { HiOutlineUser } from "react-icons/hi2";

export default function ProfileButton() {
  return (
    <>
      <ClerkLoading>
        <Loader className="animate-spin" />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <HiOutlineUser className="h-6 w-6 text-gray-800 cursor-pointer" />
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </>
  );
}
