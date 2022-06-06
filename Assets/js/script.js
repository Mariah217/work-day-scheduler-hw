//Steps:
//1. Display current date in jumbotron. ✔️
//2. Create timeblocks for each hour in a standard business day 9-5.✔️
//3. Color coordinate timeblocks for past, present and future.
//4. Add click event so you can type directly into each box.✔️(used textarea)
//5. Create save button to save what was typed into textbox next to each textbox.✔️
//6. Save what was typed into the box into local storage---only works for 9am
//7. Pull info from local storage and save in textbox.----kinda works


//day of the week & date in jumbotron
var today:moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY"));

//current time to compare to past, present and future times
var currentTime:moment().format('H');
console.log();

//variables:

var time = [{
    nine: "0900",
    ten: "1000",
    eleven:"1100",
    twelve:"1200",
    one:"1300",
    two:"1400",
    three:"1500",
    four: "1600",
    five:"1700",
},]


//saving text in text area, even after refresh-only works for 9am text area
var timeBlockEl = document.querySelector(".textarea");

timeBlockEl.value = localStorage.getItem("text");

timeBlockEl.addEventListener("keyup", event => {
    localStorage.setItem("text", event.target.value);
})

//compare currentTime to timeblocks to determine color of timeblocks, use military time

if (time === currentTime){
    
}


