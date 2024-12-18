import React from "react";
import Image from "next/image";
import FilterIcon from "@/components/assets/icons/FilterIcon.svg";
import UpDownArrowIcon from "@/components/assets/icons/ArrowUpDown.svg";
import HamburgerIcon from "@/components/assets/icons/hamburgerIcon.svg";

const CarButtons = () => {
  const carTypes = ["Sedan", "Hatchback", "Coupe", "SUV", "Manual", "Automatic", "Electrical"];

  return (
    <div className="flex flex-col md:flex-row md:justify-between gap-4">
      {/* Car Types - Hidden on small screens */}
      <div className="carTypes flex-wrap flex gap-3 md:flex md:gap-3 hidden md:flex">
        {carTypes.map((type, index) => (
          <div
            key={index}
            className="border border-[#828282] rounded-full text-center px-2 py-1 text-[#828282] font-thin text-[13.64px] leading-[18.19px] px-[16px] py-[8px] md:text-nowrap"
          >
            {type}
          </div>
        ))}
      </div>

      {/* Clear Filter Section */}
      <div className="clearFilter flex gap-3 items-center">
        {/* Show "Search Results" on mobile */}
        <span className="block md:hidden text-[#111827] font-semibold font-poppins">
          Search Results
        </span>

        {/* Filter Buttons */}
        <div className="filterButton border border-[#828282] rounded-full text-center px-2 py-1 text-[#828282] font-thin text-[13.64px] leading-[18.19px] px-[16px] py-[8px] md:text-nowrap flex items-center gap-2">
          <Image
            src={FilterIcon}
            alt="FilterIcon"
            className="relative cursor-pointer"
          />
          More Filters
        </div>
        <Image
          src={UpDownArrowIcon}
          alt="UpDownArrowIcon"
          className="relative cursor-pointer"
        />
        <Image
          src={HamburgerIcon}
          alt="HamburgerIcon"
          className="relative cursor-pointer"
        />
      </div>
    </div>
  );
};

export default CarButtons;
