import { Dot } from "lucide-react";
import Image from "next/image";


export default function StoryPage() {
  return (
    <main className="isolate">
      <div className="relative isolate -z-10 overflow-hidden">
        <div className="mx-auto max-w-[80rem] px-6 py-32 sm:py-40 lg:px-8">
          <div
            className="mx-auto max-w-[42rem] lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6  xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
          >
            <h1 className="max-w-[42rem] text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              We are East Austin&apos;s premier, family-owned liquor destination.
            </h1>
            <div className="mt-6 max-w-[36rem] lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quod. Similique explicabo laborum error corporis unde ratione assumenda adipisci quisquam doloribus nihil! Repellendus, nisi vitae voluptates distinctio fugiat quaerat pariatur.
              </p>
            </div>
            <Image
              alt="Main story image"
              width={400}
              height={100}
              src={"https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"}
              className="mt-10 aspect-[6/5] w-full max-w-[32rem] rounded-[1rem] object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36 h-auto"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32"></div>
      </div>
      <div className="mx-auto -mt-8 max-w-[80rem] px-6 lg:px-8">
        <div className="mx-auto grid max-w-[42rem] grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <div>
            <time
              dateTime="2021-09"
              className="flex items-center text-sm font-semibold leading-6 text-primary"
            >
              <Dot className="w-4 h-4 mr-2 flex-none" />
              Aug 1993
              <div className="absolute ml-2 h-[1px] w-screen -translate-x-full bg-primary bg-opacity-10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"></div>
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              John&apos;s Food Mart opens
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              John and Charles Chahda create their LLC and open their doors in East Ausitn.
            </p>
          </div>
          <div>
            <time
              dateTime="2021-09"
              className="flex items-center text-sm font-semibold leading-6 text-primary"
            >
              <Dot className="w-4 h-4 mr-2 flex-none" />
              Feb 2000
              <div className="absolute ml-2 h-[1px] w-screen -translate-x-full bg-primary bg-opacity-10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"></div>
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              John&apos;s Food Mart opens
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              John and Charles Chahda create their LLC and open their doors in East Ausitn.
            </p>
          </div>
          <div>
            <time
              dateTime="2021-09"
              className="flex items-center text-sm font-semibold leading-6 text-primary"
            >
              <Dot className="w-4 h-4 mr-2 flex-none" />
              May 2008
              <div className="absolute ml-2 h-[1px] w-screen -translate-x-full bg-primary bg-opacity-10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"></div>
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              John&apos;s Food Mart opens
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              John and Charles Chahda create their LLC and open their doors in East Ausitn.
            </p>
          </div>
          <div>
            <time
              dateTime="2021-09"
              className="flex items-center text-sm font-semibold leading-6 text-primary"
            >
              <Dot className="w-4 h-4 mr-2 flex-none" />
              Dec 2023
              <div className="absolute ml-2 h-[1px] w-screen -translate-x-full bg-primary bg-opacity-10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"></div>
            </time>
            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
              John&apos;s Food Mart opens
            </p>
            <p className="mt-1 text-base leading-7 text-gray-600">
              John and Charles Chahda create their LLC and open their doors in East Ausitn.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-32 overflow-hidden sm:mt-40">
        <div className="mx-auto max-w-[80rem] px-6 lg:flex lg:px-8">
          <div className="mx-auto grid max-w-[42rem] grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
            <div className="lg:col-end-1 lg:w-full lg:max-w-[32rem] lg:pb-8">
              <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Chahda&apos;s
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima distinctio, quos non saepe corrupti voluptate in deserunt nam, blanditiis maxime vero ex ratione, eaque molestias placeat ipsam! Ab, atque reprehenderit!</p>
              <p className="mt-6 text-base leading-6 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste maxime nemo aut dolores dolorum eaque impedit distinctio placeat alias in labore quas, nostrum magni odio. Explicabo quis corrupti vitae hic!</p>
            </div>
            <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
              <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                <div className="relative w-[37rem] max-w-none aspect-[7/5] rounded-md object-cover">
                  <Image
                    fill
                    alt="main story photo"
                    src={"https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
              <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                  <div className="relative w-[24rem] max-w-none aspect-[4/3] flex-none">
                    <Image
                      fill
                      src={"https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"}
                      alt="first photo"
                      className="rounded-md object-cover"
                    />
                  </div>
                </div>
                <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                  <div className="relative w-[37rem] max-w-none aspect-[7/5] rounded-md object-cover flex-none">
                  <Image
                      fill
                      src={"https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"}
                      alt="second MAIN photo"
                      className="rounded-md object-cover"
                    />
                  </div>
                </div>
                <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                  <div className="relative w-[24rem] max-w-none aspect-[4/3] rounded-md object-cover flex-none">
                  <Image
                      fill
                      src={"https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"}
                      alt="third photo"
                      className="rounded-md object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
