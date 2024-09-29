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


const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check the initial theme preference
if (localStorage.getItem('theme') === 'dark') {
  htmlElement.classList.add('dark');
  document.getElementById("theme-svg").style.color = "white";
} else {
  htmlElement.classList.remove('dark');
  document.getElementById("theme-svg").style.color = "black";
}

// Toggle the theme on button click
themeToggleBtn.addEventListener('click', function () {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    document.getElementById("theme-svg").style.color = "black";
    localStorage.setItem('theme', 'light');
  } else {
    htmlElement.classList.add('dark');
    document.getElementById("theme-svg").style.color = "white";
    localStorage.setItem('theme', 'dark');
  }
});

window.onload = function () {
  const scrollDiv = document.getElementById("scrollDiv");
  let scrollStep = 2; // Speed of the scroll (pixels)

  function scrollContent() {
    scrollDiv.scrollLeft += scrollStep;

    // If reached the end, reset to the first card
    if (
      scrollDiv.scrollLeft + scrollDiv.clientWidth >=
      scrollDiv.scrollWidth
    ) {
      scrollDiv.scrollLeft = 0;
    }
  }

  // Auto scroll the div in a loop
  setInterval(scrollContent, 20); // Adjust the interval for smoother or faster scrolling
};