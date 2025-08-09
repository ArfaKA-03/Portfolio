const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section = document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');
            navlink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')

            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}
document.getElementById("resume-btn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "Resume.pdf.pdf"; // path to your PDF
    link.download = "Resume.pdf"; // download file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
//contact form- alert saying form submitted
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop default form redirect
    const form = e.target;

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            form.reset();
            alert("Your message has been sent!");
        } else {
            alert("Something went wrong. Please try again.");
        }
    });
});
