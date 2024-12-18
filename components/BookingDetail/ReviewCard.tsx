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
      <div className="mt-2 flex relative">
        <input
          type="text"
          placeholder="Share your thoughts ..."
          className="border-2 border-solid p-4 pl-5 w-[320px] rounded-lg border-[#E5E7EB] focus:outline-none"
        />
        <Image
          src={Button}
          width={50}
          height={60}
          alt="Button inside input"
          className="absolute right-8 top-1.5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ReviewCard;
