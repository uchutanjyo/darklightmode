const toggleSwitch = document.querySelector('input[type=checkbox]');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const textBox = document.querySelector('#text-box');



//Dark or light images

function imageMode(color){
    img1.src = `img/undraw_proud_coder_${color}.svg`;
    img2.src = `img/undraw_feeling_proud_${color}.svg`;
    img3.src = `img/undraw_conceptual_idea_${color}.svg`;

}

// Toggle dark light mode
function toggleDarkLightMode(isDark) {
isDark? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', 'light');
nav.style.backgroundColor = isDark? 'rgb(0 0 0/50%)' : 'rgb(255 255 255/50%)'
textBox.style.backgroundColor = isDark? 'rgb(0 0 0/50%)' : 'rgb(255 255 255/50%)';
toggleIcon.children[0].textContent = isDark? 'Dark Mode' :'Light Mode';
isDark? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :     toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
isDark? imageMode('dark') :     imageMode('light'); 
};


// Switch theme dynamically 
function switchTheme(event) {
 if (event.target.checked) {
     localStorage.setItem('theme', 'dark');
toggleDarkLightMode(true);
 } else {
    localStorage.setItem('theme', 'light');
    toggleDarkLightMode(false);
 }

}

// Event listener

toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
}
}