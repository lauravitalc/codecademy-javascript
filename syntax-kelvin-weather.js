const kelvin = 0; // kelvin is a constant
const celcius = kelvin - 273; //celcius is kelvin - 273 
let fahrenheit = celcius * (9/5) + 32; // fahrenheit 
let newton = celcius * (33/100);
newton = Math.floor(newton);
fahrenheit = Math.floor(fahrenheit); //fahrenheit usually is a decimal number 
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The tempeture is ${newton} degrees Newton`);
