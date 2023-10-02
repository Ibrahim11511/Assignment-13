const day = document.querySelector(".day-input");
const month = document.querySelector(".month-input");
const year = document.querySelector(".year-input");
const dayCount = document.querySelector(".day-count");
const monthCount = document.querySelector(".month-count");
const yearCount = document.querySelector(".year-count");
const submit = document.querySelector(".submit");

const date = new Date();
let currentDay = date.getDate();
let currentMonth = 1 + date.getMonth();
let currentYear = date.getFullYear();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

year.max = currentYear;

submit.addEventListener("click", () => {
    if (parseInt(day.value) >currentDay) {
        currentDay = currentDay + months[currentMonth - 1];
        currentMonth = currentMonth - 1;
    }
    
    if (parseInt(month.value) > currentMonth) {
        currentMonth = currentMonth + 12;
        currentYear = currentYear - 1;
    }

    let newYear = currentYear - parseInt(year.value);
    let newMonth = currentMonth - parseInt(month.value);
    let newDay = currentDay - parseInt(day.value);
    yearCount.textContent = newYear;
    monthCount.textContent = newMonth;
    dayCount.textContent = newDay;
})

day.addEventListener("keyup", function () {
    if (parseInt(this.value) <= 0 || parseInt(this.value) > 31) {
        this.nextElementSibling.style.display = "block";
        this.previousElementSibling.style.color = "red";
        this.style.border = "1px solid red";
    }
    else {
        this.nextElementSibling.style.display = "none";
        this.previousElementSibling.style.color = "#7d7d7d";
        this.style.border = "1px solid lightgray";
    }
})

month.addEventListener("keyup", function () {
    if (parseInt(this.value) <= 0 || parseInt(this.value) > 12) {
        this.nextElementSibling.style.display = "block";
        this.previousElementSibling.style.color = "red";
        this.style.border = "1px solid red";
    }
    else {
        this.nextElementSibling.style.display = "none";
        this.previousElementSibling.style.color = "#7d7d7d";
        this.style.border = "1px solid lightgray";
    }
})

year.addEventListener("keyup", function () {
    if (parseInt(this.value) <= 0 || parseInt(this.value) > currentYear) {
        this.nextElementSibling.style.display = "block";
        this.previousElementSibling.style.color = "red";
        this.style.border = "1px solid red";
    }
    else {
        this.nextElementSibling.style.display = "none";
        this.previousElementSibling.style.color = "#7d7d7d";
        this.style.border = "1px solid lightgray";
    }
})