
//Task 2 - Employee Cards Dynamic Addition
function createEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");

    const card = document.createElement("div");
    card.classList.add("employee-card");

    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    const positionPara = document.createElement("p");
    positionPara.textContent = position;

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", function () {
        container.removeChild(card);
    });

    buttonContainer.appendChild(removeButton);
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(buttonContainer);
    container.appendChild(card);
}

document.addEventListener("DOMContentLoaded", () => {
createEmployeeCard("Benny", "Tester");
createEmployeeCard("Jimmy", "Diagnostics");
createEmployeeCard("Ryan", "Manager");
})
//Task 3 - Bulk Update on Employee Cards

function updateEmployeeCards() {
    const employeeCards = document.querySelectorAll(".employee-card");
    Array.from(employeeCards).forEach(card => {
        card.classList.add("highlight"); // Add a highlight class
    });
}
updateEmployeeCards();

//Task 4 - Employee Card Removal with Event Bubbling

document.getElementById("employeeContainer").addEventListener("click", function () {
    console.log("An employee card was clicked!");
});

function removeEmployeeCard(event) {
    event.stopPropagation(); // Prevent bubbling to the container
    event.target.parentElement.remove(); // Remove the clicked card
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".employee-card button").forEach(button => {
        button.addEventListener("click", removeEmployeeCard);
    });
});


