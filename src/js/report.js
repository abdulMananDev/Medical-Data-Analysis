const URL = "https://sehat.hyderdevelops.ml";
console.log("start");
const testId = document.querySelector("#unique_id");
const reportSearch = document.querySelector("#report_search");
const reportInput = document.querySelector(".report_input");
const reportContainer = document.querySelector(".report_container");

const patientName = document.querySelector("#patient-name-report");
const patientPhone = document.querySelector("#patient-phone-report");
const patientEmail = document.querySelector("#patient-email-report");
const patientgender = document.querySelector("#patient-gender-report");
const patientResidence = document.querySelector("#patient-address-report");
const patientAge = document.querySelector("#patient-age-report");
const reportSubmitBtn = document.querySelector("#report-submit-btn");
let data = {};
let testHeadingArr = [];
const regTest = /^\d{6}$/;
reportSearch.addEventListener("click", async () => {
  if (!regTest.test(testId.value.trim())) {
    testId.style.border = "2px solid #ed6663";
    console.log("here");
    return false;
  } else {
    testId.style.border = "2px solid rgb(34, 79, 109)";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `${URL}/tests/getOne?id=${testId.value}`,
      options
    );

    console.log(response.status);
    let patient = await response.text();
    patient = JSON.parse(patient);
    console.log(patient);
    data = patient;
    patientName.textContent = patient.FULL_NAME;
    patientPhone.textContent = patient.PHONE;
    patientEmail.textContent = patient.EMAIL;
    patientResidence.textContent = patient.REGION;

    patientAge.textContent = patient.AGE;
    console.log(patient);

    data.test.forEach((test) => {
      const testContainer = document.createElement("div");
      testContainer.classList.add("test-Description");
      const testHeading = document.createElement("h2");
      testHeading.classList.add(".test_heading");
      console.log(testContainer);

      // const cId = document.createElement("span");
      const rGLT = document.createElement("ul");
      rGLT.classList.add("report-generation-list");
      const reportValueT = document.createElement("span");
      reportValueT.textContent = "Input-Value";
      const threshholdT = document.createElement("span");
      threshholdT.textContent = "BAND";
      const minRangeT = document.createElement("li");
      const maxRangeT = document.createElement("li");
      const unitsT = document.createElement("li");
      rGLT.append(reportValueT, threshholdT, minRangeT, maxRangeT, unitsT);
      // testLabel.textContent = test.LABEL;
      // 721713
      // 806875668
      unitsT.textContent = "Unit";
      minRangeT.textContent = `Min`;
      maxRangeT.textContent = `Max`;

      const rGL = document.createElement("ul");
      testHeading.textContent = test.LABEL;
      testHeadingArr.push(testHeading.textContent);

      rGL.classList.add("report-generation-list");
      const reportValue = document.createElement("input");
      reportValue.setAttribute("test-label", testHeading.textContent);
      reportValue.setAttribute("id", test.LABEL);
      reportValue.classList.add("form_report");
      const threshhold = document.createElement("button");
      threshhold.classList.add("btn-grey");
      threshhold.textContent = "DEFAULT";
      const minRange = document.createElement("li");
      const maxRange = document.createElement("li");
      const units = document.createElement("li");
      rGL.append(reportValue, threshhold, minRange, maxRange, units);
      // testLabel.textContent = test.LABEL;
      units.textContent = "g/mL";
      minRange.textContent = `${test.RANGE.min} `;
      maxRange.textContent = `${test.RANGE.max} `;
      rGL.style.background = "white";
      rGL.style.color = "rgb(34, 79, 109)";

      // rGL.children.forEach((c) => {
      //   c.classList.add("report-generation-list_item");
      // });
      const testElaboration = document.createElement("div");
      testElaboration.classList.add("test-elaboration");
      const spanLine = document.createElement("span");
      spanLine.classList.add("font-small");
      spanLine.textContent = "Test-Description:";
      const testExplain = document.createElement("p");
      testExplain.setAttribute("id", "test-explain");
      testExplain.textContent = `   Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sed
    facilis repellendus ipsam, dolor laborum ut atque tenetur illum
    provident!`;

      testElaboration.append(spanLine, testExplain);
      testContainer.append(testHeading, rGLT, rGL, testElaboration);
      reportContainer.append(testContainer);
      // reportContainer.append(testContainer);

      // cId.textContent = test.CID;
      // cId.style.display = "none";

      // checkBtn.setAttribute("id", "check-btn");
      // checkBtn.classList.add("btn-complete");
      // checkBtn.textContent = "Check";

      // reportValue.classList.add("form_input");
      // // reportValue.setAttribute("id", "");

      // testLabel.textContent = test.LABEL;

      // testContainer.append(
      //   testLabel,
      //   reportValue,
      //   cId,
      //   checkBtn,
      //   testDescription
      // );
      // reportInput.append(testContainer);

      reportValue.addEventListener("change", (e) => {
        const checker = parseFloat(e.target.value);

        if (checker > test.RANGE.max) {
          threshhold.className = "";
          threshhold.classList.add("btn-high");
          threshhold.textContent = "HIGH";
        } else if (checker >= test.RANGE.min && checker <= test.RANGE.max) {
          threshhold.className = "";
          threshhold.classList.add("btn-normal");
          threshhold.textContent = "NORMAL";
        } else if (checker < test.RANGE.min && checker > 0) {
          threshhold.className = "";
          threshhold.classList.add("btn-low");
          threshhold.textContent = "LOW";
        } else {
          threshhold.className = "";
          threshhold.classList.add("btn-grey");
          threshhold.textContent = "Invalid";
        }
      });
    });
    return true;
  }
});
let final ={};
const reportPrint = document.querySelector(".button-report-print");
reportSubmitBtn.addEventListener("click", async () => {
  data.STATUS = "UPDATED";

  let c = document.querySelectorAll(".form_report");
  console.log(c);
  let temp_id = [];
  c.forEach((node) => {
    let id = node.getAttribute("id");
    temp_id.push(id);
  });
  console.log(temp_id);
  let temp_inp = [];
  temp_id.forEach((key) => {
    key = document.querySelector(`#${key}`);
  });

  console.log(temp_inp);

  let temp_data = {};
  c.forEach((node) => {
    let label = node.getAttribute("test-label");
    temp_data[label] = node.value;
  });

  console.log(temp_data);

  data.test.forEach((test) => {
    test.RESULT = temp_data[test.LABEL];
  });

  console.log(JSON.stringify(data));

  let final_data = {};

  for (key in data) {
    if (key !== "_id") {
      final_data[key] = data[key];
    }
  }

  console.log(final_data);
  final = final_data

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(final_data),
  };

  const response = await fetch(
    `https://sehat.hyderdevelops.ml/tests/update`,
    options
  );

  if (response.status === 200) {
    reportSubmitBtn.style.transform = "scale(0)";
    reportPrint.style.opacity = "1";
    reportPrint.style.visibility = "visible";
    reportPrint.style.transform = "translateY(-3rem)";
  }
});

