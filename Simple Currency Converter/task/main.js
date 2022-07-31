let input = require('sync-input');
let multiplierFrom = 0, multiplierTo = 0;
let currencyFrom, currencyTo;

console.log(`Welcome to Currency Converter!
1 USD equals  1 USD
1 USD equals  113.5 JPY
1 USD equals  0.89 EUR
1 USD equals  74.36 RUB
1 USD equals  0.75 GBP`);
console.log("What do you want to do?")

while(true){

    console.log("1-Convert currencies 2-Exit program");
    choice = Number(input());

    switch(choice){
        case 1: {
            console.log(`What do you want to convert?
From:`);
            let currencyFromLoop = 0;
            while(currencyFromLoop === 0){
                currencyFrom = input().toUpperCase();
                switch (currencyFrom){
                    case "USD":
                        multiplierFrom = 1;
                        currencyFromLoop = 1;
                        break;
                    case "JPY":
                        multiplierFrom = 113.5;
                        currencyFromLoop = 1;
                        break;
                    case "EUR":
                        multiplierFrom = 0.89;
                        currencyFromLoop = 1;
                        break;
                    case "RUB":
                        multiplierFrom = 74.36;
                        currencyFromLoop = 1;
                        break;
                    case "GBP":
                        multiplierFrom = 0.75;
                        currencyFromLoop = 1;
                        break;
                    default:
                        console.log("Unknown currency");
                        break;
                }
            }

            console.log("To:")
            let currencyToLoop = 0;
            while(currencyToLoop === 0){
                currencyTo = input().toUpperCase();
                switch (currencyTo){
                    case "USD":
                        multiplierTo = 1;
                        currencyToLoop = 1;
                        break;
                    case "JPY":
                        multiplierTo = 113.5;
                        currencyToLoop = 1;
                        break;
                    case "EUR":
                        multiplierTo = 0.89;
                        currencyToLoop = 1;
                        break;
                    case "RUB":
                        multiplierTo = 74.36;
                        currencyToLoop = 1;
                        break;
                    case "GBP":
                        multiplierTo = 0.75;
                        currencyToLoop = 1;
                        break;
                    default:
                        console.log("Unknown currency");
                        break;
                }
            }

            let amountLoop = 0;
            while(amountLoop === 0){
                console.log("Amount:")
                let amount = Number(input());
                if(amount < 1){
                    console.log("The amount can not be less than 1");
                }else if(isNaN(amount)){
                    console.log("The amount has to be a number");
                }else {
                    result = (amount / multiplierFrom) * multiplierTo;
                    console.log(`Result: ${amount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);
                    amountLoop = 1;
                }
            }
            break;

        }
        case 2:
            console.log("Have a nice day!");
            return;
        default:
            //"Unknown input";
            break;
    }
}