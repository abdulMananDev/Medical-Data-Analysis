// tsting.js
const URLApi = "https://sehat.hyderdevelops.ml";
const testIp = document.querySelector("#test-ip");
// const next = document.querySelector(".print_next");
// console.log(next);

const search = document.querySelector("#test-search-icon");
const searchText = document.querySelector(".search-text");
const listP = document.querySelector("#list");
const listC = document.querySelector("#list-complete");
console.log(listC);
const listSend = document.querySelector(".list-send");

const testConfirmation = document.querySelector(".test-confirmation");

const completeBtn = document.querySelector(".complete");
const partialBtn = document.querySelector(".partial");

const recieveSection = document.querySelector(".recieve");
const addBtn = document.querySelectorAll(".btn-add");
const item = document.querySelectorAll("#addItem");
const comp = document.querySelector("#comp");
console.log(item);
testData = []
let partialCount = 0;

let completePriceArray = [];
let completeSum = 0;
// let array = [];
// console.log(removeUl);
let test = [];
search.addEventListener("click", async () => {
  testIp.style.textTransform = "capitalize";
  if (testIp.value.trim() === "" && testIp.value.length < 5) {
    testIp.style.border = "2px solid red";
    return false;
  } else {
    testIp.style.border = "2px solid ";
  }
  search.classList.add("btn-loading");
  searchText.style.opacity = 0;
  searchText.style.visibility = "hidden";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  // BIOCHEMISTRY
  const response = await fetch(`${URLApi}/infoStore/fetchAll`, options);
  try {
    search.classList.remove("btn-loading");
    searchText.style.opacity = 1;
    searchText.style.visibility = "visible";

    test = await response.json();
    testConfirmation.style.opacity = 1;
    testConfirmation.style.visibility = "visible";
    testConfirmation.style.transition = "all .3s";
    testIp.style.border = "2px solid #224f6d";
  } catch (err) {
    search.classList.remove("btn-loading");
    searchText.style.opacity = 1;
    searchText.style.visibility = "visible";
    console.log("err");
  }
  console.log(test);
  test.forEach((t) => {
    console.log(t);
  });
  testData = test
});
console.log(data)
const list = document.querySelector("#list");
const tableBody = document.querySelector("#table-body");
const remList = document.querySelector("#list-send");
const removeUl = document.querySelector(".list-send");
const total = document.querySelector(".total");
const money = document.createElement("span");
const next = document.querySelector(".print_next");
console.log(next);
money.classList.add("total-value");
let sum = 0;

let array = [];
let priceArray = [];
let testArray = [];

const { FULL_NAME, PHONE, EMAIL, REGION, AGE } = data;
let timeStamp = new Date();
timeStamp = `${timeStamp.getDate()}-${
  timeStamp.getMonth() + 1
}-${timeStamp.getFullYear()}`;
console.log(timeStamp);
let STATUS = "";
let PRICE = "";
let mainObj = {
  FULL_NAME,
  PHONE,
  EMAIL,
  REGION,
  AGE,
  STATUS,
  test: [],
  PRICE,
  TIMESTAMP: timeStamp,
  LAB_ID: "LAB-01",
  D3: new Date(),
  DATE: {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getUTCFullYear(),
  },
};

console.log(mainObj);
const patientName = document.querySelector("#patient-name");
const patientPhone = document.querySelector("#patient-phone");
const patientEmail = document.querySelector("#patient-email");
const patientgender = document.querySelector("#patient-gender");
const patientResidence = document.querySelector("#patient-address");
const patientAge = document.querySelector("#patient-age");

// serverArray.push(data);
// console.log(serverArray);
patientName.textContent = data.FULL_NAME;
patientPhone.textContent = data.PHONE;
patientEmail.textContent = data.EMAIL;
// patientgender.textContent = "Male";
patientResidence.textContent = data.REGION;
patientAge.textContent = data.AGE;

