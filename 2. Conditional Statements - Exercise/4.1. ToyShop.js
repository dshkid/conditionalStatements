function toyShop (input){
let tripPrice = Number(input[0]);
let puzzels = Number(input[1]);
let dolls = Number(input[2]);
let teddyBears = Number(input[3]);
let minions = Number(input[4]);
let trucks = Number(input[5]);

let totalEarnMoney = (puzzels * 2.60) + (dolls * 3) + (teddyBears * 4.10) + (minions * 8.20) + (trucks * 2);
let totalToyNumber = puzzels + dolls + teddyBears + minions + trucks;

if (totalToyNumber >= 50){
let discount = 0.25 * totalEarnMoney;
totalEarnMoney = totalEarnMoney - discount;
}
let rent = totalEarnMoney * 0.1;
totalEarnMoney = totalEarnMoney - rent;
if (totalEarnMoney >= tripPrice){
    let moneyLeft = totalEarnMoney - tripPrice;
console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
} else {
    let moneyNeeded = tripPrice - totalEarnMoney;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
}
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);