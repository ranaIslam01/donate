document.getElementById("donate-now-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const mainAmount = document.getElementById("main-amount").innerText;
  const inputAmount = document.getElementById("input-amount").value;
  const donateAmount = document.getElementById("donate-amount").innerText;

  const currentAmount = parseFloat(mainAmount);
  const currentInput = parseFloat(inputAmount);
  const currentDonate = parseFloat(donateAmount);

  if (
    isNaN(currentInput) ||
    inputAmount === "" ||
    currentInput <= 0 ||
    currentInput > currentAmount
  ) {
    alert("Somthing Wrong Please try again");
  } else {
    const newCurrentAmount = currentAmount - currentInput;
    const newDonateAmount = parseFloat(currentDonate) + parseFloat(inputAmount);

    document.getElementById("main-amount").innerText = newCurrentAmount;
    document.getElementById("donate-amount").innerText = newDonateAmount;
    openModal();
    const history = document.getElementById("donate-history");
    const div = document.createElement("div");
    div.innerHTML = `<div class= "flex justify-between items-center p-4 border rounded-xl shadow-md">
                        <div>
                            <p>Donate for Flood at Noakhali, Bangladesh.</p> 
                            <p>${new Date().toLocaleString()}</p>
                        </div>
                        <p>${currentInput} Taka </p>
                    </div>
                    `;
    history.prepend(div);
    document.getElementById("input-amount").value = "";
  }
});
