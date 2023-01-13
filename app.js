const p1Score = document.querySelector('#p1score')
const p2Score = document.querySelector('#p2score')
const winningScore = document.querySelector('#winningscore')
const p1Button = document.querySelector('#p1button')
const p2Button = document.querySelector('#p2button')
const reset = document.querySelector('#reset')

var p1CurrentScore = 0;
var p2CurrentScore = 0;
var winScore = 3;

function buttonDisabled() {
    p1Button.disabled = true
    p2Button.disabled = true
    p1Button.style.backgroundColor = 'rgb(56, 156, 56)'
    p2Button.style.backgroundColor = 'rgb(78, 78, 120)'
}

function gameEnd(player){
    if (player === 'p2'){
        if (p2CurrentScore === winScore) {
            p1Score.style.color = 'red'
            p2Score.style.color = 'green'
            buttonDisabled()
        }
    }
    else if (player === 'p1'){
        if (p1CurrentScore === winScore){
            p1Score.style.color = 'green'
            p2Score.style.color = 'red'
            buttonDisabled()
        }
    }
    }

p1Button.addEventListener('click', function (){
    p1CurrentScore += 1;
    p1Score.textContent = p1CurrentScore;
    gameEnd('p1')
})

p2Button.addEventListener('click', function (){
    p2CurrentScore += 1;
    p2Score.textContent = p2CurrentScore;
    gameEnd('p2')
})

function reseting() {
    p1CurrentScore = 0;
    p2CurrentScore = 0;
    p1Score.textContent = p1CurrentScore;
    p2Score.textContent = p2CurrentScore;
    p1Score.style.color = 'black'
    p2Score.style.color = 'black'
    p1Button.disabled = false
    p2Button.disabled = false
    p1Button.style.backgroundColor = 'rgb(51, 234, 51)'
    p2Button.style.backgroundColor = 'rgb(120, 120, 249)'
}

reset.addEventListener('click', reseting)
winningScore.addEventListener('change', function () {

    winScore = parseInt(winningScore.value)
    reseting()
    console.log(winScore)
    console.log(typeof(winScore))
})