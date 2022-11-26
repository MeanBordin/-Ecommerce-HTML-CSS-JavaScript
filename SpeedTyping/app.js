const levelBtnEL = document.getElementById('level-btn')
const settingsEL = document.getElementById('settings')
const levelFormEL = document.getElementById('level-form')

const selcLevelEl = document.getElementById('level')
const wordEL = document.getElementById('word')
const inpTextEL = document.getElementById('text')

const timeEL = document.querySelector('.time-container')
const scoreEL = document.querySelector('.score-container')
const overEL = document.querySelector('.gameover-container') 

const words = ['หมอ','ไปไหน','กินข้าว','โดดเรียน','นอนก่อน','เล่นเกม', 'ไปเที่ยว', 'ดูหนัง']
let randomWord, score = 0, time = 15 //easy = 15s, medium = 10s, hard = 5s
let level = 'medium'
let saveMode

//ให้มีการนับเวลาตลอดทุก 1s 
// ทุกๆ 1s ไปเรียกใช้งาน functions updateTime
const timeInterval = setInterval(updateTime, 1000)
// 1000 milisec

// ทำการสุ่มค่าที่อยู่ใน array
function getRadomWord () {
    return words[Math.floor(Math.random()*words.length)]
}

function display () {
    randomWord = getRadomWord()
    wordEL.innerHTML = randomWord
    timeEL.innerHTML = `เวลา ${time} วินาที`
    
}

// add event
// .target.value ใช้สำหรับอ่านค่าที่สุงมาจากฟังชั่น
inpTextEL.addEventListener('input', (e) => {
    // console.log(e.target.value);
    // console.log(randomWord); ??
    const inpText = e.target.value

    // ถ้าถูกให้ไปสุ่มคำใหม่
    if (inpText === randomWord) {
        // ถ้าพิมพ์ถูกให้บวกเวลาเพิ่ม 1s
        if (saveMode === 'easy'){
            time += 2 
        }else if (saveMode == 'medium'){
            time += 3
        }else{
            time += 4
        }
        display()
        updateScore()
        // ทำการเปลี่ยนค่าให้กลายเป็นค่าว่าง
        e.target.value = ''
    }
})

// score
function updateScore () {
    score += 10
    scoreEL.innerHTML = score
}

// time
function updateTime () {
    time --
    timeEL.innerHTML = `เวลา ${time} วินาที`
    
    if (time === 0) {
        // ให้เคียรค่าของเวลา ในตัวแปร timeInterval
        clearInterval(timeInterval)
        gameOver()
    }
}

// display game over
function gameOver () {
    overEL.innerHTML = `<h1>Game Over</h1>\n
                        <h3>Point : ${score}</h3>
                        <button 
                        onclick="location.reload()" 
                        style="border: none; border-radius: 4px; padding: 4px 10px"
                        >
                            เล่นอีกครั้ง
                        </button>`
    
    // add style
    overEL.style.display = 'flex'
}

// ทำให้ cursor มันกระพริบเลยโดยที่เราไม่ต้องกด
inpTextEL.focus();

levelBtnEL.addEventListener('click', () => {
    settingsEL.classList.toggle('hide')
})

selcLevelEl.addEventListener('change', (e) => {
    level = e.target.value
    // localStorage เก็บค่าตัวแปรและจะไม่ถูกลบไป 
    localStorage.setItem('mode', level)
    // setItem('key', value)
})

function startGame () {
    saveMode = localStorage.getItem('mode') !== null ?  localStorage.getItem('mode') : 'medium'
    // localStorage.getItem('mode') ดึงข้อมูลจาก localStorage
    // localStorage.getItem('key name')
    selcLevelEl.value = saveMode

    if (saveMode === 'easy'){
        time = 15
    }else if (saveMode === 'medium'){
        time = 10
    }else{
        time = 5
    }

    display()
}

startGame()
display()

// console.log(getRadomWord());