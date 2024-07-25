const words = ["Software Engineer", "Ai Engineer", "Web Developer"];
const textOutput = document.getElementById("text-output");
let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    if (wordIndex === words.length) {
        wordIndex = 0;
    }
    
    currentWord = words[wordIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    textOutput.textContent = currentWord.substring(0, charIndex);
    
    if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000); // Pause before starting to delete
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex++;
        setTimeout(type, 500); // Pause before typing next word
    } else {
        setTimeout(type, isDeleting ? 100 : 150); // Speed of typing
    }
}

 window.onload = type;