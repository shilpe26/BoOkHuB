const filterBtn = document.querySelector(".btn_for-bookhub");
const filterDrawer = document.querySelector(".filter-drawer");
filterDrawer.classList.add("invisible");

filterBtn.addEventListener("click", () => {
    if (filterBtn.innerHTML === '<i class="fa-solid fa-filter"></i>') {
        filterBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        filterBtn.innerHTML = '<i class="fa-solid fa-filter"></i>';
    }
    filterDrawer.classList.toggle("invisible");
});