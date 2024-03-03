import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-[80rem] px-5 pb-8 pt-16 sm:pt-24 md:px-8">
        <div className="">
          <div className="space-y-8 relative">
            <Image
              width={100}
              height={100}
              alt="A&B Logo"
              className="h-12 aspect-square"
              src={"/images/abl_logo.webp"}
            />
            <p className="text-sm leading-6 text-gray-600">
              East Austin&apos;s premier, family-owned liquor destination offering a wide, handpicked selection of wines, beers, and spirits.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/abliquoraustin/"
                className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="mailto:cetro2@yahoo.com" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div>
              <div className="flex gap-3">
                <Phone className="h-6 w-6 text-gray-600" />
                <p className="text-gray-600">
                 <a href="tel:5124456319">(512) 445-6319</a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base leading-6 font-semibold text-gray-900">
                  Shop
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600">
                      Wine
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600">
                      Beer
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600">
                      Liquor
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600">
                      Tobacco
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base leading-6 font-semibold text-gray-900">
                  About Us
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/faq" className="text-sm leading-6 text-gray-600">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps?q=ab+liquor+2234+east+ben+white+boulevard+austin+tx+78741,30.21655,-97.73974" target="_blank" className="text-sm leading-6 text-gray-600">
                      Location
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 invisible">
                      {"-"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* <div>
                <h3 className="text-base leading-6 font-semibold text-gray-900">
                  About Us
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/faq" className="text-sm leading-6 text-gray-600">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-sm leading-6 text-gray-600">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps?q=ab+liquor+2234+east+ben+white+boulevard+austin+tx+78741,30.21655,-97.73974" target="_blank" className="text-sm leading-6 text-gray-600">
                      Location
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 invisible">
                      {"-"}
                    </a>
                  </li>
                </ul>
              </div> */}
              <div>
                <h3 className="text-base leading-6 font-semibold text-gray-900">
                  Store Hours
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-gray-600">
                    Mon - Sat: 10:00 AM - 9:00 PM
                  </li>
                  <li className="text-sm leading-6 text-gray-600">
                    Sun: Closed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-900/10 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} A&B Liquor, Inc. All rights reserved.
          </p>
          <p className="text-xs leading-5 text-gray-500">
            Built by <a href="http://linkedin.com/in/ross-brown-" target="_blank">
              Ross Brown
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
