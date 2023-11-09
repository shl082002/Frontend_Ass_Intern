
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

document.addEventListener("DOMContentLoaded", function () {
  const descriptionButton = document.querySelector(
    'button[data-option="description"]'
  );
  descriptionButton.click();
});

document.addEventListener("DOMContentLoaded", function () {
  selectOption("description");
});

function selectOption(option) {
  const optionContainers = document.querySelectorAll(".option-content");

  optionContainers.forEach((container) => {
    container.style.display = "none";
  });
  const selectedOption = document.getElementById(option);
  selectedOption.style.display = "block";

  const buttons = document.querySelectorAll(".options");
  buttons.forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
  const selectedButton = document.querySelector(
    `button[data-option="${option}"]`
  );
  selectedButton.style.backgroundColor = "#3c422e";
  selectedButton.style.color = "white";
}

// document.addEventListener("DOMContentLoaded", function () {
//   const firstbutton = document.querySelector(
//     'button[data-option="description"]'
//   );
//   firstbutton.click();
// });

// document.addEventListener("DOMContentLoaded", function () {
//   selectOptionbtn("description");
// });

function selectOptionbtn(option) {
  const buttons = document.querySelectorAll(".quantity-subbox");
  buttons.forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
  const selectedButton = document.querySelector(
    `button[data-option="${option}"]`
  );
  selectedButton.style.backgroundColor = "#9eef80";
}
