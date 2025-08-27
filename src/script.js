console.log("Script loaded");

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

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");
const testimonialRole = document.getElementById("testimonialRole");

const carousel = document.getElementById("carousel");
const items = document.querySelectorAll(".item");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const testimonials = [
  {
    img: "./images/member-image-(6).png",
    text: "Sarah has redefined user experience in mobile banking.",
    name: "Sarah Lee",
    role: "Head of UX Bankly",
  },
  {
    img: "./images/member-image-(5).png",
    text: "Jane’s leadership transformed the company into a market leader.",
    name: "Jane Doe",
    role: "CTO BrightTech",
  },
  {
    img: "./images/member-image-(4).png",
    text: "Michael’s vision has helped startups scale globally.",
    name: "Michael Scott",
    role: "Founder DunderTech",
  },
  {
    img: "./images/member-image.png",
    text: "During a train ride, a moment of inspiration struck Vasily. He wished for a convenient study tool on his phone to help him prepare for the LSAT. However, such an app didn't exist at the time. Determined to overcome this hurdle, Vasily took matters into his own hands and developed one of the earliest and most comprehensive LSAT apps on the market. The app quickly gained popularity, becoming the #1 paid LSAT app for over a year.",
    name: "John Wick",
    role: "CEO FutureSphere",
  },
  {
    img: "./images/member-image-(1).png",
    text: "Alex has built sustainable solutions for energy efficiency.",
    name: "Alex Johnson",
    role: "COO GreenCore",
  },
  {
    img: "./images/member-image-(2).png",
    text: "Priya is passionate about AI ethics and innovation.",
    name: "Priya Patel",
    role: "AI Lead NeuralNet",
  },
  {
    img: "./images/member-image-(3).png",
    text: "David’s mentorship has guided hundreds of young entrepreneurs.",
    name: "David Kim",
    role: "Angel Investor",
  },
];

let activeIndex = 3; // start from the big center image in your HTML

function updateCarousel() {
  items.forEach((img, i) => {
    const index = (activeIndex + i - 3 + testimonials.length) % testimonials.length;
    img.src = testimonials[index].img;

    let width, height;

    // Mobile first (<768px)b
    if (window.innerWidth < 768) {
      if (i === 3) {
        width = 110;
        height = 110;
        img.parentElement.style.zIndex = "40";
      } else if (i === 2 || i === 4) {
        width = 90;
        height = 90;
        img.parentElement.style.zIndex = "30";
      } else if (i === 1 || i === 5) {
        width = 75;
        height = 75;
        img.parentElement.style.zIndex = "20";
      } else {
        width = 65;
        height = 65;
        img.parentElement.style.zIndex = "10";
      }

      // Tablet (<1024px)
    } else if (window.innerWidth < 1024) {
      if (i === 3) {
        width = 180;
        height = 180;
        img.parentElement.style.zIndex = "40";
      } else if (i === 2 || i === 4) {
        width = 140;
        height = 140;
        img.parentElement.style.zIndex = "30";
      } else if (i === 1 || i === 5) {
        width = 120;
        height = 120;
        img.parentElement.style.zIndex = "20";
      } else {
        width = 100;
        height = 100;
        img.parentElement.style.zIndex = "10";
      }

      // Desktop (≥1024px)
    } else {
      if (i === 3) {
        width = 315.09;
        height = 315.09;
        img.parentElement.style.zIndex = "40";
      } else if (i === 2 || i === 4) {
        width = 222.47;
        height = 222.47;
        img.parentElement.style.zIndex = "30";
      } else if (i === 1 || i === 5) {
        width = 192.87;
        height = 192.87;
        img.parentElement.style.zIndex = "20";
      } else {
        width = 179.51;
        height = 179.51;
        img.parentElement.style.zIndex = "10";
      }
    }

    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
  });

  const t = testimonials[activeIndex];
  testimonialText.textContent = t.text;
  testimonialName.textContent = t.name;
  testimonialRole.textContent = t.role;
}

leftBtn.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  updateCarousel();
});

rightBtn.addEventListener("click", () => {
  activeIndex = (activeIndex + 1) % testimonials.length;
  updateCarousel();
});

updateCarousel();
