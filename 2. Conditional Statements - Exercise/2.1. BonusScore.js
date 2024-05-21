function bonusScore (input){
let scorePoint = Number(input[0]);
let bonus = 0;

if (scorePoint <= 100){
    bonus = 5;
} else if (scorePoint <= 1000){
    bonus = 0.2 * scorePoint;
} else {
    bonus = 0.1 * scorePoint;
}
if (scorePoint % 2 === 0){
    bonus = bonus + 1;
} else if(scorePoint % 10 === 5){
bonus = bonus + 2;
}
console.log(bonus);
console.log(scorePoint + bonus);
}
bonusScore(["15875"]);