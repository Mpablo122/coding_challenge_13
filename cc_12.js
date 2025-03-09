
//Task 2 
function createEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");

    // Create card div
    const card = document.createElement("div");
    card.classList.add("employee-card");

    // Create heading for name
    const nameHeading = document.createElement("h3");
    nameHeading.textContent = name;

    // Create paragraph for position
    const positionPara = document.createElement("p");
    positionPara.textContent = position;

    // Create button container
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    // Create Remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add event listener to remove card
    removeButton.addEventListener("click", function () {
        container.removeChild(card);
    });

    // Append elements
    buttonContainer.appendChild(removeButton);
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(buttonContainer);
    container.appendChild(card);
}

// Example calls to add employees
createEmployeeCard("Ed", "Tester");
createEmployeeCard("Edd", "Diagnostics");
createEmployeeCard("Eddy", "Manager");
