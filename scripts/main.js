/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


function celebrate() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

const themeToggle = document.getElementById("theme-toggle");

// Check if the user has a saved theme preference
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-theme");
}

// Toggle dark mode and save the preference
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  // Save the theme preference to localStorage
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
});

  const checkboxes = document.querySelectorAll('#tag-filters input[type="checkbox"]');
  const comboCards = document.querySelectorAll('.combo-card');

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const selectedTags = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

      comboCards.forEach(card => {
        const tags = card.dataset.tags.split(' ');
        const matches = selectedTags.every(tag => tags.includes(tag));

        card.style.display = selectedTags.length === 0 || matches ? '' : 'none';
      });
    });
  });

