document.addEventListener('DOMContentLoaded', function() {
  const clickableDiv = document.getElementById('clickableDiv');
  const hiddenDiv = document.getElementById('hiddenDiv');

  clickableDiv.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(hiddenDiv).display;
    if (currentDisplay === 'none') {
      hiddenDiv.style.display = 'block';
    } else {
      hiddenDiv.style.display = 'none';
    }
  });
});