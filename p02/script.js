const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.Occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;


// Function to update counts
function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row.seat.selected')
    const countSelectedSeats = selectedSeats.length;

    const seatsIndex = [...selectedSeats].map(function(seat) {
        return [...seats].indexOf(seat)
    });

    console.log(seatsIndex);


    count.innerText = countSelectedSeats;
    total.innerText = ticketPrice * countSelectedSeats;
}

//Event listener for Change on Selected Movie
movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})


// Event listener for Click on Avialable Seats
container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') && !e.target.classList.contains('Occupied')) {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }

})