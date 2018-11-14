// STICKY NAVBAR
// select the navbar and make it constant variable and set how far down the navbar starts
const nav = document.querySelector('#navigation');
const navTop = nav.offsetTop;

// trigger sticky nav by adding css class to stylesheet when scrollY is greater than navTop
function stickyNavigation(){
    if(window.scrollY > navTop){
        // document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.getElementById("navigation").classList.add('fixed-nav');
        document.getElementById("navigation").classList.remove('fixed-nav-out');

    } else{
        document.getElementById("navigation").classList.remove('fixed-nav')
        document.getElementById("navigation").classList.add('fixed-nav-out');
    }
}

window.addEventListener('scroll', stickyNavigation);

