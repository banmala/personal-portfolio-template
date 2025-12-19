window.onload=()=>{
  toggleNavbar();
  toggleMobileNav();
  responsingBgWithMouseMovement();
  navMobile();
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

// Setup Mobile Navigation Menu Items
const navMobile = () =>{
  const navMenuItems = document.getElementById('nav-menu-items');
  const mobileMenu = document.getElementById('mobile-menu');
  const children = navMenuItems.children;
  for(let i=0; i<children.length; i++){
    const menuItem = document.createElement('a');
    menuItem.href = children[i].href;
    menuItem.className = 'block px-4 py-2 text-5xl';
    menuItem.textContent = children[i].textContent;
    mobileMenu.appendChild(menuItem);
  }
}

// Setup Mobile Navigation Toggle
const toggleMobileNav = () => {
    const navToggler = document.querySelector('#nav-toggler');
    const navMenu = document.querySelector('#mobile-menu');
    const navLinks = document.querySelectorAll('#mobile-menu a');
    navToggler.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
    // togglerClick function
    function togglerClick() {
        if(navMenu.classList.contains('opacity-0')) {
          navMenu.classList.remove('opacity-0');
          navMenu.classList.add('opacity-100');
          navToggler.innerHTML = '<i class="fas fa-x text-2xl"></i>';
        }else{
          navMenu.classList.remove('opacity-100');
          navMenu.classList.add('opacity-0');
          navToggler.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        }
    }
    // navLinkClick function
    function navLinkClick() {
        if(navMenu.classList.contains('opacity-100')) {
            navToggler.click();
        }
    }
    // Hide mobile menu on scroll
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 50 && navMenu.classList.contains('opacity-100')) {
            navMenu.classList.remove('opacity-100');
            navMenu.classList.add('opacity-0');
            navToggler.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        }
    });

    navToggler.addEventListener('click', togglerClick);
    navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// Setup Background Animation with Mouse Movement
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