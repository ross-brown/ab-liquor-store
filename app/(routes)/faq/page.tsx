import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Container from "@/components/ui/container";

export default function FaqPage() {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-[56rem]">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              <AccordionItem value="quesiton-1" className="border-t">
                <AccordionTrigger>What is the legal requirement to purchase alcohol?</AccordionTrigger>
                <AccordionContent>
                  You must be at least <b>21 years of age</b> to order alcohol, and a signature is required for delivery/pickup. The customer is responsible for the purchase of alcohol and for any taxes that may be applicable. You must also show a valid government issued ID at the time of pickup/delivery.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quesiton-2">
                <AccordionTrigger>Return Policy?</AccordionTrigger>
                <AccordionContent>
                  All sales are final and there are no returns or exchanges allowed. If there is an issue with a product, please contact the store.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quesiton-3">
                <AccordionTrigger>Can I add items to an existing order?</AccordionTrigger>
                <AccordionContent>
                  No, orders cannot be edited online once it is placed. Please contact us to see how we can help.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quesiton-4">
                <AccordionTrigger>Do you ship or deliver to a PO Box?</AccordionTrigger>
                <AccordionContent>
                  No, products cannot be delivered to an APO, FPO, or a PO Box
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quesiton-5">
                <AccordionTrigger>Can I add items to an existing order?</AccordionTrigger>
                <AccordionContent>
                  No, orders cannot be edited online once it is placed. Please contact us to see how we can help.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="quesiton-6">
                <AccordionTrigger>What if I am not satisfied with my order?</AccordionTrigger>
                <AccordionContent>
                  Please reach out to us and we will do our best to make it right!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </Container>
    </div>
  );
}
