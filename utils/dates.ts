export const formatDate = (dateString: string): string => {
  const dateObject = new Date(dateString);

  const day = dateObject.getDate().toString().padStart(2, "0");
  const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
  const year = dateObject.getFullYear().toString();

  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
};
