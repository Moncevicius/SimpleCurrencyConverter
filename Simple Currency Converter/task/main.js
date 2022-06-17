let input = require('sync-input');
let multiplierFrom = 0, multiplierTo = 0;
let currencyFrom, currencyTo;
let currency = ["USD", "JPY", "EUR", "RUB", "GBP"];
let currencyRates = {
  "USD": 1,
  "JPY": 113.5,
  "EUR": 0.89,
  "RUB": 74.36,
  "GBP": 0.75
};

console.log(`Welcome to Currency Converter!`);
currency.forEach(n => {
    console.log(`1 USD equals  ${currencyRates[n]} ${n}`);
})
console.log("What do you want to do?")

while(true){

    choice = Number(input("1-Convert currencies 2-Exit program\n"));
    switch(choice){
        case 1: {
            console.log(`What do you want to convert?`);
            while(true){
                currencyFrom = input("From:").toUpperCase();
                if(currency.includes(currencyFrom)){
                    multiplierFrom = currencyRates[currencyFrom];
                    break;
                }else {
                    console.log("Unknown currency");
                }
            }
            while(true){
                currencyTo = input("To:").toUpperCase();
                if(currency.includes(currencyTo)) {
                    multiplierTo = currencyRates[currencyTo];
                    break;
                }else{
                    console.log("Unknown currency");
                }
            }
            while(true){
                let amount = Number(input("Amount:"));
                if(amount < 1){
                    console.log("The amount can not be less than 1");
                }else if(isNaN(amount)){
                    console.log("The amount has to be a number");
                }else {
                    result = (amount / multiplierFrom) * multiplierTo;
                    console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    break;
                }
            }
            break;
        }
        case 2:
            console.log("Have a nice day!");
            return;
        default:
            console.log("Unknown input");
            break;
    }
}