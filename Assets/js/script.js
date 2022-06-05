//Steps:
//1. Display current date in jumbotron. ✔️
//2. Create timeblocks for each hour in a standard business day 9-5.✔️
//3. Color coordinate timeblocks for past, present and future.
//4. Add click event so you can type directly into each box.✔️(used textarea)
//5. Create save button to save what was typed into textbox next to each textbox.✔️
//6. Save what was typed into the box into local storage.✔️
//7. Pull info from local storage and save in textbox.


//day of the week & date in jumbotron
var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY"));

var currentTime = moment().format('H');
console.log();

//variables:
var pastHour = pastHour < currentTime;
var presentHour = currentTime;
var futureHour = futureHour > currentTime;



//save textarea to local storage 
// only works for one text area, need to figure out how to do it for each individual text area
function saveBtnClicked() {
    document.getElementById("timeblock").value;
    var timeBlock = document.getElementById("timeblock").value;
    localStorage.setItem("planner", JSON.stringify(timeBlock));
    console.log(timeBlock);
}


//compare currentTime to timeblocks to determine color of timeblocks, use military time



//pull from local storage and save in text area even on refresh
// function plannerInfo(){
//     var localStoragePlanner = JSON.parse(localStorage.getItem("planner"));
//     document.getElementById("timeblock").innerHTML=localStoragePlanner;
// }
