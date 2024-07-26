// Sample string for demonstration
let sampleText = " Hello, World! Welcome to Web Development. ";

// 1. Length: Get the length of the string
let length = sampleText.length; // Output: 40

// 2. Trim: Remove whitespace from both ends of the string
let trimmedText = sampleText.trim(); // Output: "Hello, World! Welcome to Web Development."

// 3. ToUpperCase: Convert the string to uppercase
let upperCaseText = sampleText.toUpperCase(); // Output: " HELLO, WORLD! WELCOME TO WEB DEVELOPMENT. "

// 4. ToLowerCase: Convert the string to lowercase
let lowerCaseText = sampleText.toLowerCase(); // Output: " hello, world! welcome to web development. "

// 5. IndexOf: Find the index of the first occurrence of a substring
let indexOfWorld = sampleText.indexOf("World"); // Output: 8

// 6. LastIndexOf: Find the index of the last occurrence of a substring
let lastIndexOfE = sampleText.lastIndexOf("e"); // Output: 31

// 7. Slice: Extract a section of the string
let sliceText = sampleText.slice(7, 12); // Output: "World"

// 8. Substring: Extract characters from a string between two specified indices
let substringText = sampleText.substring(7, 13); // Output: "World"

// 9. Replace: Replace a specified value with another value in a string
let replacedText = sampleText.replace("World", "Universe"); // Output: " Hello, Universe! Welcome to Web Development. "

// 10. Split: Split a string into an array of substrings
let splitText = sampleText.split(" "); // Output: ["", "Hello,", "World!", "Welcome", "to", "Web", "Development.", ""]

// 11. Includes: Check if a string contains a specified substring
let includesWorld = sampleText.includes("World"); // Output: true

// 12. StartsWith: Check if a string starts with a specified substring
let startsWithHello = sampleText.startsWith(" Hello"); // Output: true

// 13. EndsWith: Check if a string ends with a specified substring
let endsWithDot = sampleText.endsWith(". "); // Output: true

// 14. Concat: Concatenate two or more strings
let concatenatedText = sampleText.concat(" Let's learn more!"); // Output: " Hello, World! Welcome to Web Development.  Let's learn more!"

// 15. Repeat: Repeat a string a specified number of times
let repeatedText = "Web ".repeat(3); // Output: "Web Web Web "



console.log("Original Text:", sampleText);
console.log("Length:", length);
console.log("Trimmed Text:", trimmedText);
console.log("Uppercase Text:", upperCaseText);
console.log("Lowercase Text:", lowerCaseText);
console.log("Index of 'World':", indexOfWorld);
console.log("Last Index of 'e':", lastIndexOfE);
console.log("Sliced Text:", sliceText);
console.log("Substring Text:", substringText);
console.log("Replaced Text:", replacedText);
console.log("Split Text:", splitText);
console.log("Includes 'World':", includesWorld);
console.log("Starts with ' Hello':", startsWithHello);
console.log("Ends with '. ':", endsWithDot);
console.log("Concatenated Text:", concatenatedText);
console.log("Repeated Text:", repeatedText);

