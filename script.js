// const firstName = document.querySelector(".first-name");
// const lastName = document.querySelector(".last-name");
// const age = document.querySelector(".age");


// const membersCatalogue = JSON.parse(localStorage.getItem("catalogue")) || []
// const displayContainer = document.querySelector(".display-container");
// const registerButton = document.querySelector(".register-member");

// function Registerbook(first,last,age,test){
//     this.first = first;
//     this.last = last;
//     this.age = age;
//     this.test = test;
// }

// registerButton.addEventListener("click", () => {
//     const testButton = document.createElement("button");
//     testButton.innerText = "Test"
//     testButton.style.backgroundColor = "green";
//     testButton.addEventListener("click", () => {
//     testButton.classList.toggle("js-button");
//     })
    

//     const logPaper = new Registerbook(firstName.value, lastName.value, age.value,testButton.innerHTML)
    
//     displayContainer.innerHTML = '';

//     membersCatalogue.push(logPaper)
    
//     membersCatalogue.forEach((member) => {
//         const memberDiv = document.createElement("div")
//         memberDiv.textContent = `First Name : ${member.first} Last Name : ${member.last} Age : ${member.age}. 

//         Click here ${member.test}`

//         memberDiv.appendChild(testButton)
//         displayContainer.appendChild(memberDiv)
//     });

//     localStorage.setItem("catalogue", JSON.stringify(membersCatalogue))
// })

const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const age = document.querySelector(".age");

const membersCatalogue = JSON.parse(localStorage.getItem("catalogue")) || []  // Load data from localStorage or use an empty array
const displayContainer = document.querySelector(".display-container");
const registerButton = document.querySelector(".register-member");

// Function to display members from catalogue
function displayMembers() {
    displayContainer.innerHTML = '';  // Clear display container before showing stored members

    membersCatalogue.forEach((member) => {
        const memberDiv = document.createElement("div");

        const testButton = document.createElement("button");
        testButton.innerText = "Test";
        testButton.style.backgroundColor = "green";

        // Toggle button class on click
        testButton.addEventListener("click", () => {
            testButton.classList.toggle("js-button");
        });

        memberDiv.textContent = `First Name: ${member.first}, Last Name: ${member.last}, Age: ${member.age}. Click here: ${member.test}`;

        // Add the test button to each member div
        memberDiv.appendChild(testButton);
        displayContainer.appendChild(memberDiv);
    });
}

// Display members when page loads
displayMembers();

function Registerbook(first, last, age, test) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.test = test;
}

registerButton.addEventListener("click", () => {
    const testButton = document.createElement("button");
    testButton.innerText = "Test";
    testButton.style.backgroundColor = "green";
    
    // Toggle button class on click
    testButton.addEventListener("click", () => {
        testButton.classList.toggle("js-button");
    });

    const logPaper = new Registerbook(firstName.value, lastName.value, age.value, testButton.innerHTML);
    
    // Add the new member to the catalogue
    membersCatalogue.push(logPaper);

    // Save updated catalogue to localStorage
    localStorage.setItem("catalogue", JSON.stringify(membersCatalogue));

    // Display the updated list of members
    displayMembers();

    // Clear the input fields after adding the book
    firstName.value = '';
    lastName.value = '';
    age.value = '';
});

