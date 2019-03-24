
// window.addEventListener('scroll', function (e) {
//     var scrolled = window.pageYOffset;
//     const background = document.querySelector(".p-img");
//     background.style.top = - (scrolled * 0.2) + 'px';
// });

window.addEventListener('scroll', function (e) {
    var scrolled = window.pageYOffset;
    const background = document.querySelector(".p-img");
    var coords = '0% '+ (- (scrolled *0.2) + 'px');
    background.style.top  = coords;
});