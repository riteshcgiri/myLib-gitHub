console.log("book slot js");

seatTab();
let name;
let rollNo;
let joiningDay;
let joiningMonth;
let joiningYear;
let seatsFromTable = `''`;
function load_data() {
  if (logData === null) {
    let userAc = [];
    window.location.replace("/public/components/logIn.html");
  } else {
    userAc = JSON.parse(logData);
  }
  Name = userAc[0].loggedUserName;
  //   console.log(Name);
  rollNo = userAc[0].loggedRollNo;
  //   console.log(rollNo);
  let jd = new Date(userAc[0].loggedJoiningDate);
  //   console.log(jd);
  joiningDay = jd.getDate().toString();
  let month = jd.getMonth() + 1;
  switch (month) {
    case 1:
      joiningMonth = "Jan";
      break;
    case 2:
      joiningMonth = "Feb";
      break;
    case 3:
      joiningMonth = "Mar";
      break;
    case 4:
      joiningMonth = "Apr";
      break;
    case 5:
      joiningMonth = "May";
      break;
    case 6:
      joiningMonth = "Jun";
      break;
    case 7:
      joiningMonth = "Jul";
      break;
    case 8:
      joiningMonth = "Aug";
      break;
    case 9:
      joiningMonth = "Sep";
      break;
    case 10:
      joiningMonth = "Oct";
      break;
    case 11:
      joiningMonth = "Nov";
      break;
    case 12:
      joiningMonth = "Dec";
      break;

    default:
      break;
  }
  joiningYear = jd.getFullYear().toString();
  //   console.log(joiningDay, joiningMonth, joiningYear);
}
load_data();

formHtml = `
    <form class="w-100  px-4 py-3 rounded-3" id="slotForm">
    <h3>Book Session</h3>
    <div class="row mb-3">
        <div class="col">
            <label for="inputName" class=" col-form-label">Full Name</label>
            <input type="text" class="form-control" value ="${Name}" disabled required/>
        </div>
        <div class="col">
            <label for="rollNo" class=" col-form-label">Roll No</label>
            <input type="number" class="form-control" value ="${rollNo}" disabled required/>
        </div>
        <div class="col">
          <legend class="col-form-label">Date of Joining</legend>
          <div class=" d-flex justify-content-center align-items-center dob-box">
              <select class="form-select col mx-1" aria-label="Default select" disabled>
                  <option value="${joiningDay}">${joiningDay}</option>
              </select> 
              <select class="form-select col mx-1" aria-label="Default select" disabled>
                  <option value="${joiningMonth}">${joiningMonth}</option>
              </select>
              <select class="form-select col mx-1" aria-label="Default select" disabled>
                  <option value="${joiningYear}">${joiningYear}</option>
              </select>
          </div>
      </div>
    </div>
    <div class="row mb-3" aria-describedby="timingHelp">
      <legend>Session Time</legend>
      <div class="col">
          <label for="timeFrom" class=" col-form-label">From</label>
          <!--input type="time" class="form-control" id="timeFrom" required/-->

          <select class="form-select col mx-1" aria-label="Default select" id="timeFrom">
            <option value="">---- Select Start Time ----</option>
            <option value="08"><time>08:00 AM<time></option>
            <option value="09">09:00 AM</option>
            <option value="10">10:00 AM</option>
            <option value="11">11:00 AM</option>
            <option value="12">12:00 PM</option>
            <option value="13">01:00 PM</option>
            <option value="14">02:00 PM</option>
            <option value="15">03:00 PM</option>
            <option value="16">04:00 PM</option>
            <option value="17">05:00 PM</option>
            <option value="18">06:00 PM</option>
            <option value="19">07:00 PM</option>
            <option value="20">08:00 PM</option>
            <option value="21">09:00 PM</option>
          </select>

      </div>
      <div class="col">
          <label for="timeTo" class=" col-form-label">To</label>
          <select class="form-select col mx-1" aria-label="Default select" id="timeTo">
            <option value="">---- Select End Time ----</option>
            <option value="08">08:00 AM</option>
            <option value="09">09:00 AM</option>
            <option value="10">10:00 AM</option>
            <option value="11">11:00 AM</option>
            <option value="12">12:00 PM</option>
            <option value="13">01:00 PM</option>
            <option value="14">02:00 PM</option>
            <option value="15">03:00 PM</option>
            <option value="16">04:00 PM</option>
            <option value="17">05:00 PM</option>
            <option value="18">06:00 PM</option>
            <option value="19">07:00 PM</option>
            <option value="20">08:00 PM</option>
            <option value="21">09:00 PM</option>
          </select>
          <!--input type="time" class="form-control" id="timeTo" required/-->
      </div>
      <div id="timingHelp" class="form-text">
        Your Timing should not be more than <strong class="text-warning">2 Hours</strong>, if you need more time! Then you can book it again right after this booking.
      </div>
  </div>
    <div class="row mb-3">
        <legend class="my-2">Sitting Details</legend>
      <div class="col">
        <label for="deskInput" class=" col-form-label">Desk</label>
        <select class="form-select" aria-label="Default select" id="deskInput" required>
          <option selected value="">---- Selecet Desk ----</option>
          <option value="01">Desk 1</option>
          <option value="02">Desk 2</option>
          <option value="03">Desk 3</option>
      </select>
      </div>
      <div class="col">
        <label for="seatInput" class=" col-form-label">Seat</label>
        <select class="form-select overflow-scroll" aria-label="Default select" id="seatInput" required>
        <option selected value="">---- Seat ----</option>
        </select>
      </div>
      
    </div>
    <div class="text-center mb-3">
        <button type="submit" id="bookSlotBtn" class="btn btn-success w-50">Book Now</button>
    </div>
</form>`;
formBox.innerHTML = formHtml;

