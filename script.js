// Menu show Y hidden
const navMenu = document.getElementById('nav-menu'),
      toggleMenu = document.getElementById('nav-toggle'),
      closeMenu = document.getElementById('nav-close');

// Show
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

// Hidden
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
});

// Remove menu
const navLink = document.querySelectorAll('.nav__link');

function linkAction()
{
    navMenu.classList.remove('show');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll ections active link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active')
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active')
        }
    })
}
// script.js

// Function to show the toast message
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';

    // Hide the toast message after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        toast.style.display = 'none';
    }, 3000);
}

// Example usage:
// Call showToast() function wherever you want to trigger a toast message
// For example, inside a form submission or any event handler

// Example:
// showToast('Message sent successfully!');
