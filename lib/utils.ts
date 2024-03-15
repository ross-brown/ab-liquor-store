import { Review } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculates the average star rating based on the provided reviews.
 * @param {Review[]} reviews - An array of Review objects containing star ratings.
 * @returns {number} The average star rating rounded to the nearest whole number.
 */
export function getAverageRating(reviews: Review[]) {
  const totalStars = reviews.reduce((total, review) => total + review.stars, 0);
  const averageRating = Math.round(totalStars / reviews.length);

  return Number.isNaN(averageRating) ? 0 : averageRating;
}


/**
 * Calculates the percentage distribution of star ratings based on the provided reviews.
 * @param {Review[]} reviews - An array of Review objects containing star ratings.
 * @returns {Record<number, number>} An object representing the percentage distribution of star ratings,
 * where keys are star ratings (1 to 5) and values are their corresponding percentages.
 */
export function getRatingPercents(reviews: Review[]) {
  const starCounts: { [key: number]: number; } = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  };

  for (const review of reviews) {
    starCounts[review.stars]++;
  }

  const starPercents: Record<number, number> = {};
  const totalReviewsCount = reviews.length;

  for (const rating in starCounts) {
    const ratingCount = Number(starCounts[rating]);
    const percent = Math.round((ratingCount / totalReviewsCount) * 100);

    starPercents[rating] = percent || 0;
  }

  return starPercents;
}
