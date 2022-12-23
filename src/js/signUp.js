console.log('this is signUp page in js')
// getting all input feilds from user
const signUpForm = document.getElementById('signUpForm');
const inputName = document.getElementById('inputName');
const rollNo = document.getElementById('rollNo');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');

const joiningDay = document.getElementById('joiningDay');
const joiningMonth = document.getElementById('joiningMonth');
const joiningYear = document.getElementById('joiningYear');

const dobInput = document.getElementById('dobInput');
const gender = document.getElementsByName('gender');
const signUpBtn = document.getElementById('signUpBtn');
let userGender = '';

const rollNoBox = document.getElementById('rollNoBox');


// booleans
let nameValid = false;
let rollNoValid = false;
let emailValid = false;
let passValid = false;
let dobValid = false;
let joiningDate = new Date();



// 
createAccount();
// using regex to for entry validation
// regex for name validation
inputName.addEventListener('blur', ()=>{
    let regex = /^[a-zA-Z]([a-zA-Z0-9\s+]{3,20}$)/;
    let name = inputName.value;
    if(regex.test(name)){
        // console.log('Name valid');
        inputName.classList.add('is-valid');
        inputName.classList.remove('is-invalid');
        nameValid = true;
    }
    else{
        // console.log('Name Invalid');
        inputName.classList.remove('is-valid');
        inputName.classList.add('is-invalid');
        nameValid = false;
    }
});
// regex for rollno validation
rollNo.addEventListener('blur', ()=>{
    let regex = /^[0-9]{3,9}$/;
    let rollno = rollNo.value;
    if(regex.test(rollno)){
        // console.log('rollNo valid');
        rollNo.classList.add('is-valid');
        rollNo.classList.remove('is-invalid');
        rollNoValid = true;
        // duplicateChecker()
    }
    else{
        // console.log('rollNo Invalid');
        rollNo.classList.remove('is-valid');
        rollNo.classList.add('is-invalid');
        rollNoValid = false;
        // duplicateChecker()
    }
});
// regex for email validation
inputEmail.addEventListener('blur', ()=>{
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,10}$/;
    let email = inputEmail.value;
    if(regex.test(email)){
        // console.log('email valid');
        inputEmail.classList.add('is-valid');
        inputEmail.classList.remove('is-invalid');
        emailValid = true;
    }
    else{
        // console.log('email Invalid');
        inputEmail.classList.remove('is-valid');
        inputEmail.classList.add('is-invalid');
        emailValid = false;
    }
    // duplicateChecker()
});
// regex for password validation
inputPassword.addEventListener('blur', ()=>{
let regex = /^([_\-\.@\&$a-zA-Z0-9]){8,20}$/;
    let pass = inputPassword.value;
    if(regex.test(pass)){
        // console.log('pass valid');
        inputPassword.classList.add('is-valid');
        inputPassword.classList.remove('is-invalid');
        passValid = true;
    }
    else{
        // console.log('pass Invalid');
        inputPassword.classList.remove('is-valid');
        inputPassword.classList.add('is-invalid');
        passValid = false;
    }
});
// function to make password visible or hidden
eyeOpen.addEventListener('click', ()=>{
    inputPassword.type = "text";
    eyeClose.classList.remove('modalBoxN');
    eyeOpen.classList.add('modalBoxN');
    inputPassword.focus();
    
});
eyeClose.addEventListener('click', ()=>{
    inputPassword.type = "password";
    eyeClose.classList.add('modalBoxN');
    eyeOpen.classList.remove('modalBoxN');
    inputPassword.focus();
    
});


// making function to signup account
signUpBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('this is submit');
    // duplicateChecker()
    
    if (userData === null) {
        let userReq = [];
      }else{
          userReq = JSON.parse(userData);
      }
      // checking weather the roll no is available in localStorage or not
    if ( nameValid && rollNoValid && emailValid && passValid) {
        if(dobInput.value === ""){
            dobValid = false;
            dobInput.focus();
        }else{
         dobValid = true; 
         
         joiningDate.setFullYear(joiningYear.value, joiningMonth.value, joiningDay.value)
         //  console.log('join in ' + joiningDate);
         for (var radio of gender){
                if (radio.checked) { userGender = radio.value; }
            }
        }
        createAccount();
        clearFeilds();
        showLoading()
        alertMsg('<strong>Account Created Successfully</strong> You are being redirected within Seconds, Go and logIn to your account.', 'success');
        setTimeout(() => {
            window.location.replace("/public/components/logIn.html");
        }, 3000);
    }
    else{
        alertMsg('<strong>opps!! Something Went Wrong.</strong> It look like you missed something please check again and fill correct information.', 'danger');
    }
});

// function to add user data to localStorage
function createAccount() {
    const userDob = new Date(dobInput.value);
    if (userData === null) {
         userReq = [];
    }
    else{
        userReq = JSON.parse(userData);
    }
    if (nameValid && rollNoValid && emailValid && passValid && dobValid) {
        let userObj = {
            userName: inputName.value,
            userRollNo: rollNo.value,
            userEmail: inputEmail.value.toLowerCase(),
            userPass: inputPassword.value.toLowerCase(),
            joiningDate: joiningDate,
            userGender: userGender,
            userDob: userDob
        };
        userReq.push(userObj);
        localStorage.setItem('userData', JSON.stringify(userReq));
        // console.log(userReq)
    }
    else{
        inputName.focus();
    }
}

function clearFeilds() {
    inputName.value = '';
    inputName.classList.remove('is-valid');
    inputEmail.value = '';
    inputEmail.classList.remove('is-valid');
    inputPassword.value = '';
    inputPassword.classList.remove('is-valid');
    rollNo.value = '';
    rollNo.classList.remove('is-valid');
    
    joiningDay.value = 'Day';
    joiningMonth.value = 'Month';
    joiningYear.value = 'Year';

    dobInput.value = '';
    gender.value = '';
}
// creating a function to prevent users to create multiple id's with same cridentials

function duplicateChecker(){
    let rollno = rollNo.value;
     userReq.forEach((data) => {
          console.log(rollno);
          if (data.userRollNo === rollno) {
              rollNoValid = false;
              rollNo.classList.remove('is-valid');
              rollNo.classList.add('is-invalid');
              console.log("rollNo duplicate found");
              rollNoBox.innerHTML += `
              <div class="invalid-feedback">Already Registered.</div>
              `;
          }else{
              rollNoValid = true;
              rollNo.classList.add('is-valid');
              rollNo.classList.remove('is-invalid');
              console.log("no rollNo duplicate found");
              rollNoBox.innerHTML += `
              <div class="valid-feedback">Wow</div>
              `;
          }
      });
}
