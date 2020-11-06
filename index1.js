console.log("Before Preparing Food");

function prepareFood(callback) {
    setTimeout(() =>{
        console.log("Food is being preparing please wait.");
        callback("Food is ready");
    },10);
}


//food function callback code ends
function preparePulao(callback) {
    setTimeout(() =>{
        console.log("\nPulao is being preparing please wait.");
        callback("Pulao is ready");
    },20);
}
//Pulao function code ends
function prepareNihari(callback) {
    setTimeout(() =>{
        console.log("\nNihari is being preparing please wait.");
        callback("Pulao is ready");
    },30);
}
//Nihari function code ends

//the callbacks is not decalred before but it can be declared and called in function call

prepareFood(function (value) {
    console.log("So Waits over Now:",value);
    preparePulao(function (value) {
        console.log("So Waits over Now:",value);
        prepareNihari(function (value) {
            console.log("So Waits over Now:",value);
        });
    });
});

console.log("After Prepare Food Dinner is ready");