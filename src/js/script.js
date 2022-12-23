const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
const eyeOpen = document.getElementById("eyeOpen");
const eyeClose = document.getElementById("eyeClose");
// 
const alertBox = document.getElementById("alertBox");
const loading = document.getElementById("loading");
const userArea = document.getElementById("userArea");
const logOutBtn = document.getElementById("logOutBtn");
const freshSeatData = document.getElementById("freshSeatData");

// getting localStorage & setting up localStorage
// these storages are for user account information
let userData = localStorage.getItem("userData");
let logData = sessionStorage.getItem("logData");
// these storages are for user's activities
let userSessions = localStorage.getItem("userSessions");
let allSessions = sessionStorage.getItem("allSessions");


// setting the user name from session database

if (logData === null) {
  let userAc = [];
} 
else {
  userAc = JSON.parse(logData);
  userArea.innerHTML = userAc[0].loggedUserName;
}
if (userSessions === null) {
  let newSession = [];
} 
else {
  newSession = JSON.parse(userSessions);
}
const totalSeats = 18;
let occupiedSeat = 0;
let avialableSeat = 0;
if (newSession.length < 0) {
  occupiedSeat = 0; 
  // avialableSeat = totalSeats - occupiedSeat; 
  // console.log(newSession.length)
}else{
  occupiedSeat = newSession.length ;
  // console.log(newSession.length);
}
 avialableSeat = totalSeats - occupiedSeat; 
  


// showing latest avialable and occupied seats to user


function seatTab() {
  freshSeatData.innerHTML = `
      <div class="col text-start">
          <span class="text-white text-start">Total Seats :</span>
          <span class="text-primary">${totalSeats}</span>
      </div>
      <div class="col text-center">
          <span class="text-center text-white">Occupied Seats :</span>
          <span class="text-danger">${occupiedSeat}</span>
      </div>
      <div class="col text-end">
          <span class="text-white">Available Seats :</span>
          <span class="text-success">${avialableSeat}</span>
      </div>
  `;

}
// function to log out the user
try {
  
  logOutBtn.addEventListener("click", () => {
      console.log("logged Out");
      showLoading();
      sessionStorage.removeItem("logData");
      alertMsg("<strong>Logged Out</strong>", "success");
      setTimeout(() => {
        window.location.replace("/public/components/logIn.html");
      }, 1500);
    });
} catch (error) {
  console.log(error);
  
}

// loading animation
function showLoading() {
  let anime = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff; border-radius:50%;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="84" cy="50" r="10" fill="#ffc107">
        <animate attributeName="r" repeatCount="indefinite" dur="0.6097560975609756s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s"></animate>
        <animate attributeName="fill" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#ffc107;#0d6efd;#dc3545;#198754;#ffc107" begin="0s"></animate>
    </circle><circle cx="16" cy="50" r="10" fill="#ffc107">
      <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
      <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s"></animate>
    </circle><circle cx="50" cy="50" r="10" fill="#198754">
      <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.6097560975609756s"></animate>
      <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.6097560975609756s"></animate>
    </circle><circle cx="84" cy="50" r="10" fill="#dc3545">
      <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2195121951219512s"></animate>
      <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.2195121951219512s"></animate>
    </circle><circle cx="16" cy="50" r="10" fill="#0d6efd">
      <animate attributeName="r" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.8292682926829267s"></animate>
      <animate attributeName="cx" repeatCount="indefinite" dur="2.4390243902439024s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-1.8292682926829267s"></animate>
    </circle>
    </svg>`;
  loading.innerHTML = anime;
}

// alert function
function alertMsg(msg, type) {
    let show = `<div class="alert alert-${type} text-center w-auto show fade sticky-top" role="alert" id="failureAlert">
          ${msg} 
        </div>`;
    alertBox.innerHTML = show;
    //   console.log(msg, type);
  
    setTimeout(() => {
      alertBox.innerHTML = "";
    }, 3000);
  }
