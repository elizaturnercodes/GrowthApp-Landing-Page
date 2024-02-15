// /////////////////
// FAQ ACCORDIAN
// /////////////////
// Event when content is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Finding the FAQ container, class is 'faq-content'
  const faqContainer = document.querySelector(".faq-content");

  // Click event for the FAQ container
  faqContainer.addEventListener("click", (e) => {
    // Finding closest ancestor with the class of 'faq-group-container'.
    const groupHeader = e.target.closest(".faq-group-header");
    // IF there isn't an acestor, exit the function.
    if (!groupHeader) return;
    // Finding the parent element for the header of the FAQ group.
    const group = groupHeader.parentElement;
    // Find the FAQ group body associated with the clicked header
    const groupBody = group.querySelector(".faq-group-body");
    // Find the icon element within the clicked header
    const icon = groupHeader.querySelector("i");

    // Toggle the icon class between "fa-plus" and "fa-minus"
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle the visibility of the FAQ group body
    groupBody.classList.toggle("open");

    // Close other open FAQ group bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      // Skip the current group
      if (otherGroup !== group) {
        // Find the FAQ group body and icon within each other group
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        // Close the FAQ group body and change the icon to "fa-plus"
        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

// ////////////////////
// MOBILE MENU
// ////////////////////
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Find the hamburger button and mobile menu elements
  const hamburgerButton = document.querySelector(".hamburger-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Add a click event listener to the hamburger button
  hamburgerButton.addEventListener("click", () =>
    // Toggle the "active" class on the mobile menu
    mobileMenu.classList.toggle("active")
  );
});
