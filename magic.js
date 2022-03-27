let score = 0;
let opponentScore = 0;
let userRock = 0
let userScissors = 1
let userPaper = 2

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const oppScissors = document.querySelector('#scissorsOpp')
const oppRock = document.querySelector('#oppRock')
const oppPaper = document.querySelector('#paperOpp')

document.querySelector('.reset').addEventListener('click', reset) 
document.querySelector('.nextRound').addEventListener('click', nextRound) 
document.querySelector('.rockBtn').addEventListener('click', rockHand)
document.querySelector('.paperBtn').addEventListener('click', paperHand)
document.querySelector('.scissorsBtn').addEventListener('click', scissorHand)

let compSelect = (Math.floor(Math.random() * 3))


function rockHand() {
  document.querySelector('.paperBtn').disabled = true
  document.querySelector('.scissorsBtn').disabled = true
  document.querySelector('.rockBtn').disabled = true
  compSelect = (Math.floor(Math.random() * 3))
  
  if (compSelect === 0) {
    oppRock.style.display = 'block'
  } else if (compSelect === 1) {
    oppRock.style.display = 'none'
    oppScissors.style.display = 'block'
    console.log('opp picks scissors')
    } else if (compSelect === 2) {
    oppRock.style.display = 'none'
    oppPaper.style.display = 'block'
    console.log('opponent selects paper')
  }

  if (userRock === compSelect) {
  } else if (userRock < compSelect)
  if (compSelect === 1)
    { document.querySelector('#user-score').innerHTML = ++score
  } else {
    document.querySelector('#opp-score').innerHTML = ++opponentScore
  }
}

function paperHand() {
  document.querySelector('.scissorsBtn').disabled = true
  document.querySelector('.rockBtn').disabled = true
  document.querySelector('.paperBtn').disabled = true
  paper.style.display = 'block'
  rock.style.display = 'none'
  compSelect = (Math.floor(Math.random() * 3))


  if (compSelect === 0) {
    oppRock.style.display = 'block'
  } else if (compSelect === 1) {
    oppRock.style.display = 'none'
    oppScissors.style.display = 'block'
    console.log('opp picks scissors')
    } else if (compSelect === 2) {
    oppRock.style.display = 'none'
    oppPaper.style.display = 'block'
    console.log('opponent selects paper')
  }

  if (userPaper === compSelect) {
  } else if (userPaper > compSelect)
  if (compSelect === 1)
    { document.querySelector('#opp-score').innerHTML = ++opponentScore
  } else { document.querySelector('#user-score').innerHTML = ++score
    
  }
}


function scissorHand() {
  document.querySelector('.paperBtn').disabled = true
  document.querySelector('.rockBtn').disabled = true
  document.querySelector('.scissorsBtn').disabled = true
  scissors.style.display = 'block'
  rock.style.display = 'none'
  compSelect = (Math.floor(Math.random() * 3))

  if (compSelect === 0) {
    oppRock.style.display = 'block'
  } else if (compSelect === 1) {
    oppRock.style.display = 'none'
    oppScissors.style.display = 'block'
    console.log('opp picks scissors')
    } else if (compSelect === 2) {
    oppRock.style.display = 'none'
    oppPaper.style.display = 'block'
    console.log('opponent selects paper')
  }

  if (userScissors === compSelect) {

  } else if (userScissors > compSelect) {
    document.querySelector('#opp-score').innerHTML = ++opponentScore
  } else { document.querySelector('#user-score').innerHTML = ++score
    
  }
}

function nextRound() {
  rock.style.display = 'block'
  oppRock.style.display = 'block';
  scissors.style.display = 'none'
  paper.style.display = 'none'
  oppRock.style.display = 'block'
  oppScissors.style.display = 'none'
  oppPaper.style.display = 'none'
  document.querySelector('.scissorsBtn').disabled = false
  document.querySelector('.rockBtn').disabled = false
  document.querySelector('.paperBtn').disabled = false
  
}

function reset() {
  console.log('score is zero')
  rock.style.display = 'block'
  scissors.style.display = 'none'
  paper.style.display = 'none'
  oppRock.style.display = 'block'
  oppScissors.style.display = 'none'
  oppPaper.style.display = 'none'
  score = 0 
  opponentScore = 0
  document.querySelector('#user-score').innerHTML = score
  document.querySelector('#opp-score').innerHTML = opponentScore
  document.querySelector('.scissorsBtn').disabled = false
  document.querySelector('.rockBtn').disabled = false
  document.querySelector('.paperBtn').disabled = false
}
