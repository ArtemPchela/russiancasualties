import React from "react";
import { cardData } from "../data/listOfData.ts";
import Card from "./Card.tsx";

interface IRenderCardProps {
  title: string;
  displayData: any;
}

const RenderCard: React.FC<IRenderCardProps> = ({ title, displayData }) => {
  const stats = displayData.data?.stats;
  const increase = displayData.data?.increase;
  const dataKey = cardData[title];
  const value = stats?.[dataKey];
  const increaseValue = increase?.[dataKey];

  return (
    <Card
      key={dataKey}
      title={title}
      value={value}
      increaseValue={increaseValue}
    />
  );
};

export default RenderCard;
