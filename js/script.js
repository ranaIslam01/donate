// Button
const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");

// Container
const donationContainer = document.getElementById("donation-container");
const historyContainer = document.getElementById("history-container");

// Container hidden start
historyBtn.addEventListener("click", () => {
  donationContainer.classList.add("hidden");
  historyContainer.classList.remove("hidden");

  historyBtn.className =
    "px-5 py-2 bg-custom-green text-black font-semibold rounded-md text-sm";
  donationBtn.className =
    "px-5 py-2 text-gray-500 font-semibold rounded-md border border-gray-300 text-sm";
});

donationBtn.addEventListener("click", (e) => {
  e.preventDefault();
  donationContainer.classList.remove("hidden");
  historyContainer.classList.add("hidden");

  donationBtn.className =
    "px-5 py-2 bg-custom-green text-black font-semibold rounded-md text-sm";
  historyBtn.className =
    "px-5 py-2 text-gray-500 font-semibold rounded-md border border-gray-300 text-sm";
});
// Container hidden end

// Section Start 
const homeContainer = document.getElementById('home-container')
const blogContainer = document.getElementById('blog-container');
const singlePageBlog = document.getElementById('single-page-blog');

const blog = document.getElementById("blog");
const home = document.getElementById('home');

blog.addEventListener("click", () => {
 homeContainer.classList.add("hidden");
 blogContainer.classList.remove("hidden");
 singlePageBlog.classList.add('hidden');
  blog.className =
    "px-5 py-2 bg-custom-green text-black font-semibold rounded-md text-sm";
  home.className =
    "px-5 py-2 text-gray-500 font-semibold rounded-md border border-gray-300 text-sm";

});

home.addEventListener('click', () => {
  blogContainer.classList.add('hidden');
  homeContainer.classList.remove('hidden');
  singlePageBlog.classList.add('hidden');
    home.className =
    "px-5 py-2 bg-custom-green text-black font-semibold rounded-md text-sm";
  blog.className =
    "px-5 py-2 text-gray-500 font-semibold rounded-md border border-gray-300 text-sm";
})


const buttons = document.querySelectorAll(".read-more");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    homeContainer.classList.add('hidden');
    blogContainer.classList.add('hidden');
    singlePageBlog.classList.remove('hidden');
  })
})


// Section End 


//Navbar start
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

//Navbar end

