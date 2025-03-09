//Task 1 Creating a base structure


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

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    removeButton.addEventListener("click", function () {
        container.removeChild(card);
    });

    editButton.addEventListener("click", function () {
        container.enableEditing(card);
    });

    buttonContainer.appendChild(removeButton);
    buttonContainer.appendChild(editButton);
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
    event.stopPropagation(); 
    event.target.parentElement.remove(); 
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".employee-card button").forEach(button => {
        button.addEventListener("click", removeEmployeeCard);
    });
});

//Task 5 - Inline Editing for Employee Cards
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("employeeContainer").addEventListener("click", function (event) {
        if (event.target.classList.contains("edit-button")) {
            enableEditing(event.target.parentElement);
        }
    });
});

function enableEditing(card) {
    const nameElement = card.querySelector(".employee-name");
    const positionElement = card.querySelector(".employee-position");

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.value = nameElement.textContent;

    const positionInput = document.createElement("input");
    positionInput.type = "text";
    positionInput.value = positionElement.textContent;

    const saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.classList.add("save-button");
    

    card.innerHTML = "";
    card.appendChild(nameInput);
    card.appendChild(positionInput);
    card.appendChild(saveButton);


    saveButton.addEventListener("click", () => {
        nameElement.textContent = nameInput.value;
        positionElement.textContent = positionInput.value;

        
        card.innerHTML = "";
        card.appendChild(nameElement);
        card.appendChild(positionElement);
        
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("edit-button");
        card.appendChild(editButton);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => card.remove());
        card.appendChild(removeButton);
    });
}

