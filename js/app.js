window.addEventListener("DOMContentLoaded", () => {
  const mobileNavbar = document.querySelector(".mobile-navbar"),
    closeIcon = document.querySelector(".m-n-close"),
    menuIcon = document.querySelector(".header-menu-btn");

  menuIcon.addEventListener("click", () => {
    mobileNavbar.classList.add("active");
  });
  closeIcon.addEventListener("click", () => {
    mobileNavbar.classList.remove("active");
  });

  const customerMessages = document.querySelectorAll(".customer-message");
  const navigationDots = document.querySelectorAll(".navigation-dot");

  function showMessage(idx) {
    customerMessages.forEach((cM) => (cM.style.display = "none"));
    customerMessages[idx].style.display = "flex";
  }
  showMessage(0);

  navigationDots.forEach((nD, idx) => {
    nD.addEventListener("click", () => {
      showMessage(idx);
      navigationDots.forEach((nD2, idx2) => {
        if (nD == nD2) {
          customerMessages[idx2].classList.add("blur-animation");
          navigationDots[idx2].classList.add("active");
        } else {
          customerMessages[idx2].classList.remove("blur-animation");
          navigationDots[idx2].classList.remove("active");
        }
      });
    });
  });
});
