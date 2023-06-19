let saveTabBtn = document.getElementById("saveTabBtn");
let saveLinkBtn = document.getElementById("saveLinkBtn");
let deleteBtn = document.getElementById("deleteBtn");
let inputField = document.getElementById("linkInput");
let nameField = document.getElementById("linkName");
let linkList = document.getElementById("linkList");


let linkArray = [];
let nameArray = [];


function saveLink() { 
    let link = inputField.value;
    let name = nameField.value;
    if (link !== "") {
        if (name !== "") {
            linkArray.push(link);
            nameArray.push(name);
            let listItem = document.createElement("li");
            let linkElement = document.createElement("a");
            linkElement.textContent = name;
            linkElement.href = link;
            linkElement.target = "_blank";
            listItem.appendChild(linkElement);
            linkList.appendChild(listItem);
        } else {
            name = link;
            linkArray.push(link);
            nameArray.push(name);
            let listItem = document.createElement("li");
            let linkElement = document.createElement("a");
            linkElement.textContent = name;
            linkElement.href = link;
            linkElement.target = "_blank";
            listItem.appendChild(linkElement);
            linkList.appendChild(listItem);
        }
        inputField.value = ""; // Clear the input fields after adding the link
        nameField.value = "";
    }
    else { 
        alert("enter the link");
    }
}

saveLinkBtn.onclick = () => {
    saveLink();
};


deleteBtn.onclick = () => { 
    linkList.innerHTML = "";
}
