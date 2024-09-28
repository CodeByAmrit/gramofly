// Select the toggle button and the menu
const toggleButton = document.querySelector('[data-collapse-toggle="mega-menu"]');
const menu = document.getElementById('mega-menu');

// Toggle the menu visibility when the button is clicked
toggleButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Select the Services toggle button and the dropdown
const servicesToggleButton = document.getElementById('mega-menu-dropdown-button');
const servicesDropdown = document.getElementById('mega-menu-dropdown');

// Toggle the submenu when the Services button is clicked
servicesToggleButton.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the click from propagating to the document
  servicesDropdown.classList.toggle('hidden'); // Show/hide the submenu
});

// Optionally close the dropdown if you click outside of it
document.addEventListener('click', (event) => {
  const isClickInside = servicesToggleButton.contains(event.target) || servicesDropdown.contains(event.target);
  if (!isClickInside) {
    servicesDropdown.classList.add('hidden'); // Close the submenu if clicked outside
  }
});
