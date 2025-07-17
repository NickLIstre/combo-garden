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

function applyTheme(isDark) {
  document.body.classList.toggle("dark-theme", isDark);
  document.documentElement.classList.toggle("dark-theme", isDark);

  if (isDark) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
}

// Apply saved preference on page load
applyTheme(localStorage.getItem("theme") === "dark");

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-theme");
  applyTheme(isDark);
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

  function toggleFilterPanel() {
  const panel = document.getElementById('tag-filters');
  const arrow = document.getElementById('arrow');
  panel.classList.toggle('show');
  arrow.innerHTML = panel.classList.contains('show') ? '&#x25B2;' : '&#x25BC;';
}

