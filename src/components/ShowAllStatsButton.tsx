import React from "react";

interface ShowAllStatsButtonProps {
  showAllStats: () => void;
}

const ShowAllStatsButton: React.FC<ShowAllStatsButtonProps> = ({
  showAllStats,
}) => (
  <div>
    <button
      onClick={showAllStats}
      className="border text-sm rounded-lg block p-3 hover:bg-white hover:text-black transition ease-in-out duration-300 cursor-pointer"
    >
      Show All
    </button>
  </div>
);

export default ShowAllStatsButton;
