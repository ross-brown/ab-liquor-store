"use client";

import Link from "next/link";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { X } from "lucide-react";
import { Menu as IconMenu } from "lucide-react";

import MainNav from "@/components/navbar/main-nav";
import NavbarActions from "@/components/navbar/navbar-actions";
import ProfileButton from "./components/profile-button";
import { Category } from "@/types";

interface NavbarProps {
  categories: Category[];
}

const Navbar2 = ({ categories }: NavbarProps) => {
  return (
    <Disclosure as="nav" className="border-b">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* MOBILE MENU BUTTON */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset
                focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <X className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <IconMenu className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center md:items-center md:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                    <Image
                      width={100}
                      height={100}
                      src="/images/abl_logo.webp"
                      alt="A&B Liquor Logo"
                      className="h-11 w-auto"
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:block">
                  <MainNav data={categories} />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0 gap-4">
                <NavbarActions />
                <div className="hidden md:block">
                  <ProfileButton />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {categories.map((item) => (
                <Disclosure.Button
                  key={item.id}
                  as="a"
                  href={`/category/${item.id}`}
                  className={"block rounded-md px-3 py-2 text-sm font-medium text-neutral-500 hover:text-black hover:bg-gray-100"}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="px-3 py-2">
                <ProfileButton />
              </div>
            </div>
          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
  );
};

export default Navbar2;
