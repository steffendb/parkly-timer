const modal = document.getElementById("new");

document.addEventListener('click', function (event) {
  if (event.target.matches('.toggle-modal')) {
    modal.classList.toggle("open");
  }
}, false);