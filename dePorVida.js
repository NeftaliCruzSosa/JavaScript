let coffeeBags = 1000;
let dailyConsumption = 1.5;

function calc() {
  let totalDays = coffeeBags / dailyConsumption;

  years = Math.floor(totalDays / 365);
  months = Math.floor((totalDays % 365) / 30);
  days = Math.floor((totalDays % 365) % 30);

  return (
    "Me van a durar " +
    years +
    " año(s), " +
    months +
    " mes(es) y " +
    days +
    " dia(s)"
  );
}

console.log(calc());
