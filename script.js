// Select a rating from the form
// Submit button
// Show and populate Thank You div
const firstDiv = document.querySelector(".survey");
const secondDiv = document.querySelector(".thankyou");
const ratingSelection = document.querySelector(".form");

ratingSelection.addEventListener("submit", function(e) {
  e.preventDefault();
  const selector = "input[name=rating-group]:checked";
    const checkedInput = document.querySelector(selector);

        // User needs to select an Option in order to go on
        if(checkedInput !== null){
        const confirm = document.querySelector(".confirm");
        confirm.textContent = "You selected " + checkedInput.getAttribute("value") + " out of 5"
        firstDiv.classList.add("hidden");
        secondDiv.classList.remove("hidden");
    }

})