// GETTING SESSION TIMING FROM USER
let timeFrom = document.getElementById("timeFrom");
let timeTo = document.getElementById("timeTo");
let startTime;
let endTime;
let timeStartValid = false;
let timeEndValid = false;
let timeLimit = false;

//getting sitting plan from user
let deskInput = document.getElementById("deskInput");
let seatInput = document.getElementById("seatInput");
let deskNum;
let seatNum;
deskValid = false;
seatValid = false;
// sending available seats to user according to his preferd desk
seatHtml_1 = `
<option selected value="">---- Seat ----</option>
<option value="S-01">S-01</option>
<option value="S-02">S-02</option>
<option value="S-03">S-03</option>
<option value="S-04">S-04</option>
<option value="S-05">S-05</option>
<option value="S-06">S-06</option>
`;
seatHtml_2 = `
<option selected value="">---- Seat ----</option>
<option value="S-07">S-07</option>
<option value="S-08">S-08 </option>
<option value="S-09">S-09</option>
<option value="S-10">S-10</option>
<option value="S-11">S-11</option>
<option value="S-12">S-12</option>
`;
seatHtml_3 = `
<option selected value="">---- Seat ----</option>
<option value="S-13">S-13</option>
<option value="S-14">S-14</option>
<option value="S-15">S-15</option>
<option value="S-16">S-16</option>
<option value="S-17">S-17</option>
<option value="S-18">S-18</option>
`;
// getting button to save user session
let bookSlotBtn = document.getElementById("bookSlotBtn");
let timingHelp = document.getElementById("timingHelp");

