function shopping(input){
    budget = Number(input[0]);
    gpu = Number(input[1]);
    processor = Number(input[2]);
    ram = Number(input[3]);

    let gpuPrice = gpu * 250;
    let processorPrice = gpuPrice * 0.35;
    processorPrice = processor * processorPrice;
    let ramPrice = gpuPrice * 0.1;
    ramPrice = ram * ramPrice;
    
    totalPrice = gpuPrice + processorPrice + ramPrice;

    if (gpu > processor){
        totalPrice = totalPrice * 0.85;
    }
if (totalPrice <= budget){
    let moneyLeft = budget - totalPrice;
console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
} else {
    let moneyNeeded = totalPrice - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
}

}
shopping(["920.45", "3", "1", "1"]);