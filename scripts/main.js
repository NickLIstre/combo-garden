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

