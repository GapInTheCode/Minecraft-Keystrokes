function toggleHighlight(key) {
    const keyElement = document.getElementById(`${key}Key`);
    keyElement.classList.toggle('highlight');
}

function handleKeyDown(event) {
    const key = event.key.toLowerCase();
    toggleHighlight(key);
}

function handleKeyUp(event) {
    const key = event.key.toLowerCase();
    toggleHighlight(key);
}

document.addEventListener('keydown', handleKeyDown);
document.addEventListener('keyup', handleKeyUp);