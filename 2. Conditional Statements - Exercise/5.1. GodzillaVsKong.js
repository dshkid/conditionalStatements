function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statNumber = Number(input[1]);
    let pricePerStat = Number(input[2]);
   
    let decor = budget * 0.1;
    let totalClothesPrice = statNumber * pricePerStat;
    
   if (statNumber > 150) {
       totalClothesPrice = 0.9 * totalClothesPrice;
   }
   
   let totalBudget = decor + totalClothesPrice;
   
   if (budget >= totalBudget){
       let moneyLeft = budget - totalBudget;
       console.log("Action!");
       console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
   } else {
   
       let moneyNeeded = totalBudget - budget;
       console.log("Not enough money!");
       console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
   }
   }
   godzillaVsKong(["20000", "120", "55.5"])