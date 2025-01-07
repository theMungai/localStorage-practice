const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");
const age = document.querySelector(".age");

const registerBtn = document.querySelector(".register-member");

function displayMembers(){
    const displaContainer = document.querySelector(".display-container")
    membersContainer.forEach((member) => {
        const memberDiv = document.createElement("div")
        memberDiv.textContent = `First Name: ${member[0]}, Last Name: ${member[1]}, Age: ${member[2]}`
        displaContainer.appendChild(memberDiv)
    })
}

let membersContainer = JSON.parse(localStorage.getItem("info")) || []
registerBtn.addEventListener("click", () => {
    const membersInfo = {
        first : firstName.value,
        last : lastName.value,
        membersAge : age.value
    }

    const memberDetails = [membersInfo.first, membersInfo.last, membersInfo.membersAge]

    membersContainer.push(memberDetails);
    displayMembers()

    localStorage.setItem("info", JSON.stringify(membersContainer))
    
});

displayMembers()