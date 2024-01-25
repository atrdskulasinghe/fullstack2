document.addEventListener("DOMContentLoaded", function () {
    // Select both menu buttons
    const menuBtns = document.querySelectorAll(".menu-btn");
    const pageContent = document.querySelector(".page-content");
  
    // Add click event listeners to each menu button
    menuBtns.forEach(function (menuBtn) {
      menuBtn.addEventListener("click", function (event) {
        event.preventDefault();
        pageContent.classList.toggle("sidebar-open");
  
        // Toggle body overflow
        document.body.style.overflow = pageContent.classList.contains("sidebar-open") ? "hidden" : "auto";
      });
    });
  });
  