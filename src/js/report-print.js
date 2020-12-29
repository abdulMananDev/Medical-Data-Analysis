// console.log("start");
const patientName = document.querySelector(".receipt-Name");
const patientPhone = document.querySelector(".receipt-number");
console.log(patientPhone);
const uniqueId = document.querySelector(".receipt-unique-id");
// const patientEmail = document.querySelector(".receipt-");
// let patientgender = document.querySelector("#");
const print = document.querySelector(".print_print");
const tableBody = document.querySelector("#table-body");

const patientResidence = document.querySelector(".receipt-address");
const patientAge = document.querySelector(".receipt-age");
// const list = document.querySelector(".receipt-");
const total = document.querySelector("#total");
const date = document.querySelector("#date");

uniqueId.textContent = data.uniqueId;
patientName.textContent = data.FULL_NAME;
patientResidence.textContent = data.REGION;
// patientgender.textContent = "Male";
patientPhone.textContent = data.PHONE;
console.log(data.PHONE);
// patientEmail.textContent = data.EMAIL;
patientAge.textContent = data.AGE;
date.textContent = data.TIMESTAMP;
total.textContent = `Rs. ${data.PRICE}`;

const test = data.test;
test.forEach((trace) => {
  let getItem = document.createElement("tr");
  let getSerNo = document.createElement("td");
  let getRemText = document.createElement("td");
  let price = document.createElement("td");
  price.textContent = trace.price;

  // getSerNo.classList.add("left-serial-no");
  // getRemText.classList.add("addItem");
  // getItem.classList.add("recieve-list-item");
  getRemText.textContent = trace.LABEL;
  getSerNo.textContent = test.lastIndexOf(trace) + 1;
  getItem.append(getSerNo, getRemText, price);
  tableBody.append(getItem);
});

print.addEventListener("click", () => {
  window.print();
});
