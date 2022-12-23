console.log("hey i am in cancle slot");

let sessioArea = document.getElementById("sessionArea");

seatTab();
// checking is user is Logged in or not
if (logData === null) {
  let userAc = [];
  window.location.replace("/public/components/logIn.html");
} else {
  userAc = JSON.parse(logData);
}
if (userSessions === null) {
  newSession = [];
} else {
  newSession = JSON.parse(userSessions);
}
let uniuqeKey;
for (const rollNo of userAc) {
  uniuqeKey = rollNo.loggedRollNo;
}
newSession.forEach(function (session, index) {
  // for (const session of newSession) {
  let startTime;
  let endTime;
  if (session.rollNo === uniuqeKey) {
    switch (session.startTime) {
      case "08":
        startTime = "08:00 AM";
        break;
      case "09":
        startTime = "09:00 AM";
        break;
      case "10":
        startTime = "10:00 AM";
        break;
      case "11":
        startTime = "11:00 AM";
        break;
      case "12":
        startTime = "12:00 PM";
        break;
      case "13":
        startTime = "01:00 PM";
        break;
      case "14":
        startTime = "02:00 PM";
        break;
      case "15":
        startTime = "03:00 PM";
        break;
      case "16":
        startTime = "04:00 PM";
        break;
      case "17":
        startTime = "05:00 PM";
        break;
      case "18":
        startTime = "06:00 PM";
        break;
      case "19":
        startTime = "07:00 PM";
        break;
      case "20":
        startTime = "08:00 PM";
        break;
      case "21":
        startTime = "09:00 PM";
        break;
      default:
        console.log("err");
        break;
    }
    switch (session.endTime) {
      case "08":
        endTime = "08:00 AM";
        break;
      case "09":
        endTime = "09:00 AM";
        break;
      case "10":
        endTime = "10:00 AM";
        break;
      case "11":
        endTime = "11:00 AM";
        break;
      case "12":
        endTime = "12:00 PM";
        break;
      case "13":
        endTime = "01:00 PM";
        break;
      case "14":
        endTime = "02:00 PM";
        break;
      case "15":
        endTime = "03:00 PM";
        break;
      case "16":
        endTime = "04:00 PM";
        break;
      case "17":
        endTime = "05:00 PM";
        break;
      case "18":
        endTime = "06:00 PM";
        break;
      case "19":
        endTime = "07:00 PM";
        break;
      case "20":
        endTime = "08:00 PM";
        break;
      case "21":
        endTime = "09:00 PM";
        break;
      default:
        console.log("err");
        break;
    }
    let sessionId =
      session.userName.split(" ").splice(" ").join("_") +
      "_" +
      session.seatNum +
      "_" +
      index;
    sessioArea.innerHTML += `
    <div class="card text-center m-4 position-relative" style="width: 20rem; height:13rem;">
    <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success px-3">Booked</span>

    <div class="card-body">
      <h5 class="card-title">Session Date : ${session.bookingDate}</h5>
      <div class="card-text">
        <div class="row fw-bold my-1">
          <div class="col text-start text-primary">
            <span>${session.userName}</span>
          </div>
          <div class="col text-start">
            <span>Booking No:</span>
            <span class="text-primary">${index + 1}</span>
          </div>
        </div>
        <div class="row fw-bold my-1">
          <div class="col text-start">
            <span>Desk :</span>
            <span class="text-primary">${session.deskNum}</span>
          </div>
          <div class="col text-start">
            <span>Chair :</span>
            <span class="text-primary">${session.seatNum}</span>
          </div>
        </div>
        <div class="row fw-bold mb-3">
          <div class="col text-start">
            <span>From :</span>
            <span class="text-primary">${startTime}</span>
          </div>
          <div class="col text-start">
            <span>To :</span>
            <span class="text-primary">${endTime}</span>
          </div>
        </div> 
      </div>
      <div class="d-flex ">
        <button type="button"  id="${index}" class="w-50 btn btn-danger mx-1 cancleBtn" onclick="deleteSession(this.id)">Cancle</button>
        <button class="w-50 btn btn-warning mx-1 editBtn" disabled>Modify</button>
      </div>
    </div>
  </div>
    `;

    let modalBox = document.getElementById("modalBox");
    const cancleBtn = document.querySelectorAll(".cancleBtn");
    /*cancleBtn.forEach((element) => {
  element.addEventListener("click", () => {
   /* let html = `<div class="card popUp bg-danger text-light">
    <div class="card-body text-center">
    <h5 class="card-title">Cancle Sessoion</h5>
    <p class="card-text">Are you sure want to cancle the Session.</p>
    <div class="d-flex">
    <button onClick="noPop(e)" class="btn w-50 mx-2 btn-secondary">No</button>
    <button onClick="yesPop(e)" class=" btn w-50 btn-warning">Yes</button>
    </div>
    </div>
    </div>`;
  */
    /*
 console.log(element.id);
 if (element.id === sessionId) {
   console.log('matched');
   
 }else{
  console.log('opps');
  
    //  yesPop();
    //  modalBox.innerHTML = html;
    //  modalBox.classList.add("modalBox");
    //  modalBox.classList.remove("modalBoxN");
      
    }
    console.log("clicked ifcondi");
  });
});
*/
  }
  if (session.rollNo.length === 0) {
    whenNoSession();
  }
  // }
});
function deleteSession(index) {
  console.log(" This is getting deleted", index);

  let userSessions = localStorage.getItem("userSessions");
  if (userSessions == null) {
    newSession = [];
  } else {
    newSession = JSON.parse(userSessions);
  }

  let seat = newSession[0].seatNum;
  let Name = newSession[0].userName;
  for (const ids of newSession) {
    if (ids.rollNo === uniuqeKey) {
      console.log(index);
      newSession.splice(index, 1);
      localStorage.setItem("userSessions", JSON.stringify(newSession));
      window.location.reload();
    }
  }
}

/*
  function yesPop(e) {
    console.log(e);
     
    modalBox.classList.add("modalBoxN");
    modalBox.classList.remove("modalBox");
    modalBox.innerHTML = "";
    alertMsg('<strong>Session Cancelled</strong>', 'success');
  }
  function noPop() {
    modalBox.classList.add("modalBoxN");
    modalBox.classList.remove("modalBox");
    modalBox.innerHTML = "";
    alertMsg('<strong>Modification Aborted</strong>', 'warning');
  }
  */
// console.log(uniuqeKey);
function whenNoSession() {
  sessioArea.classList.add("align-items-center", "justify-content-center");
  sessioArea.innerHTML = `
    <div class="card text-center" style="height:30vh;" >
      <div class="card-header bg-warning fw-bold text-danger">Nothing Found</div>
      <div class="card-body">
      <h5 class="card-title">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-exclamation-octagon-fill text-warning" viewBox="0 0 16 16">
        <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
      </svg>
      </h5>
      <p class="card-text fw-bold">It look like you haven't booked any sessions yet, Let's book one.</p>
      <a href="/public/components/bookSlot.html" class="btn btn-secondary">Book Session</a>
      </div>
    </div>
    `;
}
