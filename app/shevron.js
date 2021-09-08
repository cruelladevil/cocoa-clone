const shevronUp = document.querySelectorAll(".shevron-up");
const shevronDown = document.querySelectorAll(".shevron-down");

for (let i = 0; i < shevronUp.length; i++) {
  shevronUp[i].addEventListener("click", hideUserComponent);
  shevronDown[i].addEventListener("click", showUserComponent);
}

function hideUserComponent(event) {
  const grandParentNode = event.target.parentNode.parentNode;
  const shevronUp = event.target;
  const shevronDown = grandParentNode.querySelector(".shevron-down");
  shevronUp.style.display = "none";
  shevronDown.style.display = "block";
  const userComponent = grandParentNode.querySelector(".user-component-wrap");
  userComponent.style.display = "none";
}
function showUserComponent(event) {
  const grandParentNode = event.target.parentNode.parentNode;
  const shevronUp = grandParentNode.querySelector(".shevron-up");
  const shevronDown = event.target;
  shevronUp.style.display = "block";
  shevronDown.style.display = "none";
  const userComponent = grandParentNode.querySelector(".user-component-wrap");
  userComponent.style.display = "block";
}
