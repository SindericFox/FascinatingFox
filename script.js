let text = document.getElementById('Beauty');
let treeLeft = document.getElementById('tree-lf');
let treeRight = document.getElementById('tree-rg');
let gateLeft = document.getElementById('gate-lf');
let gateRight = document.getElementById('gate-rg');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.2 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateRight.style.left = value * -0.35 + 'px';
    gateLeft.style.left = value * 0.35 + 'px';
});

gsap.to(".CompanyName", {
    x:100,
    duration:8,
    delay: 0.2
})
gsap.to(".CompanyName", {
    x: -100,
    duration: 8,
    delay: 8.2
})

gsap.to(".CompanyName", {
    x: 100,
    duration: 8,
    delay: 16.6
})

gsap.to(".CompanyName", {
    x: -100,
    duration: 8,
    delay: 24.4
})

gsap.to(".Main", {
    y: 30,
    duration: 8,
    delay: 0.2
})

gsap.to(".Tips", {
    y: 30,
    duration: 8,
    delay: 0.2
})

gsap.to(".Interesting", {
    y: 30,
    duration: 8,
    delay: 0.2
})

gsap.to(".Contact", {
    y:30,
    duration: 8,
    delay: 0.2
})