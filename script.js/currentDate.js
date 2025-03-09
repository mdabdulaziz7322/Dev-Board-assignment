let currentDate = new Date();
let date = {year: 'numeric', month: 'short', day: 'numeric'}
let day = { weekday: 'short',};
let formattedDate = new Date().toLocaleDateString('en-US', date);
let formattedDay = new Date().toLocaleDateString('en-US', day);

document.getElementById('current-date').innerText = formattedDate;
document.getElementById('current-day').innerText = formattedDay;