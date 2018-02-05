export function getDateFromToday(numberOfDaysToAdd: number) {
  const someDate = new Date();
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  return someDate;
}
