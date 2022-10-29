'use strict';
// Selecting elements
const player0El = document.querySelector('.player--0'); /* section */
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');   /* last Score */
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0'); /* middle Score */
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');   /* 주사위 이미지 */
const btnNew = document.querySelector('.btn--new');  /* reset 버튼 */
const btnRoll = document.querySelector('.btn--roll');  /* middile score에 저장 */
const btnHold = document.querySelector('.btn--hold');  /* last score에 저장 버튼*/
let scores, currentScore, activePlayer, playing;


const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling dice functionality
const hadlerbtnRollClick = () => {
  if (playing) {
    // 1.Generatinf a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `./img/dice-${dice}.png`;

    // 3.Check for rolled 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
}

const handlerbtnHoldClick = () => {
  if (playing) {
    // 1. Add currnet score to acive player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    } else {
      switchPlayer();
    }
  }
}



const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  // 요소의 초기값 setting
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // class 초기값 setting
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

}

btnRoll.addEventListener('click', hadlerbtnRollClick);
btnHold.addEventListener('click', handlerbtnHoldClick);
btnNew.addEventListener('click', init);
window.addEventListener('load', init);