
// Function to handle click events
function handleClick(event) {
    alert(event.target.alt + ' clicked!');
}

// Function to handle mouseover events
function handleMouseOver(event) {
    event.target.style.border = '2px solid red';
}

// Function to handle mouseout events
function handleMouseOut(event) {
    event.target.style.border = 'none';
}

// Get all list items with images
const imageListItems = document.querySelectorAll('#image li img');

// Add event listeners to all images
imageListItems.forEach(img => {
    img.addEventListener('click', handleClick);
    img.addEventListener('mouseover', handleMouseOver);
    img.addEventListener('mouseout', handleMouseOut);
});

// Load event listener
window.addEventListener('load', function() {
    console.log('Page fully loaded');
});

// Resize event listener
window.addEventListener('resize', function() {
    console.log('Window resized to ' + window.innerWidth + 'x' + window.innerHeight);
});
