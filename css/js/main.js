const icon = document.querySelector('.icon')
const bars_menu = document.querySelector('.bars_menu')
const cris = document.querySelector('.cris')

icon.addEventListener('click', function () {
    bars_menu.style.display = "block"
    icon.style.display = "none"
    cris.style.display = "block"
});
cris.addEventListener('click', function () {
    bars_menu.style.display = "none"
    icon.style.display = "block"
    cris.style.display = "none"
});



