
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
createEmployeeCard("Benny", "Tester");
createEmployeeCard("Jimmy", "Diagnostics");
createEmployeeCard("Ryan", "Manager");
