import React from "react";
import ReviewStar from "./ReviewStar";
import Image from "next/image";
import Button from "@/components/assets/icons/Button.svg";

const ReviewCard = () => {
  return (
    <div className="rounded-[24px] border-[1px] border-[#E5E7EB] p-[32px] flex flex-col gap-3">
      <div className="mt-2">
        <h1 className="text-2xl font-poppins font-semibold">Leave a review</h1>
      </div>
      <hr className="w-[75px]" />
      <div className="mt-2">
        <ReviewStar />
      </div>
      <div className="mt-2 flex flex-col">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Share your thoughts ..."
            className="border-2 border-solid p-4 pr-14 w-full rounded-lg border-[#E5E7EB] focus:outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
            <Image
              src={Button}
              width={30}
              height={30}
              alt="Button inside input"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
