let coffeeBags = 1000;
let dailyConsumption = 1.5;

function calc() {
  let totalDays = coffeeBags / dailyConsumption;
    
  years = Math.floor(totalDays/365)
  totalDays -= years*365
  months = Math.floor(totalDays/30)
  totalDays -= months*30
  
  return "Me van a durar " + years + " año(s), " + months + " mes(es) y " + Math.floor(totalDays) + " dia(s)"
}

console.log(calc())