// configuring the user did fill the details
// checking is user filled the starting time or not
timeFrom.addEventListener("blur", () => {
  if (timeFrom.value === "") {
    timeStartValid = false;
    timeFrom.classList.add("is-invalid");
    timeFrom.classList.remove("is-valid");
    // timeFrom.focus();
  } else {
    timeStartValid = true;
    timeFrom.classList.remove("is-invalid");
    timeFrom.classList.add("is-valid");
    startTime = timeFrom.value;
  }
});
// checking is user filled the ending time or not
timeTo.addEventListener("blur", () => {
  if (timeTo.value === "") {
    timeEndValid = false;
    timeTo.classList.add("is-invalid");
    timeTo.classList.remove("is-valid");
    // timeTo.focus();
  } else {
    timeEndValid = true;
    timeTo.classList.remove("is-invalid");
    timeTo.classList.add("is-valid");

    if (timeStartValid) {
      endTime = timeTo.value;
      let sT = Math.floor(parseInt(startTime));
      let eT = Math.floor(parseInt(endTime));
      let totalHour;
      if (sT < eT) {
        totalHour = eT - sT;
        if (totalHour <= 2) {
          timingHelp.textContent = "";
          timeTo.classList.add("is-valid");
          timeLimit = true;
        } else {
          timeLimit = false;
          timeEndValid = false;
          timingHelp.textContent = "Time limit Exceeded";
          timingHelp.classList.add("text-danger");
          timeTo.classList.add("is-invalid");
        }
      } else if (sT === eT) {
        timeTo.classList.add("is-invalid");
        timeTo.focus();
        timeEndValid = false;
        timingHelp.textContent = "Same timing Found Please Correct It.";
        timingHelp.classList.add("text-danger");
      } else {
        timeTo.classList.add("is-invalid");
        timeTo.focus();
        timeEndValid = false;
        timingHelp.textContent =
          "Opps! We can't go to past. It's Not a time machine";
        timingHelp.classList.add("text-danger");
      }
      timingHelp.innerHTML = `Your Timing is available.`;
  timingHelp.classList.add("text-success");
    } else {
      console.log("error found");

      if (!timeStartValid) {
        alertMsg(
          "<strong>Please Select Your Session Start Time, Before Booking Session</strong>",
          "danger"
        );
        timeFrom.focus();
      } else {
        alertMsg(
          "<strong>Please Select Your Session Ending Time, Before Booking Session</strong>",
          "danger"
        );
        timeTo.focus();
      }
    }
  }
});

let newSlotToBook = localStorage.getItem('newSlot');
let newSlotReq;
// console.log(newSlotToBook);
if (newSlotToBook === null) {
  newSlotReq = [];
  // checking is user choosed their desk or not
  deskInput.addEventListener("blur", () => {
  if (deskInput.value === "") {
      deskValid = false;
      deskInput.classList.add("is-invalid");
      deskInput.classList.remove("is-valid");
      // alertMsg('<strong>Please Select Your Desk, Before Booking Session</strong>', 'danger');
      // deskInput.focus();
    } else {
    if (deskInput.value === "01") {
      seatInput.innerHTML = seatHtml_1;
    }
    else if (deskInput.value === "02") {
      seatInput.innerHTML = seatHtml_2;
    }
    else if (deskInput.value === "03") {
      seatInput.innerHTML = seatHtml_3;
    }
    deskValid = true;
    deskInput.classList.remove("is-invalid");
    deskInput.classList.add("is-valid");
    deskNum = deskInput.value;
    }
  });
  // checking is user choosed their seat or not
seatInput.addEventListener("blur", () => {
  if (seatInput.value === "") {
    seatValid = false;
    seatInput.classList.add("is-invalid");
    seatInput.classList.remove("is-valid");
    // seatInput.focus();
    // alertMsg('<strong>Please Select Your Sitting, Before Booking Session</strong>', 'danger');
  } else {
    seatValid = true;
    seatInput.classList.remove("is-invalid");
    seatInput.classList.add("is-valid");
    seatNum = seatInput.value;
  }
});

}
else{
  
  newSlotReq = JSON.parse(newSlotToBook);
  deskInput.value = newSlotReq.deskNum;
  deskValid = true;
  deskInput.classList.remove("is-invalid");
  deskInput.classList.add("is-valid");
  deskNum = deskInput.value;
    seatInput.innerHTML = `
    <option value="S-${newSlotReq.seatNum}">S-${newSlotReq.seatNum}</option>
    `;
    seatValid = true;
    seatInput.classList.remove("is-invalid");
    seatInput.classList.add("is-valid");
    seatNum = seatInput.value;
}



