"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { PatternFormat } from "react-number-format";

import Button from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Not a valid email" }),
  phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, { message: "Not a valid phone number" }),
  message: z.string().min(1, { message: "Message cannot be empty" })
});

type formValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  async function onSubmit(values: formValues) {
    // mock API call for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    toast.success("Form submitted");
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
      >
        <div className="mx-auto max-w-[36rem] lg:mr-0 lg:max-w-[32rem]">
          <div className="grid grid-cols-1 gap-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold leading-6 text-gray-900">
                    Name*
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold leading-6 text-gray-900">
                    Email*
                  </FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold leading-6 text-gray-900">
                    Phone*
                  </FormLabel>
                  <FormControl>
                    <PatternFormat
                      {...field}
                      mask="_"
                      format="(###) ###-####"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold leading-6 text-gray-900">
                    Message*
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage {...field} />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                className="rounded-md bg-primary px-4 py-3 text-sm"
                disabled={form.formState.isSubmitting}
              >
                Send message
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );

}
