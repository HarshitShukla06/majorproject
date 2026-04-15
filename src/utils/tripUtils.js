import activitiesData from "../data/activities";

// 📅 Days
export const calculateDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = (end - start) / (1000 * 3600 * 24) + 1;
  return diff > 0 ? diff : 0;
};

// 💰 Budget
export const estimateBudget = (days, budget, travelers) => {
  const base =
    budget === "low" ? 1500 :
    budget === "medium" ? 3000 : 6000;

  return base * days * travelers;
};

// 🏨 Hotels
export const getHotels = (budget) => {
  const price =
    budget === "low" ? "₹1500 / night" :
    budget === "medium" ? "₹3500 / night" :
    "₹9000 / night";

  return [
    { name: "Grand Stay Hotel", rating: "4.5⭐", price },
    { name: "City View Resort", rating: "4.2⭐", price },
  ];
};

// 🎯 Activities
export const getActivities = (city, type) => {
  return (
    activitiesData[city]?.[type] || [
      "City Tour",
      "Local Food",
      "Sightseeing",
    ]
  );
};

// 📆 Timeline
export const generateTimeline = (days, places, activities) => {
  const plan = [];

  for (let i = 1; i <= days; i++) {
    const place = places[(i - 1) % places.length];
    const activity = activities[(i - 1) % activities.length];

    plan.push({
      day: i,
      place,
      morning: `Visit ${place}`,
      afternoon: activity,
      evening: "Enjoy local food & relax",
    });
  }

  return plan;
};