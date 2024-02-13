// FAQ ACCORDIAN
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".faq-content");

  faqContainer.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-group-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-group-body");
    const icon = groupHeader.querySelector("i");

    // Toggle Icon
    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");

    // Toggle FAQ body visibilit
    groupBody.classList.toggle("open");

    // Closing other open faq bodies
    const otherGroups = faqContainer.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-group-body");
        const otherIcon = otherGroup.querySelector(".faq-group-header i");

        otherGroupBody.classList.remove("open");
        otherIcon.classList.remove("fa-minus");
        otherIcon.classList.add("fa-plus");
      }
    });
  });
});

// MOBILE MENU
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () =>
    mobileMenu.classList.toggle("active")
  );
});
