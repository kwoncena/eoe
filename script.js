// Select all timeline points
const timelinePoints = document.querySelectorAll('.timeline-point');

timelinePoints.forEach((point) => {
  point.addEventListener('click', () => {
    const targetId = point.getAttribute('data-target'); // Get the target card ID
    const targetCard = document.getElementById(targetId); // Find the target card

    if (targetCard.classList.contains('open')) {
      // If the card is open, close it
      targetCard.classList.remove('open');
    } else {
      // Close any other open cards
      document.querySelectorAll('.card.open').forEach((card) => card.classList.remove('open'));

      // Open the clicked card
      targetCard.classList.add('open');
    }
  });
});
