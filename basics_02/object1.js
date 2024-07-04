// singleton
//object.create

//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Vishal",
    "full name": "Vishal Shimpi",
    [mySym]: "myKey1",
    age:18,
    location:"Nashik",
    email: "Vishal@google.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
JsUser.email = "Vishal@chatgpt.com"
// Object.freeze(JsUser);
JsUser.email = "Shimpi@google.com"
// console.log(JsUser["email"]);

JsUser.greeting = function() {
    console.log("Hello User");
}

JsUser.greetingTwo = function() {
    console.log(`Hello User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())