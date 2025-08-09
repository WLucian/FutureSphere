const toggleMenu = document.getElementById("toggleMenu");
const closeMenu = document.getElementById("closeMenu");
const defaultMenu = document.getElementById("defaultMenu");
const mobileMenu = document.getElementById("mobileMenu");
const desktopNav = document.getElementById("desktopNav");

//mobile nav
toggleMenu.addEventListener("click", () => {
  // defaultMenu.classList.add("hidden");
  mobileMenu.classList.remove("translate-y-full", "opacity-o", "pointer-events-none");
  mobileMenu.classList.add("translate-y-0", "opacity-100");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("translate-y-full", "opacity-0");
  mobileMenu.classList.remove("translate-y-0", "opacity-100");

  setTimeout(() => {
    mobileMenu.classList.add("pointer-events-none");
    defaultMenu.classList.remove("hidden");
  }, 20);
});

//nav animation
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    desktopNav.classList.add("bg-[#1B152B]/20", "backdrop-blur-md", "shadow-md");
    defaultMenu.classList.add("bg-[#1B152B]/20", "backdrop-blur-md", "shadow-md");
    desktopNav.classList.remove("bg-[#1B152B]");
    defaultMenu.classList.remove("bg-[#1B152B]");
  } else {
    desktopNav.classList.remove("bg-[#1B152B]/20", "backdrop-blur-md", "shadow-md");
    defaultMenu.classList.remove("bg-[#1B152B]/20", "backdrop-blur-md", "shadow-md");
    desktopNav.classList.add("bg-[#1B152B]");
    defaultMenu.classList.add("bg-[#1B152B]");
  }
});

// function updateCount() {
//         countOut.textContent = count;
//         if (count > 0) countOut.style.color = "limegreen";
//         else if (count < 0) countOut.style.color = "red";
//         else countOut.style.color = "#00FFD1";
//       }

//       increaseBtn.addEventListener("click", () => {
//         count++;
//         updateCount();
//       });
//       decreaseBtn.addEventListener("click", () => {
//         count--;
//         updateCount();
//       });
//       resetBtn.addEventListener("click", () => {
//         count = 0;
//         updateCount();
//       });

// click();
