const chevronUp = document.querySelectorAll(".chevron-up");
const chevronDown = document.querySelectorAll(".chevron-down");

for (let i = 0; i < chevronUp.length; i++) {
  chevronUp[i].addEventListener("click", hideUserComponent);
  chevronDown[i].addEventListener("click", showUserComponent);
}

function hideUserComponent(event) {
  const grandParentNode = event.target.parentNode.parentNode;
  const chevronUp = event.target;
  const chevronDown = grandParentNode.querySelector(".chevron-down");
  chevronUp.style.display = "none";
  chevronDown.style.display = "block";
  const userComponent = grandParentNode.querySelector(".user-component-wrap");
  userComponent.style.display = "none";
}
function showUserComponent(event) {
  const grandParentNode = event.target.parentNode.parentNode;
  const chevronUp = grandParentNode.querySelector(".chevron-up");
  const chevronDown = event.target;
  chevronUp.style.display = "block";
  chevronDown.style.display = "none";
  const userComponent = grandParentNode.querySelector(".user-component-wrap");
  userComponent.style.display = "block";
}
