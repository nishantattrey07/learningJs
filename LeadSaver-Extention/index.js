const saveTabBtn = document.getElementById("saveTabBtn");
const saveLinkBtn = document.getElementById("saveLinkBtn");
const deleteBtn = document.getElementById("deleteBtn");
const inputField = document.getElementById("linkInput");
const nameField = document.getElementById("linkName");
const linkList = document.getElementById("linkList");

let linkArray = [];
let nameArray = [];

// Check if data exists in LocalStorage and retrieve it
if (localStorage.getItem('linkArray')) {
    linkArray = JSON.parse(localStorage.getItem('linkArray'));
}

if (localStorage.getItem('nameArray')) {
    nameArray = JSON.parse(localStorage.getItem('nameArray'));
}
renderLink();
function renderLink() {
    linkList.textContent = "";
    for (let i = 0; i < linkArray.length; i++) {
        const linkElement = document.createElement("a");
        const listItem = document.createElement("li");
        linkElement.href = linkArray[i];
        linkElement.textContent = nameArray[i];
        listItem.appendChild(linkElement);
        linkElement.target = "_blank";
        linkList.appendChild(listItem);
    }
}

    function saveLink() {
    const link = inputField.value.trim();
    const name = nameField.value.trim();

    if (link !== "") {
        if (name !== "") {
        linkArray.push(link);
        nameArray.push(name);
        } else {
        linkArray.push(link);
        nameArray.push(link);
        }
        inputField.value = ""; // Clear the input fields after adding the link
        nameField.value = "";

        // Save the updated arrays to LocalStorage
        localStorage.setItem('linkArray', JSON.stringify(linkArray));
        localStorage.setItem('nameArray', JSON.stringify(nameArray));

        renderLink();
    } else {
        alert("Please enter a link");
    }
    }

saveLinkBtn.onclick = () => {
    saveLink();
};

deleteBtn.onclick = () => {
    linkArray.length = 0;
    nameArray.length = 0;
    linkList.textContent = "";

    // Clear the arrays from LocalStorage
    localStorage.removeItem('linkArray');
    localStorage.removeItem('nameArray');
};
