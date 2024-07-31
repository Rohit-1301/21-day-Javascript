// Selecting the parent element with the ID "parent" from the document
const doc = document.querySelector("#parent");
console.log(doc); // Outputting the selected parent element to the console
console.log(doc.children); // Displaying a collection of direct child elements of the parent element
console.log(doc.children[0].innerHTML); // Outputting the HTML content of the first child element

// Iterating through each child element of the parent and logging their inner HTML content
for (let i = 0; i < doc.children.length; i++) {
    const element = doc.children[i];
    console.log(element.innerHTML);
}

doc.children[0].style.color = "red"; // Changing the text color of the first child element to red
console.log(doc.firstElementChild); // Outputting the first child element directly

console.log("Child Nodes:- ", doc.childNodes); // Printing all child nodes (including text nodes) of the parent element

// Creating a new 'h1' element and setting its content and styles
const newElement = document.createElement("h1");
newElement.innerHTML = "Hello World";
newElement.style.marginTop = "10px";
newElement.style.color = "blue";
newElement.style.backgroundColor = "Green";

// Appending the new element to the end of the 'body'
document.body.appendChild(newElement);
