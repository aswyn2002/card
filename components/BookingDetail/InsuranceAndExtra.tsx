import React from "react";
import info from "@/components/assets/icons/InfoIcon.svg";
import Image from "next/image";
const InsuranceAndExtra = () => {

    return (
        <div className="rounded-[24px] border-[1px] border-[#E5E7EB] flex flex-col p-[32px] ">
            <h1 className="text-2xl mb-4 font-semibold font-poppins text-[#111827]">
                Insurance & extras
            </h1>
            <p className="text-[#6B7280] font-poppins font-normal ">Lock in this fantastic price today, cancel free of charge anytime. Reserve now and pay at pick-up.</p>

            <hr className="mb-4 mt-7 w-[100px]" />
            <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                    <div className="flex items-center gap-3">
                        <span className="font-poppins text-sm font-normal text-[#6B7280]">Add Insurance </span>
                        <Image src={info} alt="uotolog" />
                    </div>
                    <button className="border-2 font-poppins text-[#374151] font-medium text-sm p-3 rounded-md border-[#D1D5DB]">Choose</button>

                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-3">
                        <span className="font-poppins text-sm font-normal text-[#6B7280]">Add infant seat </span>
                        <Image src={info} alt="uotolog" />
                    </div>
                    <button className="border-2 font-poppins text-[#374151] font-medium text-sm p-3 rounded-md border-[#D1D5DB]">Add</button>

                </div>
            </div>
        </div>
    );
};

export default InsuranceAndExtra;
