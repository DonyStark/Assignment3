/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let fullDayRate = 35;
let halfDayRate = 20;
let dayCounter = 0;
let totalCost = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const dayButtons = document.querySelectorAll('.day-selector li');
dayButtons.forEach(day => {
    day.addEventListener('click', (e) => {
        if (!e.target.classList.contains('clicked')) {
            e.target.classList.add('clicked');
            dayCounter++;
            costPerDay = 35;
            totalCost = dayCounter * costPerDay;
            document.getElementById('calculated-cost').innerHTML = totalCost;
        }
    });
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const clearButton = document.getElementById('clear-button');
clearButton.addEventListener('click', () => {
    dayButtons.forEach(day => {
        day.classList.remove('clicked');
    });
    dayCounter = 0;
    totalCost = 0;
    document.getElementById('calculated-cost').innerHTML = totalCost;
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// change rate
const halfDayButton = document.getElementById('half');
halfDayButton.addEventListener('click', () => {
    costPerDay = 20;
    halfDayButton.classList.add('clicked');
    document.getElementById('full').classList.remove('clicked');
    totalCost = dayCounter * costPerDay;
    document.getElementById('calculated-cost').innerHTML = totalCost;
});

const fullDayButton = document.getElementById('full');
fullDayButton.addEventListener('click', () => {
    costPerDay = 35;
    fullDayButton.classList.add('clicked');
    document.getElementById('half').classList.remove('clicked');
    totalCost = dayCounter * costPerDay;
    document.getElementById('calculated-cost').innerHTML = totalCost;
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const costDisplay = document.querySelector('#calculated-cost');

costDisplay.innerHTML = totalCost;
