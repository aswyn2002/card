import React from "react";

const ThingsToKnow = () => {

    return (
        <div className="rounded-[24px] border-[1px] border-[#E5E7EB] flex flex-col p-[32px] ">
            <h1 className="text-2xl mb-4 font-semibold font-poppins text-[#111827]">
                Things to know
            </h1>
           
                <hr className="mb-4 w-[100px]" />
                <h3 className="mb-3 text-lg font-semibold font-poppins text-[#1F2937]">
                    Free cancellation
                </h3>
                <p className="text-[#6B7280] font-poppins font-normal mb-3">Lock in this fantastic price today, cancel free of charge anytime. Reserve now and pay at pick-up.</p>
                <hr className="mb-4 w-[100px]" />
                <h3 className="mb-3 text-lg font-semibold font-poppins text-[#1F2937]">
                    Special Note
                </h3>
                <p className="text-[#6B7280] font-poppins font-normal mb-3">We asked ourselves, “How can we make the dash not only look better, but also give the driver a better look outside?” The unexpected answer is having no hood above the available 10.25-inch digital instrument cluster...</p>
            

        </div>
    );
};

export default ThingsToKnow;
