import Link from "next/link";
import Image from "next/image";

import getCategories from "@/actions/get-categories";
import Container from "@/components/ui/container";
import MainNav from "@/components/navbar/main-nav";
import NavbarActions from "@/components/navbar/navbar-actions";
import ProfileButton from "./components/profile-button";

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
            <ProfileButton />
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
