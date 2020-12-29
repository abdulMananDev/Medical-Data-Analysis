const URL = "https://sehat.hyderdevelops.ml";
const toLogin = document.querySelector("#to-login");
const toSignUp = document.querySelector("#to-sign-up");
const signUpCard = document.querySelector(".sign-up-card");
const loginCard = document.querySelector(".login-card");
const showPassword = document.querySelector(".show");
const showLabPassword = document.querySelector(".show-lab");

console.log(showPassword);
let ID = document.querySelector("#lab-login-id");
console.log(ID);
const loginBtn = document.querySelector("#lab-login-btn");
const labRegisterBtn = document.querySelector("#lab-register-btn");

const LAB_NAME = document.querySelector("#lab-name").value;
const LAB_LOCATION = document.querySelector("#lab-location").value;
const password = document.querySelector("#lab-password");
const labPassword = document.querySelector("#lab-login-password");
console.log(labPassword);

const CONTACT = document.querySelector("#lab-contact").value;
const OWNER = document.querySelector("#lab-owner").value;

toLogin.addEventListener("click", (e) => {
  e.preventDefault();
  // signUpCard.style.left = "110%";
  signUpCard.style.display = "none";
  // loginCard.style.left = "25%";
  loginCard.style.display = "block";
  loginCard.style.transition = "all .5s";
  //   signUpCard.style.transform =  "rotateY(0deg)";
});

// toSignUp.addEventListener("click", (e) => {
//   e.preventDefault();

//   loginCard.style.translate = "110%";
//   signUpCard.style.transition = "all .5s";
//   //   signUpCard.style.transform = "rotateY(0deg)";
// });

loginBtn.addEventListener("click", async () => {
  // labPassword.style.textTransform = "lower-case";
  if (ID.value === "") {
    ID.style.border = "2px solid #ed6663";
    return false;
  } else if (labPassword.value === "") {
    labPassword.style.border = "2px solid #ed6663";
    return false;
  } else {
    const PASSWORD = labPassword.value;
    ID = ID.value;
    labLoginData = {
      ID,
      PASSWORD,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(labLoginData),
    };
    console.log(labLoginData);
    const response = await fetch(`${URL}/labs/login`, options);
    const labData = await response.json();
    console.log(labData);

    let lab_data = {
      LAB_ID: labData.LAB_ID,
      LAB_NAME: labData.LAB_NAME,
      CONTACT: labData.CONTACT,
      OWNER: labData.OWNER,
      LOCATION: labData.LAB_LOCATION,
    };
    if (response.status === 200) {
      lab_data = JSON.stringify(lab_data);
      let labDataURI = encodeURIComponent(lab_data)
      let path = `../public/dashboard.html?lab_data=${labDataURI}`;
      window.open(path, '_blank');
    } else {
      alert("Unsucessful Login");
    }
  }
});

labRegisterBtn.addEventListener("click", async () => {
  const PASSWORD = password.value;
  let labData = {
    LAB_NAME,
    LAB_LOCATION,
    LAB_ID: "LAB-01",
    PASSWORD,
    CONTACT,
    OWNER,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(labData),
  };

  // const response = await fetch(`${URL}/labs/register`, options);

  // const status = response.status;
  // if (status === 200) {
  //   signUpCard.style.opacity = "0";
  //   signUpCard.style.pointerEvents = "none";
  //   loginCard.style.opacity = "1";
  //   signUpCard.style.transition = "all .5s";
  // }
});

showPassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    labPassword.type = "text";
    showPassword.textContent = "visibility";
  } else {
    password.type = "password";
    labPassword.type = "password";
    showPassword.textContent = "visibility_off";
  }
});

showLabPassword.addEventListener("click", () => {
  if (labPassword.type === "password") {
    labPassword.type = "text";
    showLabPassword.textContent = "visibility";
  } else {
    labPassword.type = "password";
    showLabPassword.textContent = "visibility_off";
  }
});
