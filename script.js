// Get the NO button
const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');

// Function to move the NO button to a random position
function moveNoButton() {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Calculate random position within the viewport, avoiding edges
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;
    const minX = 20;
    const minY = 20;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Add event listener for mouseover on NO button
noBtn.addEventListener('mouseover', moveNoButton);

// Add event listener for YES button click
yesBtn.addEventListener('click', function() {
    window.open('valentine.html', '_blank');
});