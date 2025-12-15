window.onload=()=>{
  toggleNavbar();
  toggleMobileNav();
  responsingBgWithMouseMovement();
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

const responsingBgWithMouseMovement = () => {
  var xpFirst = 0, mouseX = 0;
  var ypFirst = 0, mouseY = 0;
  var xpSecond = 0, mouseX = 0;
  var ypSecond = 0, mouseY = 0;
  var xpThird = 0, mouseX = 0;
  var ypThird = 0, mouseY = 0;

  const cursorFollowerFirst = document.querySelector(".cursorFollowerFirst");
  const cursorFollowerSecond= document.querySelector(".cursorFollowerSecond");
  const cursorFollowerThird = document.querySelector(".cursorFollowerThird");

  document.addEventListener("mousemove", (e) => {
    mouseX = e.screenX;
    mouseY = e.screenY;
  });

  setInterval(function () {
    xpFirst += (mouseX - xpFirst) / 60;
    ypFirst += (mouseY - ypFirst) / 60;

    cursorFollowerFirst.style.left = xpFirst + "px";
    cursorFollowerFirst.style.top = ypFirst + "px";
  }, 20);

  setInterval(function () {
    xpSecond += (mouseX - xpSecond) / 80;
    ypSecond += (mouseY - ypSecond) / 80;

    cursorFollowerSecond.style.left = xpSecond + "px";
    cursorFollowerSecond.style.top = ypSecond + "px";
  }, 20);

  setInterval(function () {
    xpThird += (mouseX - xpThird) / 85;
    ypThird += (mouseY - ypThird) / 85;

    cursorFollowerThird.style.left = xpThird + "px";
    cursorFollowerThird.style.top = ypThird + "px";
  }, 20);
}