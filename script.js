document.addEventListener('DOMContentLoaded', function() {
  const portClickableDiv = document.getElementById('portClickableDiv');
  const portClickableDiv2 = document.getElementById('portClickableDiv2');
  const portHiddenDiv = document.getElementById('portHiddenDiv');

  const runClickableDiv = document.getElementById('runClickableDiv');
  const runClickableDiv2 = document.getElementById('runClickableDiv2');
  const runHiddenDiv = document.getElementById('runHiddenDiv');

  const fashClickableDiv = document.getElementById('fashClickableDiv');
  const fashClickableDiv2 = document.getElementById('fashClickableDiv2');
  const fashHiddenDiv = document.getElementById('fashHiddenDiv');

  const eventClickableDiv = document.getElementById('eventClickableDiv');
  const eventClickableDiv2 = document.getElementById('eventClickableDiv2');
  const eventHiddenDiv = document.getElementById('eventHiddenDiv');

  const contactClickableDiv = document.getElementById('contactClickableDiv');
  const contactClickableDiv2 = document.getElementById('contactClickableDiv2');
  const contactHiddenDiv = document.getElementById('contactHiddenDiv');


  portClickableDiv.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(portHiddenDiv).display;
    if (currentDisplay === 'none') {
      portHiddenDiv.style.display = 'block'; //displays the element
    } else {
      portHiddenDiv.style.display = 'none'; //hides the element
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


  runClickableDiv.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(runHiddenDiv).display;
    if (currentDisplay === 'none') {
      runHiddenDiv.style.display = 'block'; //displays the element
    } else {
      runHiddenDiv.style.display = 'none'; //hides the element
    }
  });
  runClickableDiv2.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(runHiddenDiv).display;
    if (currentDisplay === 'none') {
      runHiddenDiv.style.display = 'block';
    } else {
      runHiddenDiv.style.display = 'none';
    }
  });

  

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


  contactClickableDiv.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(contactHiddenDiv).display;
    if (currentDisplay === 'none') {
      contactHiddenDiv.style.display = 'block';
    } else {
      contactHiddenDiv.style.display = 'none';
    }
  });
  contactClickableDiv2.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(contactHiddenDiv).display;
    if (currentDisplay === 'none') {
      contactHiddenDiv.style.display = 'block';
    } else {
      contactHiddenDiv.style.display = 'none';
    }
  });



});