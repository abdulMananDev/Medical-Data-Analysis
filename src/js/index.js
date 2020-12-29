const URLMain = "https://sehat.hyderdevelops.ml";
const add = document.querySelector("#add");
const view = document.querySelector("#view");
const owner = document.querySelector("#owner");
const labName = document.querySelector("#lab-name");
const labContact = document.querySelector("#lab-contact");
const labLocation = document.querySelector("#lab-location");
const upgrade = document.querySelector("#upgrade");

const currentYear = document.querySelector("#current-year");
let currYear = new Date().getFullYear();
currentYear.textContent = currYear;
const notificationPanel = document.querySelector(".notification-panel");
const notification = document.querySelector("#notifications");

let count = 0;
window.onload = async () => {
  const labID = data.LAB_ID;
  const LABID = {
    SELECTED_LAB: labID,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(LABID),
  };

  const response = await fetch(`${URLMain}:/appointments/check`, options);
  const labData = await response.json();
  console.log(labData);

  labData.forEach((patient) => {
    const notificationAreaName = document.createElement("div");
    notificationAreaName.classList.add("notification-area-name");

    // Name

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");

    const notiNameIcon = document.createElement("span");
    notiNameIcon.classList.add("material-icons", "noti-icon-style");
    notiNameIcon.textContent = "account_circle";

    const notiNameValue = document.createElement("span");
    notiNameValue.classList.add("patient-name-noti");
    notiNameValue.textContent = patient.NAME;

    const drop = document.createElement("span");
    drop.classList.add("material-icons", "noti-icon-style", "flex-end");
    drop.setAttribute("id", "drop");
    drop.textContent = "arrow_drop_down";

    nameDiv.append(notiNameIcon, notiNameValue, drop);
    notificationAreaName.append(nameDiv);

    // notification area
    const notiFl = document.createElement("div");
    notiFl.classList.add("notiFl");
    const notificationArea = document.createElement("div");
    notificationArea.classList.add("notification-area");

    // Phone

    const notiPhone = document.createElement("div");
    notiPhone.classList.add("name");
    notiPhone.setAttribute("id", "phone ");

    const notiPhoneIcon = document.createElement("span");
    notiPhoneIcon.classList.add("material-icons", "noti-icon-style");
    notiPhoneIcon.textContent = "settings_cell";

    const notiPhoneValue = document.createElement("span");
    notiPhoneValue.classList.add("patient-name-noti");
    notiPhoneValue.textContent = patient.PHONE;
    notiPhone.append(notiPhoneIcon, notiPhoneValue);

    // Mail
    const notiMail = document.createElement("div");
    notiMail.classList.add("name");
    notiMail.setAttribute("id", "mail");

    const notiMailIcon = document.createElement("span");
    notiMailIcon.classList.add("material-icons", "noti-icon-style");
    notiMailIcon.textContent = "mail";

    const notiMailValue = document.createElement("span");
    notiMailValue.classList.add("patient-name-noti");
    notiMailValue.textContent = patient.EMAIL;
    notiMail.append(notiMailIcon, notiMailValue);

    // location
    const notiLocation = document.createElement("div");
    notiLocation.classList.add("name");
    notiLocation.setAttribute("id", "location");

    const notiLocationIcon = document.createElement("span");
    notiLocationIcon.classList.add("material-icons", "noti-icon-style");
    notiLocationIcon.textContent = "location_on";

    const notiLocationValue = document.createElement("span");
    notiLocationValue.classList.add("patient-name-noti");
    notiLocationValue.textContent = patient.SELECTED_ADDRESS;
    notiLocation.append(notiLocationIcon, notiLocationValue);

    // date
    const notiDate = document.createElement("div");
    notiDate.classList.add("name");
    notiDate.setAttribute("id", "date");

    const notiDateIcon = document.createElement("span");
    notiDateIcon.classList.add("material-icons", "noti-icon-style");
    notiDateIcon.textContent = "today";

    const notiDateValue = document.createElement("span");
    notiDateValue.classList.add("patient-name-noti");
    notiDateValue.textContent = patient.SELECTED_DATE;
    notiDate.append(notiDateIcon, notiDateValue);

    // Tests

    const notiTest = document.createElement("div");
    notiTest.classList.add("name");
    notiTest.setAttribute("id", "test");

    const notiTestIcon = document.createElement("span");
    notiTestIcon.classList.add("material-icons", "noti-icon-style");
    notiTestIcon.textContent = "biotech";

    const notiTestValue = document.createElement("span");
    notiTestValue.classList.add("patient-name-noti");
    notiTestValue.textContent = "Tests";

    const notiRightArrow = document.createElement("span");
    notiRightArrow.classList.add(
      "material-icons",
      "noti-icon-style",
      "custom-size"
    );
    notiRightArrow.setAttribute("id", "notiRightArrow");
    notiRightArrow.textContent = "arrow_right";
    notiTest.append(notiTestIcon, notiTestValue, notiRightArrow);

    notiRightArrow.addEventListener("click", (e) => {
      const testUl = document.createElement("ul");
      testUl.classList.add("notification-test-list");
      const backBtn = document.createElement("span");
      backBtn.classList.add("material-icons", "noti-icon-style", "custom");
      backBtn.textContent = "keyboard_backspace";
      testUl.append(backBtn);
      // testUl.classList.add("notification-area");
      // Tests
      patient.SELECTED_TESTS.forEach((t) => {
        const testItem = document.createElement("li");
        testItem.classList.add("name");
        testItem.textContent = t;
        console.log(t);
        testUl.append(testItem);
      });
      notiFl.append(testUl);

      if (notiRightArrow.textContent === "arrow_right") {
        notificationArea.style.transform = "translateX(50rem) scale(0)";
        testUl.style.transform = "translateX(0rem)";
      }

      // console.log("here");
      backBtn.addEventListener("click", () => {
        testUl.style.transform = "translateX(50rem)";

        notificationArea.style.transform = "translateX(0rem)";
      });
    });

    // price

    const notiPrice = document.createElement("div");
    notiPrice.classList.add("name");
    notiPrice.setAttribute("id", "price");

    const notiPriceIcon = document.createElement("span");
    notiPriceIcon.classList.add("material-icons", "noti-icon-style");
    notiPriceIcon.textContent = "credit_card";

    const notiPriceValue = document.createElement("span");
    notiPriceValue.classList.add("patient-name-noti");
    notiPriceValue.textContent = patient.TOTAL_PRICE;
    notiPrice.append(notiPriceIcon, notiPriceValue);

    notificationArea.append(
      notiPhone,
      notiMail,
      notiLocation,
      notiDate,
      notiTest,
      notiPrice
    );
    notiFl.append(notificationArea);
    notificationPanel.append(notificationAreaName, notiFl);
    drop.addEventListener("click", () => {
      if (drop.textContent === "arrow_drop_down") {
        notificationArea.style.opacity = 1;
        notificationArea.style.visibility = "visible";
        notificationArea.style.display = "block";
        notiFl.style.display = "grid";
        drop.textContent = "arrow_drop_up";
      } else {
        notificationArea.style.opacity = 0;
        notificationArea.style.visibility = "hidden";
        notificationArea.style.display = "none";
        drop.textContent = "arrow_drop_down";
        notiFl.style.display = "none";
      }
    });
  });

  // if (response.status === 200) {
  //   console.log(data);
  // } else {
  //   window.location = "../public/faluire.html";
  // }
  // const top
  // drop = document.querySelector(".");
  // notificationArea = document.querySelector(".notification-area");
  const drop = document.querySelectorAll("#drop");
  const notiRightArrow = document.querySelector("#notiRightArrow");
  const notificationArea = document.querySelector(".notification-area");
};

labName.textContent = data.LAB_NAME;
owner.textContent = data.OWNER;
labContact.textContent = data.CONTACT;
labLocation.textContent = data.LOCATION;
add.addEventListener("click", () => {
  window.open("../public/patient.html",'_blank');
});

upgrade.addEventListener("click", () => {
  let paramData = {
    LAB_NAME: data.LAB_NAME,
  };
  paramData = JSON.stringify(paramData);
  let path = `../public/upgrade.html?paramData=${paramData}`;
  window.location.assign(path);
});

view.addEventListener("click", () => {
  window.open("../public/report.html", '_blank');
});
