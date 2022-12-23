console.log('this is logIn.js');


// getting all input feilds from user
const logInBtn = document.getElementById('logInBtn');
const logEmail = document.getElementById('logEmail');
const logPassword = document.getElementById('logPassword');
const adminBtn = document.getElementById('adminBtn');
const adminPage = document.getElementById('adminPage');

emailValid = false;
passValid =  false;
let userFound = false;

logEmail.addEventListener('blur', ()=>{
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,10}$/;
    let email = logEmail.value;
    if(regex.test(email)){
        // console.log('email valid');
        logEmail.classList.add('is-valid');
        logEmail.classList.remove('is-invalid');
        emailValid = true;
    }
    else{
        // console.log('email Invalid');
        logEmail.classList.remove('is-valid');
        logEmail.classList.add('is-invalid');
        emailValid = false;
    }
    // duplicateChecker()
});
// regex for password validation
logPassword.addEventListener('blur', ()=>{
let regex = /^([_\-\.@\&$a-zA-Z0-9]){8,20}$/;
    let pass = logPassword.value;
    if(regex.test(pass)){
        // console.log('pass valid');
        logPassword.classList.add('is-valid');
        logPassword.classList.remove('is-invalid');
        passValid = true;
    }
    else{
        // console.log('pass Invalid');
        logPassword.classList.remove('is-valid');
        logPassword.classList.add('is-invalid');
        passValid = false;
    }
});
eyeOpen.addEventListener('click', ()=>{
    logPassword.type = "text";
    eyeClose.classList.remove('modalBoxN');
    eyeOpen.classList.add('modalBoxN');
    logPassword.focus();
    
});
eyeClose.addEventListener('click', ()=>{
    logPassword.type = "password";
    eyeClose.classList.add('modalBoxN');
    eyeOpen.classList.remove('modalBoxN');
    logPassword.focus();
    
});
// login button focus to press enter and log in
logInBtn.focus();

logInBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    // console.log('submit btn pressed');
    if (userData === null) {
       let userReq = [];
    }
    else{
       userReq = JSON.parse(userData);
    }
    if(emailValid && passValid){
        if (logData === null) {
            let userAc = [];

         }   
         else{
            userAc = JSON.parse(logData);
         }
         logAccount();
         
        }
        else{
            logEmail.focus();
            console.log('wrong credential');
            alertMsg('It look like you entered wrong credentials, Please Enter correct Credentials', 'danger');
        }
});
function logAccount() {
    if (userData === null) {
        userReq = [];
    }
    else{
        userReq = JSON.parse(userData);
    }
    //    console.log(userReq);
    
    let email = logEmail.value.toLowerCase();
    let pass = logPassword.value.toLowerCase();
    
        for (const user of userReq) {   
        if(user.userEmail === email && user.userPass === pass ){
            if (logData === null) {
                userAc = [];
            }   
            else{
                userAc = JSON.parse(logData);
            }
            let userLog = {
                loggedUserName: user.userName,
                loggedRollNo: user.userRollNo,
                loggedEmail: user.userEmail,
                loggedPass: user.userPass,
                loggedJoiningDate: user.joiningDate,
                loggedGender: user.userGender,
                loggedDob: user.userDob
            };
            userAc.push(userLog);
            sessionStorage.setItem('logData', JSON.stringify(userAc));
            console.log(userAc);
            // console.log('user found');     
            // console.log('logIn');
            showLoading();
            alertMsg('<strong>Logged In</strong> You are being redirected within Seconds.', 'success');
            setTimeout(() => {
                clearFeilds();
                window.location.replace("/public/index.html");
            }, 2000);
            break;
        }
           else if(user.userEmail != email && user.userPass != pass ){
            // userFound = false;
            // logEmail.focus()
            alertMsg(`<strong>User not Found!</strong>`, 'danger');
            // console.log('user not found'); //it will run as many times as many users are in database
            
            }
        /*});*/}
}

function clearFeilds() {
    logEmail.value = '';
    logEmail.classList.remove('is-valid');
    logPassword.value = '';
    logPassword.classList.remove('is-valid');
}
// function to show alert
function alertMsg(msg, type){
    let show = `<div class="alert alert-${type} text-center w-auto show fade sticky-top" role="alert" id="failureAlert">${msg}</div>`;
      alertBox.innerHTML = show;
    //   console.log(msg, type);
      
      setTimeout(() => {
         alertBox.innerHTML = '';
      }, 12500);
}


//  admin page LogIn functions

const adminEyeOpen = document.getElementById('adminEyeOpen');
const adminEyeClose = document.getElementById('adminEyeClose');
const adminId = document.getElementById('adminId');
const adminPass = document.getElementById('adminPass');
adminBtn.addEventListener('click',()=>{
    adminPage.classList.toggle('show-adminPage');
});
adminEyeOpen.addEventListener('click', ()=>{
    adminPass.type = "text";
    adminEyeClose.classList.remove('modalBoxN');
    adminEyeOpen.classList.add('modalBoxN');
    adminPass.focus();
    
});
adminEyeClose.addEventListener('click', ()=>{
    adminPass.type = "password";
    adminEyeClose.classList.add('modalBoxN');
    adminEyeOpen.classList.remove('modalBoxN');
    adminPass.focus();
    
});

function preventBack() { window.history.forward(); }
        setTimeout("preventBack()", 0);
        window.onunload = function () { null };