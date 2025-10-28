document.addEventListener('DOMContentLoaded', async () => {
  const folders = ['port', 'run', 'fash', 'event', 'contact'];

  // === 1️⃣  Folder open/close logic (unchanged) ===
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

  // === 2️⃣  Image pre-loading ===
  async function loadImages(folderPath, maxImages = 30) {
    const images = [];
    for (let i = 1; i <= maxImages; i++) {
      const url = `${folderPath}/img${i}.jpg`;
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) images.push(url);
        else break;
      } catch {
        break;
      }
    }
    return images;
  }

  const pathMap = {
    port: "/photos/portraits",
    run: "/photos/runway",
    fash: "/photos/fashion",
    event: "/photos/events",
    contact: "/photos/contact"
  };

  const folderImages = {};
  const currentIndex = {};

  for (const prefix of folders) {
    folderImages[prefix] = await loadImages(pathMap[prefix]);
    currentIndex[prefix] = 0;
    if (folderImages[prefix].length) {
      const img = document.getElementById(`${prefix}Photo`);
      if (img) img.src = folderImages[prefix][0];
    }
  }

  // === 3️⃣  Click image → next photo ===
  folders.forEach(prefix => {
    const img = document.getElementById(`${prefix}Photo`);
    if (!img) return;

    img.addEventListener('click', (e) => {
      e.stopPropagation(); // don’t close folder
      const imgs = folderImages[prefix];
      if (!imgs || imgs.length === 0) return;

      currentIndex[prefix] = (currentIndex[prefix] + 1) % imgs.length;
      img.src = imgs[currentIndex[prefix]];
    });
  });
});
