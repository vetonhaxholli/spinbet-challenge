export const filterFunction = (filter, data) => {
  switch (filter) {
    case "result":
      return data.status.type === "finished";
    case "live":
      return data.status.type === "inprogress";
    case "upcoming":
      return data.status.type === "notstarted";
    default:
      return true; // Include all if no specific filter is applied
  }
};

export const getFormattedLiveStatus = (liveStatus) => {
  switch (liveStatus) {
    case "FT":
    case "Canceled":
      return 100;
    case "HT":
      return 45;
    case "-":
      return 0;
    default:
      if (!isNaN(liveStatus)) {
        return parseInt(liveStatus, 10);
      } else {
        return liveStatus;
      }
  } //TODO We should handle also +time (exp 45+)
};

export const getStatusString = (status) => {
  switch (status) {
    case "finished":
      return "Ended";
    case "inprogress":
      return "Live";
    case "canceled":
      return "Canceled";
    case "notstarted":
      return "Upcoming";
    default:
      return "Unknown";
  }
};

export const getStatusColor = (status) => {
  switch (status) {
    case "finished":
      return "#8ef30c";
    case "inprogress":
      return "#00ff00";
    case "canceled":
      return "#fc0336";
    case "notstarted":
      return "#ffffff";
    default:
      return "#ffffff";
  }
};

export const countGamesByType = (games) => {
  return games.reduce(
    (counts, game) => {
      counts[0].count++; // Count for 'All'
      if (game.status.type === "finished") {
        counts[1].count++; // Count for 'Result'
      } else if (game.status.type === "inprogress") {
        counts[2].count++; // Count for 'Live'
      } else if (game.status.type === "notstarted") {
        counts[3].count++; // Count for 'Upcoming'
      }
      return counts;
    },
    [
      { type: "All", count: 0 },
      { type: "Result", count: 0 },
      { type: "Live", count: 0 },
      { type: "Upcoming", count: 0 },
    ]
  );
};
