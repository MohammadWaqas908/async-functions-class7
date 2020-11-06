console.log("Before Preparing Food");

function prepareFood(data) {
    let promise=new Promise(function (resolve, reject) {
        setTimeout(() =>{
            if (data !==2) {
                console.log("\nFood is being preparing please wait.");
                resolve("Food is ready");    
            } else {
                reject("Value is not accepted");
            }
            
        },10);        
    });

    return promise
}


//food function callback code ends
function preparePulao() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() =>{
            console.log("\nPulao is being preparing please wait.");
            resolve("Pulao is ready");
        },20);    
    });
    
    return promise;
}
//Pulao function code ends
function prepareNihari() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() =>{
            console.log("\nNihari is being preparing please wait.");
            resolve("Pulao is ready");
        },30);        
    });

    return promise;
}
//Nihari function code ends

async function startprocess() {
    try {
        let foodValue = await prepareFood(2);
        console.log("So Waits over Now:",foodValue);

        let pulaoValue = await preparePulao();
        console.log("So Waits over Now:",pulaoValue);

        let nihariValue = await prepareNihari();
        console.log("So Waits over Now:",nihariValue);
    } catch (error) {
        console.log("Catch Error =",error);    
    }
}

startprocess();

/*let promise = prepareFood(2);
//console.log("Promise",promise);

//.then is the callback that we used previouslly 
promise.then(function (foodValue) {
    console.log("So Waits over Now:",foodValue);
    return preparePulao();
})
.then(function (pulaoValue) {
    console.log("So Waits over Now:",pulaoValue);
    return prepareNihari();
})
.then(function (nihariValue) {
    console.log("So Waits over Now:",nihariValue);
})
.catch(function (Error) {
  console.log("Error =",Error);  
});*/


console.log("After Prepare Food Dinner is ready");