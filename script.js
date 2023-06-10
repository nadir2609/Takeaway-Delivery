const burgerNav = document.querySelectorAll('.burger__nav');

burgerNav.forEach(function (item) {
    item.addEventListener('click', function () {
        burgerNav.forEach(function (item) {
            item.classList.remove('active')
        })

        item.classList.add('active')
    })
});