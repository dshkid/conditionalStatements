function lunchBreak(input){
let seriesName = input[0];
let episodTime = Number(input[1]);
let brakeTime = Number(input[2]);

let lunchTime = (1 / 8) * brakeTime;
let restTime = (1 / 4) * brakeTime;
let timeLeft = brakeTime - lunchTime - restTime;

if (timeLeft >= episodTime){
    let minLeft = timeLeft - episodTime;
console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(minLeft)} minutes free time.`);
} else {
    let timeNeeded = episodTime - timeLeft;
    console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeNeeded)} more minutes.`);
}

}
lunchBreak(["Game of Thrones", "60", "96"]);