export const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (srcs: string[]) => {
  const promises = srcs.map(src => preloadImage(src));
  return Promise.all(promises);
};