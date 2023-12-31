import React from "react";
import Preloader from "../helpers/Preloader.tsx";

interface ITitleProps {
  displayData: any;
  selectedStartDate: string;
  loading?: boolean;
}

const Title: React.FC<ITitleProps> = ({ displayData, selectedStartDate }) => {
  const { day, date } = displayData.data || {};

  return (
    <div className="flex flex-col justify-center items-center max-w-[90%] mx-auto bg-10 backdrop-opacity-10 rounded-2xl">
      <h1 className="font-custom text-center mb-2 title">
        {selectedStartDate
          ? "Russian Casualties in Ukraine on Selected Date"
          : "Russian Casualties in Ukraine Throughout All Time"}
      </h1>
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="font-custom text-[1.75rem] sub-title">Day of War</h2>
        <span className="text-[1.25rem]">{!day ? <Preloader /> : day}</span>
        <h2 className="font-custom text-[1.75rem] sub-title">Date</h2>
        <span className="text-[1.25rem]">{!date ? <Preloader /> : date}</span>
      </div>
    </div>
  );
};

export default Title;
