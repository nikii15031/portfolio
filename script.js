let menu = docoument.querySelector('#menu-icon');
let navbar = docoument.querySelector('.navbar');

menu.onclick = () => {
    menu.ClassList.toggle('bx-x');
    navbar.ClassList.toggle('active');
};

window.onscroll = () => {
    menu.ClassList.remove('bx-x');
    navbar.ClassList.remove('active');
};

const sr =scrollReveal ({
    distance: '60px',
    duration: 2500,
    reset: true
})

sr.reveal('.home-text',{delay:200,origin: 'top'})
sr.reveal('.images-img1',{delay:400,origin: 'top'})
sr.reveal('.about, .services, .cta, .resume, .contact, .copyright',{delay:200, origin:'top'})