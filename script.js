document.addEventListener('DOMContentLoaded', () => {
  const folders = ['port', 'run', 'fash', 'event', 'contact'];

  // === Folder open/close toggle ===
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

  // === Automatic image cycling ===
  const pathMap = {
    port: "photos/portraits",
    run: "photos/runway",
    fash: "photos/fashion",
    event: "photos/events",
    contact: "photos/contact"
  };

  folders.forEach(prefix => {
    const img = document.getElementById(`${prefix}Photo`);
    if (!img) return;

    const folderPath = pathMap[prefix];
    const images = [];
    const maxImages = 100; // upper bound guess (safe)
    let loadedCount = 0;

    // Preload and keep only the successfully loaded images
    for (let i = 1; i <= maxImages; i++) {
      const url = `${folderPath}/img${i}.jpg`;
      const testImg = new Image();
      testImg.onload = () => {
        images.push(url);
        // first successful load defines initial display
        if (images.length === 1) {
          img.src = url;
        }
      };
      testImg.onerror = () => {
        loadedCount++;
        // stop checking if we hit a gap after some images found
        if (i > 5 && images.length && loadedCount - images.length > 5) return;
      };
      testImg.src = url;
    }

    let currentIndex = 0;
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!images.length) return;
      currentIndex = (currentIndex + 1) % images.length;
      img.src = images[currentIndex];
    });
  });
});
