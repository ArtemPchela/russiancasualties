import React from "react";
import Preloader from "../helpers/Preloader.tsx";

interface CardProps {
  title: string;
  value?: number;
  increaseValue?: number;
}

const Card: React.FC<CardProps> = ({ title, value, increaseValue }) => {
  // @ts-ignore
  const showIncrease = increaseValue !== undefined && increaseValue !== "";

  return (
    <div className="flex justify-between">
      <h2 className="">{title}</h2>
      <div className="flex items-center">
        <span className="mr-1">{!value ? <Preloader /> : value}</span>
        {showIncrease && (
          <sup className="text-sm text-green-500">+{increaseValue}</sup>
        )}
      </div>
    </div>
  );
};

export default Card;
