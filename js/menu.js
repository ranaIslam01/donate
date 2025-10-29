const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const list = document.getElementById("list");

// Function to close menu
const closeMenu = () => {
  list.style.right = "-100%";
  menuBtn.classList.remove("hidden");
  closeBtn.classList.add("hidden");
  list.style.transition = "0.5s";
};

// Open menu
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  menuBtn.classList.add("hidden");
  closeBtn.classList.remove("hidden");
  list.style.right = "0%";
  list.style.transition = "0.5s";
});

// Close menu
closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  closeMenu();
});

// Click outside menu → close menu
document.addEventListener("click", (e) => {
  if (!list.contains(e.target) && !menuBtn.contains(e.target) && !closeBtn.contains(e.target)) {
    closeMenu();
  }
});

// Menu items click → close menu
// ধরলাম list এর ভিতরে button বা a ট্যাগ আছে
list.querySelectorAll("button, a").forEach((item) => {
  item.addEventListener("click", () => {
    closeMenu();
  });
});
