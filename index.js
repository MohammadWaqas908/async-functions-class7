console.log("Before Preparing Food");

function prepareFood(callback) {
    setTimeout(() =>{
        console.log("Food is being preparing please wait.");
        callback("Food is ready");
    },10);
}

function foodCallback(value) {
    console.log("So Waits over Now:",value);
    preparePulao(pulaoCallback);
}
//food function and callback code ends
function preparePulao(callback) {
    setTimeout(() =>{
        console.log("\nPulao is being preparing please wait.");
        callback("Pulao is ready");
    },20);
}
function pulaoCallback(value) {
    console.log("So Waits over Now:",value);
    prepareNihari(nihariCallback);
}
//Pulao function and callback code ends
function prepareNihari(callback) {
    setTimeout(() =>{
        console.log("\nNihari is being preparing please wait.");
        callback("Pulao is ready");
    },30);
}
function nihariCallback(value) {
    console.log("So Waits over Now:",value);
}
prepareFood(foodCallback);

console.log("After Prepare Dinner Food is ready");