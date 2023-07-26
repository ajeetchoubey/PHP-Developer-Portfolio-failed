const toggleBtn = document.querySelector(".toggle_btn");
toggleBtn.onclick = () => {
    navBar = document.querySelector(".dropdown-menu");
    navBar.classList.toggle("active");
    toggleBtn.classList.toggle("active");
}