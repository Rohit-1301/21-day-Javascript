// Selecting the first <p> element in the document
document.querySelector('p'); // <p>

// Selecting all <p> elements in the document, returns a NodeList
document.querySelectorAll('p'); // NodeList(3) [ p, p, p ]

// Selecting the first <ul> element and assigning it to the variable 'x'
const x = document.querySelector('ul'); // <ul>

// Querying the document again to confirm the selected <ul> element
document.querySelector('ul'); // <ul>

// Selecting the first <li> element within the previously selected <ul>
x.querySelector('li'); // <li>

// Assigning the first <li> element within the <ul> to the variable 'turnred'
let turnred = x.querySelector('li');

// Changing the background color of the selected <li> to black
turnred.style.backgroundColor = "black"; // "black"

// Correcting the typo in the variable name and changing the text color to white
turnred.style.color = "white"; // "white"

// Changing the inner text of the selected <li> to "Green"
turnred.innerText = "Green"; // "Green"

// Selecting elements by their class name 'item-list', returns an HTMLCollection
document.getElementsByClassName('item-list'); // HTMLCollection { 0: li.item-list, 1: li.item-list, 2: li.item-list, length: 3 }

// Correcting the typo in the variable declaration
const list = document.getElementsByClassName('list');

// Converting the HTMLCollection to an array
const lists = Array.from(list);

// Iterating over the array and logging each <li> element to the console
lists.forEach(function (li) {
  console.log(li);
});

// Changing the text color of each <li> element to orange
lists.forEach(function (li) {
  li.style.color = "orange";
});

// Re-converting the HTMLCollection to an array and ensuring the color change
const lis = Array.from(list);
lis.forEach(function (li) {
  li.style.color = "orange";
});



// Key concepts learn from it:=
// document.querySelector: Selects the first matching element.
// document.querySelectorAll: Selects all matching elements and returns a NodeList.
// document.getElementsByClassName: Selects elements by class name, returning an HTMLCollection.
// NodeList vs. HTMLCollection:
// NodeList: Can be accessed with index and is often returned by methods like querySelectorAll.
// HTMLCollection: Live collection of elements, updated as the DOM changes, returned by methods like getElementsByClassName.