import React from "react";

interface ISkeleton {
  title?: string;
  loading?: boolean;
}
const Skeleton: React.FC<ISkeleton> = ({ title, loading }) => {
  return (
    <div className="rounded-md">
      <div className="flex justify-between w-full">
        <h2 className="">{title}</h2>
        <span className="">{loading && 0}</span>
      </div>
    </div>
  );
};

export default Skeleton;
