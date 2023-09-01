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
      className="border text-sm rounded-lg block p-3"
    >
      Show All
    </button>
  </div>
);

export default ShowAllStatsButton;
