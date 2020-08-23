const targetPanel = document.getElementById("vouchers");

targetPanel.classList.toggle("open");

document.addEventListener(
  "click",
  function (event) {
    if (event.target.matches(".toggle")) {
      targetPanel.classList.toggle("open");
    }
  },
  false
);
