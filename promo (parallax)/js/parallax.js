let parallaxItem2 = document.querySelector('.parallax__item-2');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    parallaxItem2.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 15 + 'px)';
});

let parallaxItem1 = document.querySelector('.parallax__item-1');
window.addEventListener('mousemove', function (e) {
    let x = e.clientY / window.innerWidth;
    let y = e.clientX / window.innerHeight;
    parallaxItem1.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 15 + 'px)';
});