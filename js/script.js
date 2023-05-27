// icone nav bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let selecions = document.querySelectorAll('selection');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    selecions.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offset - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            // ativa os links da navbar
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + '] ').classList.add('active');
            });
            //active sections for animation on scroll 
            sec.classList.add('show-animate');
            
        }
        //if want to use animation that repeats on scroll use this 
        else {
            sec.classList.remove('show-animate');
        }

    });

    let header = document.querySelector ('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links//

    menuIcon.classList.remove(bx-x);
    navbar.classList.remove('active');

}