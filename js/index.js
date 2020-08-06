//Change Theme

const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme-icon') ||
  (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme-icon', tmp),
    tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme-icon');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme-icon', next);
}

document.getElementById('themeButton').onclick = toggleTheme;


//Typed Js

var typed = new Typed('#typed', {
  strings: [
    'Hey My Name is Dunmade Oluwatunmise.',
    'Welcome to my World!'
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});