//Steps: MUST USE JQUERY
//1. Display current date in jumbotron. ✔️
//2. Create timeblocks for each hour in a standard business day 9-5.✔️
//3. Color coordinate timeblocks for past, present and future.
    //if moment() > time-blocks =>past
    //if moment() == time-blocks =>present
    //if moment() < time-blocks =>future
//4. Add click event so you can type directly into each box.✔️
//5. Create save button to save what was typed into textbox next to each textbox.✔️
//6. Save what was typed into the box into local storage when save button clicked✔️
//7. Pull info from local storage and save in textbox.✔️

//day of the week & date in jumbotron
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY"));

//current time to compare to past, present and future times
var currentTime = moment().hour()
console.log(currentTime);

//variables
var saveBtn = $(".saveBtn");
var time = [
    "0900",
    "1000",
    "1100",
    "1200",
    "1300",
    "1400",
    "1500",
    "1600",
    "1700"
]

//function for putting in local storage
function saveText(event) {
    var id = $(this).attr("data-id"); //event.target is the same as this. whatever button is clicked refers to "this"
    var value = $("#" + id).val(); //dynamic # picks up the id selector from whichever button is clicked.
    localStorage.setItem(id, value)
}

//calling retreiveText function
retreiveText();

//function for parsing local storage 
function retreiveText() {
    for (var i = 0; i < time.length; i++){
        var value = localStorage.getItem(time[i]);
        $("#" + time[i]).val(value);
    }
}

//compare currentTime to timeblocks to determine color of timeblocks (past is gray, present is red and future is green)
// function color(){
// for (var i = 0; i < .length; i++) {
//     if (time === currentTime) {
//     }
// }}

//.on click for save btn
saveBtn.on("click", saveText);