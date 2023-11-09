// var acc = document.getElementsByClassName("accordion-container");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
// function readHomePage() {}

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".acc-item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".acc-heading");
    const content = item.querySelector(".acc-content");
    const chevron = item.querySelector(".acc-chevron");

    title.addEventListener("click", () => {
      const isExpanded = content.style.display === "block";

      //   content.style.display =
      //     content.style.display === "none" ? "block" : "none";
      content.style.display = isExpanded ? "none" : "block";

      chevron.style.transform = isExpanded ? "rotate(180deg)" : "rotate(0deg)";
    });
  });
});

// Simulate a click event on the "DESCRIPTION" button when the page loads
document.addEventListener("DOMContentLoaded", function () {
  const descriptionButton = document.querySelector(
    'button[data-option="description"]'
  );
  descriptionButton.click();
});

document.addEventListener("DOMContentLoaded", function () {
  // Initially, show the content of the "DESCRIPTION" button
  selectOption("description");
});

function selectOption(option) {
  // Get all option containers
  const optionContainers = document.querySelectorAll(".option-content");

  // Hide all option containers
  optionContainers.forEach((container) => {
    container.style.display = "none";
  });

  // Show the content of the selected button
  const selectedOption = document.getElementById(option);
  selectedOption.style.display = "block";

  // Reset button styles
  const buttons = document.querySelectorAll(".options");
  buttons.forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });

  // Set the style for the selected button
  const selectedButton = document.querySelector(
    `button[data-option="${option}"]`
  );
  selectedButton.style.backgroundColor = "#3c422e";
  selectedButton.style.color = "white";
}

// window.onscroll = function () {
//   const mainNav = document.getElementById('roto');
//   // const upbtn = document.getElementById("upBtn");
//   if (mainNav) {
//       if (window.pageYOffset > 1) {
//           mainNav.classList.add("active");
//           // upbtn.classList.add("active");
//       } else {
//           mainNav.classList.remove("active");
//           // upbtn.classList.remove("active");
//       }
//   }
// }