let leftArray = [];
let completeCount = 0;
let count = 1;
completeBtn.addEventListener("click", () => {
  completeCount++;
  partialCount+=2
  console.log(partialCount)
  // console.log(partialCount);
  if (completeCount > 1) {
    completeBtn.disabled = "true";
  } else {
    console.log("here");
    test.forEach((t) => {
      t.TESTS.forEach((t) => {
        let getItem = document.createElement("li");
        let getSerNo = document.createElement("span");
        let getRemText = document.createElement("span");

        getItem.classList.add("recieve-list-item");
        getSerNo.classList.add("left-serial-no");
        getRemText.classList.add("addItem");

        // let getId = document.createElement("span");
        // getId.classList.add("cId");
        // getId.textContent = t.CID;

        let minRange = document.createElement("span");
        minRange.classList.add("cId");
        minRange.textContent = t.RANGE.min;
        console.log(minRange);
        let maxRange = document.createElement("span");
        maxRange.classList.add("cId");
        maxRange.textContent = t.RANGE.max;

        console.log(t.RANGE.min);

        getSerNo.textContent = count;
        getRemText.textContent = t.LABEL;
        getItem.append(getSerNo, maxRange, minRange, getRemText);
        listC.append(getItem);

        console.log(getItem);
        listC.style.display = "flex";
        recieveSection.style.display = "inline-block";
        recieveSection.style.transition = "all .4s";
        listP.style.display = "none";

        // const completePrice = document.createElement("span");
        // completePrice.textContent = parseInt(Math.random() * 500);

        // array.push(remItem);
        // let obj = {};

        let remItem = document.createElement("tr");
        let serNo = document.createElement("td");
        const remText = document.createElement("td");
        remText.textContent = t.LABEL;
        const price = document.createElement("td");
        price.textContent = t.PRICE;

        completePriceArray.push(+price.textContent);
        serNo.classList.add("serial-no");
        console.log(test);
        serNo.textContent = count;
        count++;
        remItem.append(serNo, remText, price, "-");
        tableBody.append(remItem);
        console.log(price.textContent);
        let obj = {};
        obj["LABEL"] = getRemText.textContent;
        // obj["CID"] = getId.textContent;
        obj["RESULT"] = null;
        obj["RANGE"] = {
          min: minRange.textContent,
          max: maxRange.textContent,
        };
        obj["price"] = price.textContent;
        mainObj["test"].push(obj);
        let sum = 0;
        console.log(completePriceArray);
        completePriceArray.forEach((p) => {
          sum += p;
        });
        console.log(mainObj);
        money.textContent = sum;
      });
      // console.log(e.target.parentElement);

      // const item = e.target.previousElementSibling;

      // console.log(item);
      // const itemContent = item.textContent;
      // const id = item.previousElementSibling;
      // const itemId = id.textContent;
      // console.log(itemId);
      // const min = id.previousElementSibling;
      // minRange = min.textContent;
      // const max = min.previousElementSibling;
      // maxRange = max.textContent;
      // console.log(min);

      // obj["LABEL"] = itemContent;
      // obj["CID"] = itemId;
      // obj["RESULT"] = null;
      // obj["RANGE"] = {
      //   min: minRange,
      //   max: maxRange,
      // };
      // testArray.push(obj);
      // mainObj["test"].push(obj);

      // console.log(testArray);
      // // console.log(serverArray);
      // console.log(mainObj);

      // remText.textContent = itemContent;

      // priceArray.push(parseInt(price.textContent));

      // array.push(remItem);

      // priceArray.forEach((p) => {
      //   sum += p;
      // });
      // total.append(money);
      // console.log(priceArray);
    });
    // tableBody.addEventListener("click", (s) => {
      let x = 0;
    //   sum = 0;

    //     let remL = s.target.parentElement;
    //     const price = remL.children[2].textContent;

    //     let index = array.indexOf(remL);
    //     array.splice(index, 1);
    //     testArray.splice(index, 1);
    //     mainObj["test"].splice(index, 1);

    //     console.log(testArray);
    //     array.forEach((trace) => {
    //       let serial = trace.firstChild;
    //       serial.textContent = array.indexOf(trace) + 1;
    //       tableBody.append(trace);
    //     });

    //   completePriceArray.forEach((trace) => {
    //     completeMoney.textContent = trace;
    //   });
    //   completePriceArray.forEach((p) => {
    //     completeSum += p;
    //   });
    //   completePriceArray.pop();
    //   total.textContent = completeSum;
    //   listP.style.display = "none";
    //   console.log(completePriceArray);
    //   setTimeout(() => {
    //     tableBody.append(completeMoney);
    //     tableBody.append(getItem);
    //   }, 1000);
    // });
    // printNext.style.opacity = 1;
    // printNext.style.visibility = "visible";
    // printNext.style.transition = "all .3s";
    // recieveSection.style.display = "inline-block";
    // recieveSection.style.transition = "all .4s";
    // addBtn.forEach((e) => {
    //   e.style.backgroundColor = "#b6eb7a";
    // });
    // console.log(array[0].children);
  }
});
console.log(test)

