export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  // Get the element's position relative to the viewport
  const rect = element.getBoundingClientRect();
  
  // If we're already at the section (within 100px), scroll to top
  // Otherwise scroll to the section
  if (Math.abs(rect.top) < 100) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};