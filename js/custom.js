window.addEventListener('scroll', function (e) {
    var scrolled = window.pageYOffset;
    const background = document.querySelector(".p-img");
    background.style.top = (scrolled * 0.2) + 'px');
});