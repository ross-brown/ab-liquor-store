import { Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "./components/contact-form";
import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/ui/container";

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto grid max-w-[80rem] grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-[36rem] lg:mx-0 lg:max-w-[32rem]">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Get in touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We appreciate our customers and are here to support you with any questions, inquiries, or feedback you may have. Feel free to reach out to us through the contact form, and we will respond as soon as possible.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-[0_0_auto]">
                  <span className="sr-only">Address</span>
                  <MapPin className="w-6 h-7 text-gray-400" />
                </dt>
                <dd>
                  2234 East Ben White Boulevard
                  <br />
                  Austin, TX 78741
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-[0_0_auto]">
                  <span className="sr-only">Phone</span>
                  <Phone className="w-6 h-7 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+15124456319" className="hover:text-gray-900">
                    (512) 445-6319
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-[0_0_auto]">
                  <span className="sr-only">Email</span>
                  <Mail className="w-6 h-7 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:cetro2@yahoo.com" className="hover:text-gray-900">
                    cetro2@yahoo.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );

}
