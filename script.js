document.addEventListener('DOMContentLoaded', function() {
  const portClickableDiv = document.getElementById('portClickableDiv');
  const portClickableDiv2 = document.getElementById('portClickableDiv2');
  const portHiddenDiv = document.getElementById('portHiddenDiv');

  portClickableDiv.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(portHiddenDiv).display;
    if (currentDisplay === 'none') {
      portHiddenDiv.style.display = 'block';
    } else {
      portHiddenDiv.style.display = 'none';
    }
  });
  portClickableDiv2.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(portHiddenDiv).display;
    if (currentDisplay === 'none') {
      portHiddenDiv.style.display = 'block';
    } else {
      portHiddenDiv.style.display = 'none';
    }
  });

  const fashClickableDiv = document.getElementById('fashClickableDiv');
  const fashClickableDiv2 = document.getElementById('fashClickableDiv2');
  const fashHiddenDiv = document.getElementById('fashHiddenDiv');

  fashClickableDiv.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(fashHiddenDiv).display;
    if (currentDisplay === 'none') {
      fashHiddenDiv.style.display = 'block';
    } else {
      fashHiddenDiv.style.display = 'none';
    }
  });
  fashClickableDiv2.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(fashHiddenDiv).display;
    if (currentDisplay === 'none') {
      fashHiddenDiv.style.display = 'block';
    } else {
      fashHiddenDiv.style.display = 'none';
    }
  });

  const eventClickableDiv = document.getElementById('eventClickableDiv');
  const eventClickableDiv2 = document.getElementById('eventClickableDiv2');
  const eventHiddenDiv = document.getElementById('eventHiddenDiv');

  eventClickableDiv.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(eventHiddenDiv).display;
    if (currentDisplay === 'none') {
      eventHiddenDiv.style.display = 'block';
    } else {
      eventHiddenDiv.style.display = 'none';
    }
  });
  eventClickableDiv2.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(eventHiddenDiv).display;
    if (currentDisplay === 'none') {
      eventHiddenDiv.style.display = 'block';
    } else {
      eventHiddenDiv.style.display = 'none';
    }
  });



});