function burgerMenu(selector) {
    const menu = $(selector)
    const button = menu.find('.burger-menu__button')
    const links = menu.find('.burger-menu__link')
    const overlay = menu.find('.burger-menu__overlay')

    button.on('click', (e) => {
        e.preventDefault()
        toggleMenu()
    })

    links.on('click', () => toggleMenu())
    overlay.on('click', () => toggleMenu())

    function toggleMenu() {
        menu.toggleClass('burger-menu-active')

        if (menu.hasClass('burger-menu-active')) {
            // $('body').css('overflow', 'hidden')
            $('.burger-menu__overlay').fadeIn(200)
        } else {
            // $('body').css('overflow', 'visible')
            $('.burger-menu__overlay').fadeOut(100)
        }

        // if (button.is(':visible')) {
        //     button.hide(100)
        // } else if (button.is(':hidden')) {
        //     button.show();
        // }
    }
}

burgerMenu('.burger-menu');