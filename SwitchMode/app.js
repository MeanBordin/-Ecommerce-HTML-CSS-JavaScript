const switchToggle = document.querySelector('input[type="checkbox"]')
// console.log(switchToggle); 
const toggleIcon = document.getElementById('toggle-icon')
const toggleText = document.querySelector('toggle-text')
const nav = document.getElementById('nav')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')

// console.log(nav);

switchToggle.addEventListener('change', switchMode)

function switchMode (e) {
    // console.log(e.target.checked);

    if (e.target.checked) {
        // นำคลาสจาก css มาใช้
        document.documentElement.setAttribute('dark-them', 'dark')
        darkMode()
        imageSwichMode('dark')
    }else{
        document.documentElement.setAttribute('dark-them', 'light')
        lightMode()
        imageSwichMode('light')
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

function imageSwichMode (mode) {
    image1.src = `img/undraw_futuristic_interface_re_0cm6_${mode}.svg`
    image2.src = `img/undraw_project_complete_lwss_${mode}.svg`
    image3.src = `img/undraw_slider_re_ch7w_${mode}.svg`
}