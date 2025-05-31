const messages = [
    "Are you sure?",
    "Really sure?",
    "Are you positive?",
    "My love please... ",
    "Just think about it!!!",
    "If you say no , I will be really sad...",
    "This will definitely break my heart...",
    "My life will be mess for this...",
    "OK fine, I will stop asking",
    "Just kidding , say yes please!!!❤️",
];



let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1 ) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

