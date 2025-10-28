document.addEventListener('DOMContentLoaded', () => {
  const folders = ['port', 'run', 'fash', 'event', 'contact'];

  // Folder open/close logic (unchanged)
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

  // Fixed number of images per folder
  const pathMap = {
    port: "photos/portraits",
    run: "photos/runway",
    fash: "photos/fashion",
    event: "photos/events",
    contact: "photos/contact"
  };

  const folderImages = {};
  const currentIndex = {};

  folders.forEach(prefix => {
    const img = document.getElementById(`${prefix}Photo`);
    if (!img) return;

    const images = [];
    const count = 14; // number of images in folder
    for (let i = 1; i <= count; i++) {
      images.push(`photos/${prefix === 'fash' ? 'fashion' : prefix}/img${i}.jpg`);
    }

    let currentIndex = 0;
    img.src = images[0];

    img.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
  });
  });

});
