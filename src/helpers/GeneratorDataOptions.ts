export const generateDateOptions = () => {
  const currentDate = new Date();
  const startDate = new Date("2022-02-25");
  const dateOptions: string[] = [];

  while (startDate <= currentDate) {
    dateOptions.push(startDate.toISOString().split("T")[0]);
    startDate.setDate(startDate.getDate() + 1);
  }

  return dateOptions.reverse();
};