saveSession();
// function to save data in DB
bookSlotBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("book btn clicked");
  if (userSessions === null) {
    newSession = [];
  } else {
    newSession = JSON.parse(userSessions);
  }
  if (timeStartValid && timeEndValid && deskValid && seatValid && timeLimit) {
    showLoading();
    saveSession();
    alertMsg("<strong>Session Booked Successfully</strong>", "success");
    clearFeilds();
    setTimeout(() => {
      window.location.reload();
    }, 1500);

    // console.log('all feilds are valid');
  } else {
    if (!timeStartValid) {
      alertMsg(
        "<strong>Please choose session starting time.</strong>",
        "danger"
      );
    } else if (!timeEndValid) {
      alertMsg("<strong>Please choose session end time.</strong>", "danger");
    } else if (!deskValid) {
      alertMsg("<strong>Please choose session end desk.</strong>", "danger");
    } else if (!seatValid) {
      alertMsg("<strong>Please choose session Seat</strong>", "danger");
    } else if (!timeLimit) {
      alertMsg("<strong>Please Correct Timing</strong>", "danger");
    } else {
      alertMsg(
        "<strong>Error Occure Please Check information again.</strong>",
        "danger"
      );
    }
  }
});
function saveSession() {
  const today = new Date();
  if (timeStartValid && timeEndValid && deskValid && seatValid && timeLimit) {
    let sessionObj = {
      key: Name + '_' + seatNum,
      userName: Name,
      rollNo: rollNo,
      deskNum: deskNum,
      seatNum: seatNum,
      startTime: startTime,
      endTime: endTime,
      bookingDate: today.toDateString().split(' ').slice(1).join(' '),
      bookingTime: today.toLocaleTimeString(),
    };
    newSession.push(sessionObj);
    // console.log(newSession);

    localStorage.setItem("userSessions", JSON.stringify(newSession));
  } else {
    // alertMsg('<strong>Error: Check Again, Before Booking Session</strong>', 'danger')
  }
}
function clearFeilds() {
  timeFrom.value = "";
  timeFrom.classList.remove("is-valid");
  timeTo.value = "";
  timeTo.classList.remove("is-valid");
  deskInput.value = "";
  deskInput.classList.remove("is-valid");
  seatInput.value = "";
  seatInput.classList.remove("is-valid");
  timingHelp.innerHTML = `Your Timing should not be more than <strong class="text-warning">2 Hours</strong>, if you need more time! Then you can book it again right after this booking.`;
  timingHelp.classList.add("text-light");
  // localStorage.removeItem('newSlot');
}
function isAvailable() {
  if (userSessions === null) {
    newSession = [];
  } else {
    newSession = JSON.parse(userSessions);
  }
  // function to check is timing is already booked or not
  for (const storageObj of newSession) {
    // console.log(seatOcc);
    window.addEventListener("load", () => {
      for (let i = 0; i < timeFrom.length; i++) {
        const element = timeFrom[i];
        if (element.value === storageObj.startTime) {
          // console.log(element.value);
          element.setAttribute("disabled", "disabled");
          // element.value +='(Occupied)';
        }
        /*else {
          
          for (const seatOcc of newSession) {
            // console.log(seatOcc);
            deskInput.addEventListener('blur', ()=>{
              for (let i = 0; i < seatInput.length; i++) {
                const element = seatInput[i];
                if(element.value === seatOcc.seatNum){
                  // console.log(element.value);
                  element.removeAttribute('disabled');
                  }
              }
            }); 
          }
          // 
        }*/
      }
    });
  }
  // function to check is timing is already booked or not
  for (const storageObj of newSession) {
    // console.log(seatOcc);
    window.addEventListener("load", () => {
      for (let i = 0; i < timeTo.length; i++) {
        const element = timeTo[i];
        if (element.value === storageObj.startTime) {
          // console.log(element.value);
          element.setAttribute("disabled", "disabled");
          // element.value +='(Occupied)';
        }
      }
    });
  }

  // function to check is sitting is already booked or not
  for (const storageObj of newSession) {
    deskInput.addEventListener("blur", () => {
      for (let i = 0; i < seatInput.length; i++) {
        const element = seatInput[i];
        if (element.value === storageObj.seatNum) {
          // console.log(element.value);
          element.setAttribute("disabled", "disabled");
          // element.value +='(Occupied)';
        }
      }
    });
  }
  
  //function to check is there any seats available or not
  if (occupiedSeat === 18) {
    alertMsg(
      "<strong>Currently there are No seats available, please try after some time.</strong>",
      "danger"
    );
    bookSlotBtn.disabled = true;
  } else {
    bookSlotBtn.disabled = false;
  }
}
isAvailable();
    window.onbeforeunload = function(){
      localStorage.removeItem('newSlot');
      // newSlotReq = [];
    };