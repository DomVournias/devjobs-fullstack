export const handleSalaryChecks = (min?: number, max?: number) => {
  if (min === undefined) {
    return "Not specified";
  }

  if (min === 0) {
    return "Not specified";
  }
  if (min === 12000) {
    return "Less than $35000";
  }

  if (max === 250000) {
    return "More than $150000";
  }

  return `$${min} - $${max}`;
};
