const menuIcon = document.querySelector('#menuIcon')
const menu = document.querySelector('#menu')
const menuElements = document.querySelectorAll('.nav__menu-element')

menuIcon.addEventListener('click', toggleMenu)
menuElements.forEach(element => {
    element.addEventListener('click', showSubmenu)
})

function toggleMenu() {
    if(menuIcon.src.includes('icon-close.svg')) {
        menuIcon.src = menuIcon.src.replace('icon-close.svg', 'icon-hamburger.svg')
    }
    else if (menuIcon.src.includes('icon-hamburger.svg')) {
        menuIcon.src = menuIcon.src.replace('icon-hamburger.svg', 'icon-close.svg')
    }
    menu.classList.toggle('active')
}

function showSubmenu(e) {
    const arrowIcon = e.target.children[0]
    const submenu = e.target.nextElementSibling

    arrowIcon.classList.toggle('rotated')
    submenu.classList.toggle('active')
}