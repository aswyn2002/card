import React from "react";

const CarListingCard = () => {
    return (
        <div className="w-[350px] flex flex-col gap-2 rounded-[25px] border border-solid border-gray-100 ">
            {/* Image Section */}
            <div className="w-[350px] h-[331px] rounded-[25px] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1600268330186-76564be81357?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Car Image"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content Section */}
            <div className=" flex flex-col pt-[12px] px-[23px] pb-[23px]">
                <h1 className="font-poppins text-xl font-semibold text-[#1F2937]">
                    Range Rover Evoque
                </h1>
                <div className="flex gap-3 font-poppins font-normal text-[#6B7280] text-sm">
                    <span>4 Seats</span>
                    <span>•</span>
                    <span>Auto Gearbox</span>
                </div>
                <hr className="w-[60px] my-2 border-[#F3F4F6] " />
                <div className="flex gap-1 font-poppins items-center">
                    <span className="font-medium text-lg text-[#000000]">$101</span>
                    <span className="text-sm font-light text-[#6B7280]">/day</span>
                </div>
            </div>
        </div>
    );
};

export default CarListingCard;
