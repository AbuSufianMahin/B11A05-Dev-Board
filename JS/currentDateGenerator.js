const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const currentDateObj = new Date();

const monthName = monthList[currentDateObj.getMonth()].slice(0,3);
const dayOfWeek = dayList[currentDateObj.getDay()]
const date = currentDateObj.getDate();
const year = currentDateObj.getFullYear();

document.getElementById("get-date-string").innerHTML = `${dayOfWeek}, <br> <span class="font-bold text-xl"> ${monthName} ${date} ${year} <span>`

let hour = currentDateObj.getHours();
const min = currentDateObj.getMinutes();
const sec = currentDateObj.getSeconds();

let notation = "AM";
if (hour === 0){
    hour = 12;
}
else if (hour > 12){
    notation = "PM";
    hour = hour - 12;
}

const currentTime = `${hour}:${min}:${sec} ${notation}`
