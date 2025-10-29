let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // স্ক্রল ডাউন হলে navbar hide হবে
    navbar.style.transform = "translateY(-100%)";
    navbar.style.transition = "transform 0.5s ease";
    navbar.style.backgroundColor = "white"; // background white
    navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)"; // soft shadow
    navbar.style.backdropFilter = "none"; // transparency remove
  } else if (currentScroll < lastScroll) {
    // স্ক্রল আপ হলে navbar show হবে
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "transform 0.5s ease";
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    navbar.style.backdropFilter = "none";
  }

  lastScroll = currentScroll;
});

