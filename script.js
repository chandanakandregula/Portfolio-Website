// Smooth Scroll for navbar links
const links = document.querySelectorAll('nav ul li a');

for(const link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({behavior:'smooth'});
    });
}

// Contact form submit
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent, Chandu!");
    this.reset();
});
