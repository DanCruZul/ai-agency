export const preloadCriticalImages = async () => {
  const criticalImages = [
    "https://cdn.prod.website-files.com/5db1c0d5ca3871e8fd1a7b66/5f63b11306f1836426846360_0*6_IW_DdVcs4J1dmx.png",
    "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/google.svg",
    "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/microsoft.svg",
    "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazon.svg",
    "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/meta.svg",
  ];

  try {
    await Promise.all(
      criticalImages.map((src) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        document.head.appendChild(link);
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = reject;
        });
      })
    );
  } catch (error) {
    console.error("Error preloading images:", error);
  }
};

export const lazyLoadOptions = {
  root: null,
  rootMargin: "50px",
  threshold: 0.1,
};
