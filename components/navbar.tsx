import Link from "next/link";

import getCategories from "@/actions/get-categories";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FaUser } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi2";


const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex">
            <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
              <Image
                width={100}
                height={100}
                src="/images/abl_logo.webp"
                alt="Logo"
                className="h-auto"
              />
            </Link>
            <MainNav data={categories} />
          </div>
          <div className="flex items-center space-x-5">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton>
                <HiOutlineUser className="h-6 w-6 text-gray-800 cursor-pointer" />
              </SignInButton>
            </SignedOut>
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
