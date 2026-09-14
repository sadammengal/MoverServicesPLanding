const buttons = document.querySelectorAll("#variantSwitcher button");
const variants = document.querySelectorAll(".variant-container");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // 1. Remove active state from all buttons
    buttons.forEach(btn => {
      btn.classList.remove("active", "btn-warning", "shadow", "text-dark");
      btn.classList.add("btn-light", "text-secondary");
    });

    // 2. Add active state to the clicked button
    button.classList.remove("btn-light", "text-secondary");
    button.classList.add("active", "btn-warning", "shadow", "text-dark");

    // 3. Get the selected variant number
    const targetVariant = button.getAttribute("data-variant");

    // 4. Hide all variants, show the target one
    variants.forEach(variant => {
      if (variant.id === `variant-${targetVariant}`) {
        variant.classList.remove("d-none");
      } else {
        variant.classList.add("d-none");
      }
    });
  });
});
