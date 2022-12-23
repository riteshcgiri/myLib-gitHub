console.log('checkslot js');
seatTab();
// setting the user name from session database
if (logData === null) {
    let userAc = [];
    window.location.replace("/public/components/logIn.html");
  } 
  else {
    userAc = JSON.parse(logData);
  }

let chairs = document.querySelectorAll('.chair');
let ds_list = document.querySelectorAll('.ds_list');

// function to booked session details
let dataAside = document.querySelector('.data-aside');
let html = ' <h5 class=" my-1 bg-dark text-danger">Booked Session</h5>';
// function to get all booked session details
if (userSessions === null) {
  newSession = [];
} else {
  newSession = JSON.parse(userSessions);
}
ds_list.forEach((e, index)=>{
  
  /*if(e.classList.contains('booked-seat')){
    e.removeEventListener('click', ()=>console.log(e, index  + 'clicked'));
  }
  else{
    */
    e.addEventListener('click',()=>{
      let newSlot = {};
      let sN = index + 1;
    if(index <= 6){
      newSlot = {
      deskNum: '01',
      seatNum: '0' + sN.toString()
    };
    }
    else if(sN >= 7 && sN < 10 ){
      newSlot = {
      deskNum: '02',
      seatNum: '0' + sN.toString()
      };
    }
    else if(sN >= 10 && sN <= 12 ){
      newSlot = {
      deskNum: '02',
      seatNum: sN.toString()
      };
    }
    else if(sN >= 13 && sN <= 18){
      newSlot = {
      deskNum: '03',
      seatNum: sN.toString()
      };
    }
      localStorage.setItem('newSlot', JSON.stringify(newSlot));
      showLoading();
      alertMsg('<strong>Slot selected</strong> You are being redirected within Seconds.', 'success');
      setTimeout(() => {
      window.location.replace("/public/components/bookSlot.html");
      }, 2000);
      
    });
  // }
});
newSession.forEach((e, index)=>{
  // console.log(e.seatNum, e.deskNum);
  switch (e.seatNum) {
    case "S-01":
      ds_list[0].classList.add('booked-seat');
      ds_list[0].classList.remove('available-seat');
      chairs[0].classList.add('booked-chair');
    break;
    case "S-02":
      ds_list[1].classList.add('booked-seat');
      ds_list[1].classList.remove('available-seat');
      chairs[1].classList.add('booked-chair');
    break;
    case "S-03":
      ds_list[2].classList.add('booked-seat');
      ds_list[2].classList.remove('available-seat');
      chairs[2].classList.add('booked-chair');
    break;
    case "S-04":
      ds_list[3].classList.add('booked-seat');
      ds_list[3].classList.remove('available-seat');
      chairs[3].classList.add('booked-chair');
    break;
    case "S-05":
      ds_list[4].classList.add('booked-seat');
      ds_list[4].classList.remove('available-seat');
      chairs[4].classList.add('booked-chair');
    break;
    case "S-06":
      ds_list[5].classList.add('booked-seat');
      ds_list[5].classList.remove('available-seat');
      chairs[5].classList.add('booked-chair');
    break;
    case "S-07":
      ds_list[6].classList.add('booked-seat');
      ds_list[6].classList.remove('available-seat');
      chairs[6].classList.add('booked-chair');
    break;
    case "S-08":
      ds_list[7].classList.add('booked-seat');
      ds_list[7].classList.remove('available-seat');
      chairs[7].classList.add('booked-chair');
    break;
    case "S-09":
      ds_list[8].classList.add('booked-seat');
      ds_list[8].classList.remove('available-seat');
      chairs[8].classList.add('booked-chair');
    break;
    case "S-10":
      ds_list[9].classList.add('booked-seat');
      ds_list[9].classList.remove('available-seat');
      chairs[9].classList.add('booked-chair');
    break;
    case "S-11":
      ds_list[10].classList.add('booked-seat');
      ds_list[10].classList.remove('available-seat');
      chairs[10].classList.add('booked-chair');
    break;
    case "S-12":
      ds_list[11].classList.add('booked-seat');
      ds_list[11].classList.remove('available-seat');
      chairs[11].classList.add('booked-chair');
    break;
    case "S-13":
      ds_list[12].classList.add('booked-seat');
      ds_list[12].classList.remove('available-seat');
      chairs[12].classList.add('booked-chair');
    break;
    case "S-14":
      ds_list[13].classList.add('booked-seat');
      ds_list[13].classList.remove('available-seat');
      chairs[13].classList.add('booked-chair');
    break;
    case "S-15":
      ds_list[14].classList.add('booked-seat');
      ds_list[14].classList.remove('available-seat');
      chairs[14].classList.add('booked-chair');
    break;
    case "S-16":
      ds_list[15].classList.add('booked-seat');
      ds_list[15].classList.remove('available-seat');
      chairs[15].classList.add('booked-chair');
    break;
    case "S-17":
      ds_list[16].classList.add('booked-seat');
      ds_list[16].classList.remove('available-seat');
      chairs[16].classList.add('booked-chair');
    break;
    case "S-18":
      ds_list[17].classList.add('booked-seat');
      ds_list[17].classList.remove('available-seat');
      chairs[17].classList.add('booked-chair');
    break;                                              
    default:
      console.log('err')
      break;
  }

  html += `
  <div class="card m-2">
  <div class="card-body p-1">
    <h5 class="card-title border-bottom border-light border-2 text-danger">Slot ${index + 1}</h5>
    <div class="card-text">
      <div class="row text-center">
        <div class="col fw-bold text-primary">
          <span>${e.userName}</span>
        </div>
        <div class="col">
          <time>${e.startTime + ':' + '00'} - ${e.endTime + ':' + '00'}</time>
        </div>
      </div>
      <div class="row text-center">
        <div class="col">
          <span>Desk No. ${e.deskNum}</span>
        </div>
        <div class="col">
          <span>Seat No. ${e.seatNum}</span>
        </div>
      </div>
    </div>
  </div>
</div>
  ` 
dataAside.innerHTML = html; 
});
// creating a obj to book slot when user click a seat and desk no.

// these function are to make chairs move on hover
    let to_top = document.querySelectorAll('.to-up');
    to_top.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(210 46)")
      
    })
    e.addEventListener('mouseout',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(210 96)")
    })
  });
    let to_down = document.querySelectorAll('.to-down');
    to_down.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(210 852)")
    })
    e.addEventListener('mouseout',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(210 802)")
    })
  });
    let to_top_left = document.querySelectorAll('.to-top-left');
    to_top_left.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(-46 283)")
      
    })
    e.addEventListener('mouseout',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(16 283)")
    })
  });
    let to_bottom_left = document.querySelectorAll('.to-bottom-left');
    to_bottom_left.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(-46 600)")
      
    })
    e.addEventListener('mouseout',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(16 600)")
    })
  });
    let to_top_right = document.querySelectorAll('.to-top-right');
    to_top_right.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(470 283)")
      
    });
    e.addEventListener('mouseout',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(420 283)")
    });
  });
    let to_bottom_right = document.querySelectorAll('.to-bottom-right');
    to_bottom_right.forEach((e)=>{
    e.addEventListener('mouseover',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(470 600)")
      
    });
    e.addEventListener('mouseout',()=>{
      // console.log(e)
      e.setAttribute("transform","translate(420 600)")
    });
  });

  setInterval(() => {
    location.reload();
  }, 30000);