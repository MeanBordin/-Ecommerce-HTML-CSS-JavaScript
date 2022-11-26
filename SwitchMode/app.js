const switchToggle = document.querySelector('input[type="checkbox"]')
// console.log(switchToggle); 
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.querySelector('toggle-text')
const nav = document.getElementById('nav')

// console.log(nav);

switchToggle.addEventListener('change', switchMode)

function switchMode (e) {
    // console.log(e.target.checked);

    if (e.target.checked) {
        // นำคลาสจาก css มาใช้
        document.documentElement.setAttribute('dark-them', 'dark')
        darkMode()
    }else{
        document.documentElement.setAttribute('dark-them', 'light')

        lightMode()
    }
}


function darkMode () {
    // console.log('darkmode');
    toggleIcon.children[0].textContent = "โหมดกลางคืน"
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    nav.style.background = 'rgb(0 0 0 / 50%)'
}

function lightMode () {
    // console.log('lightmode')
    toggleIcon.children[0].textContent = "โหมดกลางวัน"
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
}