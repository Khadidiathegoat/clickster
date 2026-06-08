import { Howl } from 'howler'

import soundEffect1 from './assets/ring.mp3'
import soundEffect2 from './assets/wow.mp3'

const clicker_noise = new Howl ({
  src: [soundEffect1],
  autoplay: true,
  loop:false, 
  volume: 0.5
})

const upgrade_now = new Howl ({
  src: [soundEffect2],
  autoplay: true,
  loop:false,
  volume: 1
})



let score = 0

let clicker = document.getElementById("clicker")

let scoreDisplay = document.getElementById("scoreDisplay")

const formatter = new Intl.NumberFormat('en-US', {
maximumFractionDigits: 2,
notation: 'compact' ,
compactDisplay: 'short'
})

function updateScore (amount) {
  score += amount
  scoreDisplay.innerText = score.toFixed(0) + ' cupcake points' 

}
clicker.addEventListener("click" , function () {
  let clickAnt = 1 + (cupcakes ** 1.05)

 clicker_noise.play()

  updateScore(clickAnt)
})

let upgradeOne = document.getElementById("upgradeOne")
let upgradeOneCount = document.getElementById("upgradeOneCount")
let cupcakes = 0

upgradeOne.addEventListener("click", function () {
  upgrade_now.play()
  
  

  if (score>=100){
    updateScore(-100)
    cupcakes++ 
  if (cupcakes>=2){
      upgradeOneCount.innerText = cupcakes + " Rare rainbow cupcakes<3"
    }
    else {
      upgradeOneCount.innerText = cupcakes + " Rare rainbow cupcake<3"
    }
    upgradeOneCount.innerText = cupcakes + " Rare rainbow cupcake<3"
  } else {
    alert ("YOU BROKE")

  }
})

function gameLoop() {
console.log ("Hi from gameLoop")
let clickAnt = (cupcakes ** 1.05)
updateScore(clickAnt)
}

setInterval (gameLoop, 1000)