const date = new Date()

reportPrint.addEventListener("click", () => {
  
 
  console.log(final)
  document.write(
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="../src/styles/style.css" />
      <title>Report | Print</title>
    </head>
    <body>
      
      <div class="receipt-container">
        <div class="receipt-img">
          <img src="../src/assets/medical-logo.jpg" class="receipt_img" alt="" />
        </div>
        <div class="receipt">
          <div class="receipt_lab-details receipt_user-details">
            <div class="col-flex">
              <div class="receipt-name-top">Date: </div>
              <div class="receipt-name-top">Lab-Name: </div>
              <div class="receipt-name-top">Lab-Address: </div>
              <div class="receipt-name-top">Lab-Phone: </div>
            </div>
  
            <div class="col-flex">
              <div class="receipt-date underline" id="date">${date.toDateString()}</div>
              <div class="receipt-name underline">Lal-Path</div>
              <div class="underline">Soura Branch-(A)</div>
              <div class="underline">0194-22358962</div>
            </div>
          </div>
          <div class="receipt_user-details">
            <div class="col-flex">
              
              <div class="receipt-name-top">Name:</div>
              <div class="receipt-name-top">Address:</div>
              <div class="receipt-name-top">Phone:</div>
              <div class="receipt-name-top">Email:</div>
              <div class="receipt-name-top">Age:</div>
            </div>
            <div class="col-flex">
              
              <div class="receipt-Name underline">${final.FULL_NAME}</div>
              <div class="receipt-address underline">${final.REGION}</div>
              <div class="receipt-number underline">${final.PHONE}</div>
           
              <div class="receipt-email underline">${final.EMAIL}</div>
              <div class="receipt-age underline">${final.AGE}</div>
            </div>
          </div>
        </div>
        <div class="heading-tertiary">Medical Report</div>
        <div class="receipt-body">
          <div class="table-wrapper-receipt">
            <table class="fl-table-receipt">
              <thead>
                <tr>
                  <th>S. No</th>
                  <th>Test</th>
                  <th>Value</th>
                  <th>Band</th>
                  <th>min-value</th>
                  <th>max-value</th>
                  </tr>
                  </thead>
                  
              <tbody id="table-body">
               
              </tbody>
            </table>
          </div>
        </div>
        <div class="print_print">
      <span class="material-icons"> print </span>
    </div>
    </body>
  </html>
 
  `
  )
  
  const tableBody = document.querySelector("#table-body");
          // tableBody = document.querySelector("#table-body")
          final.test.forEach(ele=>{
          let getItem = document.createElement("tr");
          let testName = document.createElement("td");
          let getSerNo = document.createElement("td");
          let testValue = document.createElement("td");
          let testBand = document.createElement("td");
          let minVal =  document.createElement("td");
          let maxValue =  document.createElement("td");
          getSerNo.textContent = final.test.lastIndexOf(ele) + 1;
          testName.textContent = ele.LABEL
          testValue.textContent =ele.RESULT
          minVal.textContent = ele.RANGE.min
          maxValue.textContent = ele.RANGE.max

          if (ele.RESULT > ele.RANGE.max) {
           
           testBand.textContent = "HIGH";
           
          } else if (ele.RESULT >= ele.RANGE.min && ele.RESULT <= ele.RANGE.max) {
           
           testBand.textContent = "NORMAL"; 
          
          } else if(ele.RESULT < ele.RANGE.min) {
           
           testBand.textContent = "LOW";
           
          } 
          else{
            testBand.textContent = "INVALID";
          }
          getItem.append(getSerNo, testName,testValue,testBand, minVal,maxValue);
          tableBody.append(getItem);
      
        })
        const print = document.querySelector(".print_print");
        print.addEventListener("click", () => {
          window.print();
        }); 
          
});
