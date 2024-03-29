"use client";

import { Tab } from "@headlessui/react";
import { Skeleton } from "../ui/skeleton";

export default function GallerySkeleton() {
  return (
    <Tab.Group as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <Tab.List className="grid grid-cols-4 gap-6">
          <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
            <div>
              <Skeleton className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md" />
              <span className="absolute inset-0 rounded-md" />
            </div>
          </Tab>
        </Tab.List>
      </div>
      <Tab.Panels className="aspect-square w-full">
        <Tab.Panel>
          <Skeleton className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
