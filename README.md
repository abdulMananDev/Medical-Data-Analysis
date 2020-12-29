# **Lab Web-App**

This Component of the overall project is built using traditional **HTML** _-for Mark-up_, **Sass** _(A Css Preprocessor)-for styling_ and **Vanilla JavaScript**_- for web-page interactivity_. and corresponds to the Laboratory aspect.

- This software is projected towards the low-budget Lab. <br>
- This interface is the source of information to the User-Application.<br>

---

The Interface is built considering the following aspects:

### **Efficient Patient Record Maintenance:**

Rather than maintaining a local database for the patient records- hectic and time-consuming this portion provides: -

1. Easy aquiuring of the Patients Information that's regular with the lab.
2. Addtion of new Patients to the Lab by entering the patient details and uploading it to the DataBase.

### **Crystal Test related Details:**

1. Instead of maintaining the test details manually and cutting and pasting them to form a report- The Lab can ingest the data about a particular test with respect to the equipent associated; and retreive it at the time of the Report Generation.
1. The Lab can also on expanding their worth on diffrent testing equipments simple can update the details about the new equipment.

---

**The overall work-flow of the Lab's Web-App revolves around the above briefly explained aspects**

## **Work-Flow**:

## **Lab Authentication**:

The work-flow starts by Authenticating the Lab by the Lab's username and password opening the gateway to their Dashboard.

![1](/src/assets/1.gif "authentication")

- **Dashboard**: The Dashboard is developed to have the Lab Detiails along with the following sub components:

- Patient Details
- Reports
- Tests

### **Patient Details:**

This subcomponents consists the following section:

1. Patient Existence:

   This subcomponent takes care of the patients assocaited with the lab. Patients are searched on the bases of the **phone number** and

- if the patient exits- their Name and all the details and retrieved and displayed just on the click of a button.

![2](/src/assets/2.gif "existing-patient")

- else the text-area shows **user not found!**. Then to add the user a form appears which adds the user to the database or can be thought of _linking that patient premanantly with the lab_.

![3](/src/assets/3.gif "new-patient")

2. Tests for the Patient:

- After linking the patient we move on to the section where numerous tests that the patient desires to do are linked with them; just by searching the **category** which consists the list of tests.

Then according to the patients choice;
**Complete:-**

- if they want all the tests to be done under this category; **complete button** is used and all the tests under the category along with their prices are linked to the patients profie created in the above section.
  ![4](/src/assets/4.gif "complete-btn")

  **Partial:-**

- else if they want only some of the tests to be done under the serached category; **partial button** can be used where only specific tests can be added or removed to/from the patients profile.
  ![5](/src/assets/5.gif "partial-btn")

3. Printing and Unique-Id:

- After completion of the above process the Lab is redirected to the _receipt printing_ section, where a **unique-Id** is generated to represent the tests that the patient has opted for, implying that this id is uniquely indetifying the patient and all the test he's acquired for at that instance. This Id is genrated to eradicate the privacy concerns that rise while testing is done; the person doing the test is unknown of the patient's detail because this unique id is wrapped around the testing specimen.
  ![6](/src/assets/6.gif "printing")

### **Report Generation:**

Through the Unique-id generated in the above section; Patients are searched on the basis of the unique-id and the patient details and all the linked tests are fetched from the database and displayed; here the Lab correspondant on test resut arrival can input the results into the interface and print the report for the patient.
![7](/src/assets/7.gif "report-generation") ![8](/src/assets/8.gif "inputing values")

### **Test Addition/ Upgradation:**

- The Lab can add the **tests- _with all the details_** on the basis of the exisitng equipment to start with or the newer equipments that they have upgraded for.
- The Lab can also retrive the Tests to keep track of the details.

  ![9](/src/assets/9.gif "test-add/retrieve")

## Regular Expressions:

All the inputs existant in the Lab's webapp are validated on the front-end to ensure that no inaccurate data is injected into or queried for in the database. To accomplish that **Regular Expressions**; patterns used to match character combinations in strings are used.

- for-example to validate the **phone number** we use the follwing syntax:

```JavaScript
const regPhone = /^[6-9]\d{9}$/; //{PHONE NUMBER VALIDATION}
search.addEventListener("click", async () => {
  console.log(phoneIp.value);
  if (!regPhone.test(phoneIp.value)) {
    phoneIp.style.border = "2px solid red";
    return false;
  }
  else{
      return true;
  }
})
```

We define a regular expression here _regPhone_ and **test** the input against it.

- if false phone number's not searched and border is turned red for indication (UX).
- else phone number's searched.

  **Same is done for the e-mail validation and date validation**

## Notifications:-

The patient through the user-application can send notifications to the lab for the collection of the tests. Notifications are accessible to the Lab in the notifications panel.

## Responsive:

The web-application is fully responsive to the breakpoint 768px(tablet) and mostly upto 360px(phone).
For Responsiveness the follwing sass library [include-media](https://github.com/eduardoboucas/include-media) is being used and media queries are implemented using **sass**.

## **Technologies Used**

![img-html](/src/assets/html.png "html")
Hypertext Markup Language, is a markup language used to define the structure of the webpage. This structure is shaped up by the browser known as DOM (Document Objet Model) where the elements defined in HTML; refered to as objects are _styled in css and provided intereativity with JavaScript._

![img-css](/src/assets/css.png "Css")
Cascading Style Sheets are used to style the elements defined in the HTML. The elements are addressed through class-name or id and diffrent properties are associated with them in _css file_ to provide a better UI.

![img-sass](/src/assets/sass.png "sass")
Sass : A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax . There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on. These features make the CSS structure more readable and easier to maintain.

![img-JavaScript](/src/assets/javascript.png "JavaScript")
JavaScript ( JS ) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions . While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js . JavaScript is a prototype-based , multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
