// Getting Elements from DOM
const currOnePicker = document.getElementById('currency-one');
const currTwoPicker = document.getElementById('currency-two');
const currOneAmount = document.getElementById('amount-one');
const currTwoAmount = document.getElementById('amount-two');
const flipButton = document.getElementById('flip');
const rate = document.getElementById('rate');


// Fetch exchange rate from 3rd Party API and update DOM
// www.exchangerate-api.com
function calculate() {
    const currencyOneCode = currOnePicker.value;
    const currencyTwoCode = currTwoPicker.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/868949209ae598452cf5c3b7/latest/${currencyOneCode}`)
    .then( res => res.json() )
    .then(data => {
        // Get the Exchange Rate from API data
        const exchangeRate = data.conversion_rates[currencyTwoCode]
        console.log(exchangeRate);

        // Display the Converstion Rate
        rate.innerText = `1 ${currencyOneCode} = ${exchangeRate} ${currencyTwoCode}`;
        
        // Apply Converstion Rate and Update Amount of Currency Two
        currTwoAmount.value = (currOneAmount.value * exchangeRate).toFixed(2);


    });
}

// Flip Function for the Flip Button to reverse currency 
function flip() {
    const temp = currOnePicker.value;
    currOnePicker.value = currTwoPicker.value;
    currTwoPicker.value = temp;
    calculate();
}


// Event Listeners
currOnePicker.addEventListener('change', calculate);
currTwoPicker.addEventListener('change', calculate);
currOneAmount.addEventListener('input', calculate);
currTwoAmount.addEventListener('input', calculate);
flipButton.addEventListener('click', flip);



calculate();