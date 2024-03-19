"use client";

import { useState } from "react";

import { Country, Size } from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  countries: Country[];
}

export default function MobileFilters({ sizes, countries }: MobileFiltersProps) {
  const [open, setOpen] = useState(false);

  function onOpen() {
    setOpen(true);
  }

  function onClose() {
    setOpen(false);
  }


  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} onClick={onClose} />} ariaLabel="close" />
            </div>
            <div className="p-4">
              <Filter
                valueKey="sizeId"
                name="Sizes"
                data={sizes}
              />
              <Filter
                valueKey="countryId"
                name="Countries"
                data={countries}
              />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
