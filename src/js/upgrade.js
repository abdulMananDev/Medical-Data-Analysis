// Adding Tests
const upgardeAddBtn = document.querySelector("#upgrade_add");
let CATEGORY = document.querySelector("#add-category");
console.log(CATEGORY);
let LABEL = document.querySelector("#add-test-name");
let PRICE = document.querySelector("#price");
let min = document.querySelector("#min");
let max = document.querySelector("#max");
let UNIT = document.querySelector("#units");
let DESCRIPTION = document.querySelector("#add-description");
const upgradeAddSubmit = document.querySelector("#upgrade_submit");
const upgradeLabName = document.querySelector("#upgrade_lab-name");
upgradeLabName.textContent = data.LAB_NAME;
const tar = document.querySelector(".tar");

const addContainer = document.querySelector(".upgrade_add-container");
const retrieveContainer = document.querySelector(".upgrade_retrieve-container");
let inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.style.textTransform = "capitalize";
});

upgardeAddBtn.addEventListener("click", () => {
  addContainer.style.display = "block";
  retrieveContainer.style.display = "none";

  // addContainer.style.visibility = "visible";
  // retrieveContainer.style.opacity = 0;
});

upgradeAddSubmit.addEventListener("click", async () => {
  if (CATEGORY.value.trim() === "") {
    CATEGORY.style.border = "2px solid #ed6663";
    return false;
  } else if (LABEL.value.trim() === "") {
    LABEL.style.border = "2px solid #ed6663";
    return false;
  } else if (PRICE.value.trim() === "") {
    PRICE.style.border = "2px solid #ed6663";
    return false;
  } else if (min.value.trim() === "") {
    min.style.border = "2px solid #ed6663";
    return false;
  } else if (max.value.trim() === "") {
    max.style.border = "2px solid #ed6663";
    return false;
  } else if (DESCRIPTION.value.trim() === "") {
    DESCRIPTION.style.border = "2px solid #ed6663";
    return false;
  } else {
    tar.style.opacity = 0;
    tar.style.visibility = "hidden";
    upgradeAddSubmit.classList.add("upgrade-btn-loading");
    // upgradeAddSubmit.style.backgroundColor = "transparent";

    CATEGORY = CATEGORY.value;
    console.log(CATEGORY);
    LABEL = LABEL.value;
    PRICE = PRICE.value;
    min = +min.value;
    max = +max.value;
    let UNITS = UNIT.value;
    DESCRIPTION = DESCRIPTION.value;
    let trimmedCategory = CATEGORY.slice(0, 7);
    console.log(trimmedCategory);

    data = {
      LABEL: CATEGORY.toUpperCase(),
      MID: trimmedCategory.toUpperCase(),
      TESTS: [
        {
          LABEL: LABEL.toUpperCase(),
          RANGE: {
            min,
            max,
          },
          UNITS,
          DESCRIPTION,
          PRICE,
        },
      ],
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    //   `https://sehat.hyderdevelops.ml/tests/update`,

    const response = await fetch(
      `https://sehat.hyderdevelops.ml/infoStore/add`,
      options
    );
    if (response.status === 200) {
      upgradeAddSubmit.classList.remove("upgrade-btn-loading");
      tar.style.opacity = 1;
      tar.textContent = "Submitted";
      window.location.reload();
    }
    return true;
  }
});

const upgradeRetrieveBtn = document.querySelector("#upgrade_retrieve");
const upgradeTestList = document.querySelector(".upgrade-test-list");

let retrieveCount = 0;
upgradeRetrieveBtn.addEventListener("click", async () => {
  retrieveCount++;
  if (retrieveCount > 1) {
    upgradeRetrieveBtn.disabled = "true";
  } else {
    retrieveContainer.style.display = "block";
    addContainer.style.display = "none";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      `https://sehat.hyderdevelops.ml/infoStore/fetchAll`,
      options
    );
    const data = await response.json();
    if (response.status === 200) {
      console.log(data);
    }

    data.forEach((test) => {
      console.log(test);
      const innerContainer = document.createElement("div");
      innerContainer.classList.add("upgrade_retrieve-inner-container");

      const margSmfCategory = document.createElement("div");
      margSmfCategory.classList.add("margin-small");

      const retrieveCategory = document.createElement("h2");
      retrieveCategory.classList.add("heading-secondary");
      retrieveCategory.setAttribute("id", "retrieve-category");
      retrieveCategory.textContent = test.LABEL;

      test.TESTS.forEach((test) => {
        const margSmfTestName = document.createElement("div");
        margSmfTestName.classList.add("margin-small");

        const retrieveTestName = document.createElement("h4");
        retrieveTestName.classList.add("heading-secondary");
        retrieveTestName.setAttribute("id", "retrieve-test-name");
        retrieveTestName.textContent = test.LABEL;

        const minMaxUnits = document.createElement("div");
        minMaxUnits.classList.add("min-max-units");

        const marSmfMinMaxTop = document.createElement("div");
        marSmfMinMaxTop.classList.add("margin-small", "row-configuration");

        const minValueTop = document.createElement("div");
        minValueTop.classList.add("heading-secondary");
        minValueTop.textContent = "Min-value";

        const maxValueTop = document.createElement("div");
        maxValueTop.classList.add("heading-secondary");
        maxValueTop.textContent = "Max-value";

        const unitsTop = document.createElement("div");
        unitsTop.classList.add("heading-secondary");
        unitsTop.textContent = "Units";
        marSmfMinMaxTop.append(minValueTop, maxValueTop, unitsTop);

        const marSmfMinMaxValue = document.createElement("div");
        marSmfMinMaxValue.classList.add("margin-small", "row-configuration");

        const minValue = document.createElement("div");
        minValue.classList.add("heading-secondary");
        minValue.textContent = test.RANGE.min;

        const maxValue = document.createElement("div");
        maxValue.classList.add("heading-secondary");
        maxValue.textContent = test.RANGE.max;

        const units = document.createElement("div");
        units.classList.add("heading-secondary");
        units.textContent = test.UNITS;

        marSmfMinMaxValue.append(minValue, maxValue, units);

        minMaxUnits.append(marSmfMinMaxTop, marSmfMinMaxValue);

        const marSmfPrice = document.createElement("div");
        marSmfPrice.classList.add("margin-small");

        const retrievePrice = document.createElement("div");
        retrievePrice.setAttribute("id", "retrieve-price");
        retrievePrice.textContent = `Price-Rs${test.PRICE}`;

        const marSmfDescription = document.createElement("div");
        marSmfDescription.classList.add("margin-small");

        const retrieveDescription = document.createElement("p");
        retrieveDescription.setAttribute("id", "retrieve-description");
        retrieveDescription.textContent = test.DESCRIPTION;

        // });

        // appending
        margSmfCategory.append(retrieveCategory);
        margSmfTestName.append(retrieveTestName);
        marSmfPrice.append(retrievePrice);
        marSmfDescription.append(retrieveDescription);
        innerContainer.append(
          margSmfCategory,
          margSmfTestName,
          minMaxUnits,
          marSmfPrice,
          marSmfDescription
        );
      });

      upgradeTestList.append(innerContainer);
      retrieveContainer.append(upgradeTestList);
    });
  }
});

// This tests provides the Amount of Sodium Capacity in the Patients Body.
