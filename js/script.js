window.onload=()=>{
  toggleNavbar();
  toggleMobileNav();
}

// Setup Navbar Scroll Effect
const toggleNavbar = () => {
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('mainNavbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
};

const toggleMobileNav = () => {
    const navToggler = document.querySelector('#nav-toggler');
    const navMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a');
    // togglerClick function
    function togglerClick() {
        if(navMenu.classList.contains('opacity-0')) {
        navMenu.classList.remove('opacity-0');
        navMenu.classList.add('opacity-100');
        }else{
        navMenu.classList.remove('opacity-100');
        navMenu.classList.add('opacity-0');
        }
    }
    // navLinkClick function
    function navLinkClick() {
        if(navMenu.classList.contains('opacity-100')) {
            navToggler.click();
        }
    }
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 50 && navMenu.classList.contains('opacity-100')) {
            navMenu.classList.remove('opacity-100');
            navMenu.classList.add('opacity-0');
        }
    });

    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}