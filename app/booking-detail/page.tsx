import Calendar from "@/components/assets/calendar/Calendar";
import CalendarHeader from "@/components/assets/calendar/CalendarHeader";
import CarDescription from "@/components/BookingDetail/CarDescription";
import DetailCard from "@/components/BookingDetail/DetailCard";
import ThingsToKnow from "@/components/BookingDetail/ThingsToKnow";
import Included from "@/components/BookingDetail/Included";
import Location from "@/components/BookingDetail/Location";
import PickDrop from "@/components/BookingDetail/PickDrop";
import ReviewCard from "@/components/BookingDetail/ReviewCard";
import ShowPhotos from "@/components/BookingDetail/ShowPhotos";
import Total from "@/components/BookingDetail/Total";
import VehcileParameter from "@/components/BookingDetail/VehicleParameter";
import Layout from "@/components/Layout/layout";
import React from "react";

const BookingDetail = () => {
  return (
    <Layout>
      <ShowPhotos />
      <div className="md:container font-poppins">
        <div className="px-0 py-[51px] mx-auto mt-[60px] ">
          <div className="grid  md:grid-cols-[2.] lg:grid-cols-[2.2fr,1.2fr] gap-[45px] md:p-3">
            <div className="flex flex-col gap-[44px] p-1">
              <DetailCard />
              <VehcileParameter />
              <CarDescription />
              <Included />
              <Location />
              <ThingsToKnow/>
            </div>
            <div className="p-1 flex flex-col gap-4">
              <CalendarHeader />
              <PickDrop />
              <Total />
              <ReviewCard/>
            </div>
          </div>

          {/* <div className="grid gap-[45px] md:grid-cols-[2fr] md:p-3 block xl:hidden">
            <div className="flex flex-col gap-[44px] p-1">
              <DetailCard />
            </div>

            <div className="p-1 flex flex-col gap-4 order-1 md:order-1 lg:order-none">
              <CalendarHeader />
              <PickDrop />
              <Total />
            </div>

            <div className="flex flex-col gap-[44px] p-1 order-2 md:order-2 lg:order-none">
              <VehcileParameter />
              <CarDescription />
              <Included />
              <Location />
            </div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
};
export default BookingDetail;
