"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

import Button from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import ReviewStarsRadio from "./ui/review-stars-radio";
import Rating from "@mui/material/Rating";
import { FaStar } from "react-icons/fa";

// export interface Review {
//   id: string;
//   author: string;
//   text: string;
//   stars: number;
//   createdAt: string;
// }

// model Review {
//   id        String   @id @default(uuid())
//   productId String
//   product   Product  @relation(fields: [productId], references: [id], onDelete: Cascade)
//   author    String
//   text      String
//   stars     Int
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   @@index([productId])
// }

const formSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  stars: z.string(),
  review: z.string().min(1, { message: "Review cannot be empty" })
});

type formValues = z.infer<typeof formSchema>;

export default function ReviewForm() {
  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      review: ""
    }
  });

  async function onSubmit(values: formValues) {
    // mock API call for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
    toast.success("Review submitted");
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-6 pb-16 pt-16 sm:pb-24 lg:px-8 lg:py-20"
      >
        <div className="mx-auto max-w-[36rem] lg:mr-0 lg:max-w-[32rem]">
          <div className="grid grid-cols-1 gap-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold leading-6 text-gray-900">
                    Name
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
              name="stars"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="font-semibold leading-6 text-gray-900">
                    Rating
                  </FormLabel>
                  <FormControl>
                    <div>
                      <Rating
                        value={+field.value}
                        onChange={field.onChange}
                        icon={<FaStar />}
                        emptyIcon={<FaStar />}
                        size="large"
                        classes={{
                          iconHover: "text-yellow-400",
                          iconFilled: "text-yellow-400",
                        }}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold leading-6 text-gray-900">
                    Review
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={10} />
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
                Submit
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
}