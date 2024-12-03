const roseImage = document.querySelector("#roseImage");

roseImage.onclick = () => {
  const mySrc = roseImage.getAttribute("src");
  if (mySrc === "images/rose.png") {
    roseImage.setAttribute("src", "images/rose2.png");
  } else {
    roseImage.setAttribute("src", "images/rose.png");
  }
};

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
