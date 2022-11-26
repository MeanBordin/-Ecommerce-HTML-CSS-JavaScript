const btnSetting = document.getElementById('btn-setting')
const settingLevel = document.getElementById('setting-level')
const setting = document.querySelector('.setting')

const showTime = document.getElementById('show-time')
const showScore = document.getElementById('show-score')
const inputWord = document.getElementById('input-word')

const gameOver = document.querySelector('.gameOver')
const showDisplay = document.querySelector('.display')

const wordList = ['Ant', 'Bird', 'Cat', 'Dog', 'Fox']
let score = 0, time = 20, randomWords

const timeCount = setInterval(countDown, 1000)


function randomWord () {
    let index = Math.floor(Math.random()*wordList.length)
    // return wordList[Math.floor(Math.random()*wordList.length)]
    return wordList[index]
}

function display () {
    randomWords = randomWord()
    showDisplay.innerHTML = randomWords
}

// input text form user
inputWord.addEventListener('input', (text) => {
    const texts = text.target.value;
    if (texts === randomWords) {
        display()
        displayScore()
        text.target.value = ''
    }
})

function displayScore () {
    score += 10
    showScore.innerHTML = `${score} Point`
}

function countDown () {
    time--
    showTime.innerHTML = `${time} Second`

    if (time === 0) {
        clearInterval(timeCount)
        displayGameOver()
    }
}

btnSetting.addEventListener('click', () => {
    setting.classList.toggle('hide')
})

function displayGameOver () {
    gameOver.innerHTML =    `<h1>Game Over</h1> \n
                            <h2>Your score ${score}</h2><br><br>
                            <button onclick="location.reload()"
                                style=" padding: 10px 20px 10px 20px; 
                                        border-radius: 5px; 
                                        cursor: pointer;"
                            >
                                Play agin
                            </button> 
                            `
    gameOver.style.display = 'flex'
}

display()
