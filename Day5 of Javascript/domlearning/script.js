// Retrieve the current value of the 'class' attribute of the element with id 'title'.
title.getAttribute('class'); // Returns "dom"

// Set a new value for the 'class' attribute of the element with id 'title'.
title.setAttribute('class', 'dom, first'); // Now the class attribute is "dom, first"

// Change the background color of the element with id 'title' to green.
title.style.backgroundColor = "green"; // The background color is now green

// Add padding of 15px to the element with id 'title'.
title.style.padding = "15px"; // The padding is now 15px

// Set the border radius of the element with id 'title' to 50px, making the corners rounded.
title.style.borderRadius = "50px"; // The border radius is now 50px

// Retrieve the inner HTML content of the element with id 'title'.
title.innerHTML; // Returns "Hello Everyone this is my learning of Dom in Javascript"

// Retrieve the inner text content of the element with id 'title'.
title.innerText; // Returns "Hello Everyone this is my learning of Dom in Javascript"

// Retrieve the text content of the element with id 'title', similar to innerText.
title.textContent; // Returns "Hello Everyone this is my learning of Dom in Javascript"

// Change the inner text of the element with id 'title' to "Hello World".
title.innerText = "Hello World"; // The inner text is now "Hello World"
