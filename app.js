// Demonstrating key JavaScript features

// 1. Variables and Constants
let name = "JavaScript";
const version = "ES6+";

// 2. Functions
function greet(user) {
    return `Hello, ${user}! Welcome to ${name}.`;
}

// 3. Arrow Functions
const add = (a, b) => a + b;

// 4. Objects and Destructuring
const features = {
    dynamicTyping: true,
    firstClassFunctions: true,
    prototypeBased: true
};
const { dynamicTyping, firstClassFunctions } = features;

// 5. Promises and Async/Await
const fetchData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data fetched!"), 1000);
    });
};

// Usage
console.log(greet("Developer"));
console.log(`Addition: ${add(5, 3)}`);
console.log(`Dynamic Typing: ${dynamicTyping}`);
fetchData().then(console.log);