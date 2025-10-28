document.addEventListener('DOMContentLoaded', () => {
  const folders = ['port', 'run', 'fash', 'event', 'contact'];

  folders.forEach(prefix => {
    const openDiv = document.getElementById(`${prefix}HiddenDiv`);
    const buttons = [
      document.getElementById(`${prefix}ClickableDiv`),
      document.getElementById(`${prefix}ClickableDiv2`)
    ];
    
    buttons.forEach(btn => btn?.addEventListener('click', () => {
      openDiv.style.display = 
        (window.getComputedStyle(openDiv).display === 'none') ? 'block' : 'none';
    }));
  });
});