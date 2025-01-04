// Get the navbar height - matches the h-16 Tailwind class
const NAVBAR_HEIGHT = 64;

/**
 * Scrolls to a section smoothly with navbar offset
 */
export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - NAVBAR_HEIGHT;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};