partialBtn.addEventListener("click", () => {
  completeCount+=2;
  // partialCount++;
  // console.log(partialCount);
  if (partialCount > 1) {
    partialBtn.disabled = "true";
  }
  // test.forEach((trace) => {
  //   console.log(trace);
  //   leftArray.push(trace);
  //   console.log(leftArray);
  // });
  // console.log(leftArray);

  // test.forEach((trace) => {
  //   let testName = trace.LABEL;
  //   // console.log(testName.textContent);

  //     let testTestName = c.LABEL;
  //     // console.log(testTestName);
  //     if (testName === testTestName) {
  //       partailBtn.disabled = false;
  //     }
  //   });
  // });
  
  else {

    
    test.forEach((t) => {
      partialCount++
      t.TESTS.forEach((t) => {
        
        const price = document.createElement("span");
        price.textContent = t.PRICE;
        price.classList.add("cId");

        let getItem = document.createElement("li");
        let getSerNo = document.createElement("span");
        let getRemText = document.createElement("span");
        const add = document.createElement("button");
        getItem.classList.add("recieve-list-item");
        getSerNo.classList.add("left-serial-no");
        getRemText.classList.add("addItem");

        let minRange = document.createElement("span");
        minRange.classList.add("cId");
        minRange.textContent = t.RANGE.min;
        console.log(minRange);
        let maxRange = document.createElement("span");
        maxRange.classList.add("cId");
        maxRange.textContent = t.RANGE.max;

        console.log(t.RANGE.min);

        add.classList.add("btn-add");
        getItem.append(getSerNo, price, maxRange, minRange, getRemText, add);
        getSerNo.textContent = count;
        count++;
        getRemText.textContent = t.LABEL;
        add.textContent = "ADD";
        console.log(getItem);
        listP.style.display = "flex";
        listP.append(getItem);
        listC.style.display = "none";
      });
    });
    // next.style.opacity = 1;
    // next.style.visibility = "visible";
    // next.style.transition = "all .3s";
    recieveSection.style.display = "inline-block";
    recieveSection.style.transition = "all .4s";
    addBtn.forEach((e) => {
      e.style.backgroundColor = "#f3c623";
    });
  }
});

// list.js

list.addEventListener("click", (e) => {
  let obj = {};
  let remItem = document.createElement("tr");
  let serNo = document.createElement("td");
  const remText = document.createElement("td");
  const remove = document.createElement("td");
  const price = document.createElement("td");

  remItem.append(serNo, remText, price, remove);

  if (e.target.className === "btn-add") {
    console.log(e.target.parentElement);

    const item = e.target.previousElementSibling;
    // item.classList.add("k");
    console.log(item);
    const itemContent = item.textContent;

    const min = item.previousElementSibling;
    const minRange = min.textContent;
    const max = min.previousElementSibling;
    const maxRange = max.textContent;
    const pvalue = max.previousElementSibling;
    console.log(pvalue);
    console.log(min);

    // const maxRange = minRange.previousElementSibling.textContent;

    obj["LABEL"] = itemContent;

    obj["RESULT"] = null;
    obj["RANGE"] = {
      min: minRange,
      max: maxRange,
    };
    obj["price"] = pvalue.textContent;

    testArray.push(obj);

    mainObj["test"].push(obj);

    console.log(testArray);
    // console.log(serverArray);
    console.log(mainObj);

    remText.textContent = itemContent;
    price.textContent = +pvalue.textContent;

    remove.textContent = "Remove";
    remove.classList.add("btn-remove");

    priceArray.push(parseInt(price.textContent));

    array.push(remItem);

    priceArray.forEach((p) => {
      sum += p;
    });
    priceArray.pop();
    money.textContent = sum;

    array.forEach((trace) => {
      serNo.textContent = array.lastIndexOf(trace) + 1;
      tableBody.append(trace);
    });
  }
});
total.append(money);

console.log(priceArray);
tableBody.addEventListener("click", (s) => {
  sum = 0;
  if (s.target.className === "btn-remove") {
    let remL = s.target.parentElement;
    const price = remL.children[2].textContent;

    money.textContent -= price;
    while (tableBody.firstChild) {
      console.log(removeUl.firstChild);
      tableBody.removeChild(tableBody.firstChild);
    }

    let index = array.indexOf(remL);
    array.splice(index, 1);
    testArray.splice(index, 1);
    mainObj["test"].splice(index, 1);

    // console.log(mainObj);
    console.log(testArray);
    array.forEach((trace) => {
      let serial = trace.firstChild;
      serial.textContent = array.indexOf(trace) + 1;
      tableBody.append(trace);
    });
  }
});

next.addEventListener("click", async () => {
  mainObj.STATUS = "INITALIZED";
  mainObj.PRICE = money.textContent;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mainObj),
  };

  console.log(mainObj);
  const response = await fetch(`${URLApi}/tests/add`, options);
  const uniqueId = await response.text();
  console.log(uniqueId);
  mainObj.uniqueId = uniqueId;
  console.log(mainObj);

  if (response.status === 200) {
    mainObj = JSON.stringify(mainObj);
    let path = `../public/print.html?paramData=${mainObj}`;
    window.open(path, '_blank');
  }
});
