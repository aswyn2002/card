import React from "react";
import Image from "next/image";
import cardIcon from "@/components/assets/icons/cardIcon.svg";
import editIcon from "@/components/assets/icons/Pencil.svg";
import deleteIcon from "@/components/assets/icons/deleteIcon.svg";

type Card = {
    name: string;
    number: string;
    isDefault: boolean;
};

const cards: Card[] = [
    { name: "My Debit Card", number: "*4222", isDefault: true },
    { name: "My Credit Card", number: "*5333", isDefault: false },
    { name: "Business Card", number: "*6444", isDefault: false },
];

const PaymentMethods: React.FC = () => {
    return (
        <div className="border border-[#E5E7EB] rounded-3xl p-8">
            <h1 className="text-center font-poppins text-3xl font-semibold text-[#1F2937]">
                Payment Methods
            </h1>
            <hr className="my-5 w-[80px] mx-auto"/>
            <div className="space-y-4 mt-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex border border-[#D1D5DB] px-5 py-3 gap-2 items-center rounded-xl justify-between"
                    >
                        {/* Left Section */}
                        <div className="flex gap-4 items-center">
                            <div className="bg-[#D9D9D9] p-2 rounded-lg shrink-0">
                                <Image
                                    src={cardIcon}
                                    alt="Card Icon"
                                    width={24}
                                    height={24}
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className="cardNo flex flex-col sm:flex-row sm:space-x-3 items-start sm:items-center">
                                <h1 className="text-base text-[#000000] font-poppins font-medium ">
                                    {card.name}
                                </h1>
                                <span className="text-[#6B7280] font-light text-sm">{card.number}</span>
                            </div>
                            {card.isDefault && (
                                <div className="selected">
                                    <span className="text-[#00DE92] font-normal text-xs">Default</span>
                                </div>
                            )}
                        </div>

                        {/* Right Section (Buttons) */}
                        <div className="buttons flex gap-2">
                            <button>
                                <Image src={editIcon} alt="Edit Icon" width={20} height={20} />
                            </button>
                            <button>
                                <Image src={deleteIcon} alt="Delete Icon" width={20} height={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {/* Centered Add Button */}
            <div className="flex justify-center mt-6">
                <button className="pt-3 pb-3 px-6 border-[#D1D5DB] rounded-full border-2 text-base font-medium text-[#374151]">
                    Add
                </button>
            </div>
        </div>
    );
};

export default PaymentMethods;
