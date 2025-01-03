export const easeOutSpring = (x: number): number => {
  const c4 = (2 * Math.PI) / 3;
  
  return x === 0
    ? 0
    : x === 1
    ? 1
    : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
};

export const animateValue = (
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
) => {
  const startTime = performance.now();
  
  const update = () => {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const value = start + (end - start) * easeOutSpring(progress);
    callback(value);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      callback(end);
    }
  };
  
  requestAnimationFrame(update);
};