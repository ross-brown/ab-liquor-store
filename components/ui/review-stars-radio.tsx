"use client";

import { FaStar } from "react-icons/fa";
import Rating from "@mui/material/Rating";

interface StarsRadioGroupProps {
  onChange: () => void;
  value: string;
}

export default function ReviewStarsRadio({ onChange, value }: StarsRadioGroupProps) {
  return (
    <div>
      <Rating
        value={+value}
        onChange={onChange}
        icon={<FaStar />}
        emptyIcon={<FaStar />}
        size="large"
        classes={{
          iconHover: "text-yellow-400",
          iconFilled: "text-yellow-400",
        }}
      />
    </div>
  );
}
