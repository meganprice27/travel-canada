function findOutMore() {
  let license = prompt("Do you have a drivers license?");
  license = license.toLowerCase();
  if (license === "yes") {
    alert("You are able to drive in Canada! 🎉");
    let name = prompt("Please enter your name");
    let email = prompt("Please provide your email");
    alert(`Thank you ${name}, we will be in touch with more road trip info! 🚗`);
  } else {
    alert("Sorry, you aren't able to drive in Canada 😔");
  }
}
let moreButton = document.querySelector("button");

moreButton.addEventListener("click", findOutMore);
