console.log("this is index.js");

// setting the user name from session database
  if (logData === null) {
      let userAc = [];
      window.location.replace("/public/components/logIn.html");
    } 
    else {
      userAc = JSON.parse(logData);
    }


seatTab();