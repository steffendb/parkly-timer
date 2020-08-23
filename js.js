const targetPanel = document.getElementById("vouchers");

document.addEventListener('click', function (event) {
  if (event.target.matches('.toggle')) {
    targetPanel.classList.toggle("open");
  }
}, false);