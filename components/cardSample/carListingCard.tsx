import React from "react";

const CarListingCard = ({ name, seats, gearbox, price, imageUrl }) => {
    return (
        <div className="w-full flex flex-col gap-2 rounded-[25px] border border-solid border-gray-100">
            {/* Image Section */}
            <div className="w-full h-[331px] rounded-[25px] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="flex flex-col pt-[12px] px-[23px] pb-[23px]">
                <h1 className="font-poppins text-xl font-semibold text-[#1F2937]">
                    {name}
                </h1>
                <div className="flex gap-3 font-poppins font-normal text-[#6B7280] text-sm">
                    <span>{seats} Seats</span>
                    <span>•</span>
                    <span>{gearbox}</span>
                </div>
                <hr className="w-[60px] my-2 border-[#F3F4F6]" />
                <div className="flex gap-1 font-poppins items-center">
                    <span className="font-medium text-lg text-[#000000]">${price}</span>
                    <span className="text-sm font-light text-[#6B7280]">/day</span>
                </div>
            </div>
        </div>
    );
};

export default CarListingCard;
