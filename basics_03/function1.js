function sayMyName() {
    console.log("v")
    console.log("i")
    console.log("s")
    console.log("h")
    console.log("a")
    console.log("l") 
}

// sayMyName()

function addTwoNumber(number1, number2){
    // console.log(number1 + number2);
    // let result = number1 + number2;
    // return result;
    return number1 + number2;

}

const result = addTwoNumber(2,3)
// console.log("result", result);  

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("Please enter the username");
        return
    }
    // console.log(!username);
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vishal"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 2000, 500))

const user = {
    name : "Vishal", 
    price : 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.name} and prices is ${anyObject.price}`);
}

// handleObject(user)
// handleObject({
//     name: "Rahul",
//     price: 2000
// })

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray) {
    console.log(getArray[3]);
}

// returnSecondValue(myNewArray);
returnSecondValue([200,100,500,700]);

