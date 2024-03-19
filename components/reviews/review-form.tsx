"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import { FaStar } from "react-icons/fa";

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
import Rating from "@mui/material/Rating";
import useReviewModal from "@/hooks/use-review-modal";

const formSchema = z.object({
  name: z.string(),
  stars: z.string(),
  review: z.string(),
});

type formValues = z.infer<typeof formSchema>;

export default function ReviewForm() {
  const { user } = useUser();
  const router = useRouter();
  const { onClose } = useReviewModal();
  const pathname = usePathname();
  const productId = pathname.slice(9);

  const name = user ? `${user.firstName} ${user.lastName}` : "Customer";

  const form = useForm<formValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name,
      review: ""
    }
  });

  async function onSubmit(values: formValues) {
    await toast.promise(axios.post(`${process.env.NEXT_PUBLIC_API_URL}/reviews`, {
      values, productId, storeUserId: user?.id || ""
    }), {
      loading: "Submitting review...",
      success: "Review submitted",
      error: "Failed to submit review"
    });

    onClose();
    router.refresh();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mt-12 max-w-xl sm:mt-16"
      >
        <div className="mx-auto max-w-[36rem] lg:mr-0 ">
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
                    <Input {...field} disabled />
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
                    Rating*
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
                    <Textarea {...field} rows={5} />
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
