export const formatDate = (dateString: string): string => {
  const dateObject = new Date(dateString);

  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getFullYear().toString();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};

export const calculateDays = (date: number) => {
  const currentDate = new Date();
  const jobCreatedAt = new Date(date);

  const timeDifference = currentDate.getTime() - jobCreatedAt.getTime();

  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysAgo >= 2) {
    return `${daysAgo} days ago`;
  } else {
    return `${daysAgo} day ago`;
  }
};
