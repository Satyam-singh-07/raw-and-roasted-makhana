/**
 * Global Theme Configuration for Raw & Roasted Makhana
 */

const themes = {
  default: {
    '--primary': '#FF5722',
    '--secondary': '#FFC107',
    '--accent': '#4CAF50',
    '--dark': '#212121',
    '--light': '#F5F5F5'
  }
};

function applyTheme(themeName = 'default') {
  const theme = themes[themeName] || themes.default;
  const root = document.documentElement;
  
  Object.keys(theme).forEach(property => {
    root.style.setProperty(property, theme[property]);
  });
  
  localStorage.setItem('selected-theme', themeName);
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selected-theme') || 'default';
  applyTheme(savedTheme);
});
