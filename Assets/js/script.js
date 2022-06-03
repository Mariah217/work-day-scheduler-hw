//Steps:
//1. Display current date in jumbotron. ✔️
//2. Create timeblocks for each hour in a standard business day 9-5.
//3. Color coordinate timeblocks for past, present and future.
//4. Add click event so you can type directly into each box.
//5. Create save button to save what was typed into textbox.
//6. Save what was typed into the box into local storage.
//7. Pull info from local storage and save in textbox.

 var today = moment();
 $("#currentDay").text(today.format("dddd MMMM Do, YYYY")); 



