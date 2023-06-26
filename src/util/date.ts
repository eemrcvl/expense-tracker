export function getDateMinusDays(date: Date, minusDays: number): Date {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - minusDays,
  );
}
