export function getDates(currentDate: Date) {
  const dayOfMonth = currentDate.getDate();
  const dayName = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    currentDate
  );
  const monthName = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
    currentDate
  );

  return { dayName, dayOfMonth, monthName };
}
