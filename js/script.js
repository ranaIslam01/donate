// Button 
const historyBtn = document.getElementById('history-btn');
const donationBtn = document.getElementById('donation-btn');

// Container
const donationContainer = document.getElementById('donation-container');
const historyContainer = document.getElementById('history-container');
// Container hidden start 
historyBtn.addEventListener('click', () => {
  donationContainer.classList.add('hidden');
  historyContainer.classList.remove('hidden');

  historyBtn.className = "px-5 py-2 bg-custom-green text-black font-semibold rounded-md text-sm";
  donationBtn.className = "px-5 py-2 text-gray-500 font-semibold rounded-md border border-gray-300 text-sm";
});

donationBtn.addEventListener('click', (e) => {
  e.preventDefault()
  donationContainer.classList.remove('hidden');
  historyContainer.classList.add('hidden');

  donationBtn.className = "px-5 py-2 bg-custom-green text-black font-semibold rounded-md text-sm";
  historyBtn.className = "px-5 py-2 text-gray-500 font-semibold rounded-md border border-gray-300 text-sm";
});
// Container hidden end
