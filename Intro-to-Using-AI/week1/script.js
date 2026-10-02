// Get the button element
const colorButton = document.getElementById('colorButton');

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change background color when button is clicked
function changeBackgroundColor() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    
    // Optional: Add a fun message in the console
    console.log('New background color:', randomColor);
}

// Add click event listener to the button
colorButton.addEventListener('click', changeBackgroundColor);

// Optional: Add keyboard support (Enter or Space to trigger)
colorButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        changeBackgroundColor();
    }
});
