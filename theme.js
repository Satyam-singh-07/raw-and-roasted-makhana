/**
 * Global Configuration for Shree Lotus
 */

const config = {
  businessName: 'Poppinuts',
  theme: {
    default: {
      '--primary': '#4B2E4A',
      '--secondary': '#D8D2C8',
      '--accent': '#C9A46C',
      '--dark': '#3A2F2A',
      '--light': '#F5F1E8'
    }
  }
};

function applyTheme(themeName = 'default') {
  const theme = config.theme[themeName] || config.theme.default;
  const root = document.documentElement;
  
  Object.keys(theme).forEach(property => {
    root.style.setProperty(property, theme[property]);
  });
  
  localStorage.setItem('selected-theme', themeName);
}

function updateGlobalContent() {
  // Update elements with class 'business-name'
  const nameElements = document.querySelectorAll('.business-name');
  nameElements.forEach(el => {
    el.textContent = config.businessName;
  });

  // Update alt text for logos if they are generic
  const logos = document.querySelectorAll('.logo img');
  logos.forEach(img => {
    img.alt = config.businessName + ' Logo';
  });

  // Optionally update title if it contains the old name or a placeholder
  if (document.title.includes('Raw & Roasted')) {
    document.title = document.title.replace('Raw & Roasted Makhana', config.businessName);
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selected-theme') || 'default';
  applyTheme(savedTheme);
  updateGlobalContent();
  
  // Since header/footer are loaded dynamically, we need to watch for those changes
  const observer = new MutationObserver((mutations) => {
    updateGlobalContent();
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
});
