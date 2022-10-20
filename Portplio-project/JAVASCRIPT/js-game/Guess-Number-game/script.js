'use strict';


/**
 * 1. 랜덤한숫자를 1-20 사이의 숫자를 생성한다'
 */


//1. 입력 -출력
// 입력 : input, class:guess
// 전송 : class=btn , check
//  출력 : class:message :
//  출력 : score--;
// 출력 :  highscore = score 점수
// 출력 : body - backgroundcolor :60b347
//2 . 입력 -출력
//입력:  again : class:btn, again
//출력 : class:message =start guessing...
//출력 : score =20
//츨력 : highscore =0
// 정답 숫자 바뀜



/** 객체가져오기 ******************************* */
let randomNum = 0;
let score = 20;
let highscore = 0;
const $guess = document.querySelector('.guess');
const $check = document.querySelector('.check');
const $message = document.querySelector('.message');
const $score = document.querySelector('.score');
const $highscore = document.querySelector('.highscore');
const $again = document.querySelector('.again');
const $body = document.querySelector('body');
const $number = document.querySelector('.number');

/** 함수정의 ******************************* */

const fn_result = (message, score, highscore) => {
  $message.textContent = message;
  $score.textContent = score;
  $highscore.textContent = highscore;
}

const fn_userCorfirmNumber = (user) => {
  if (user === randomNum) {
    highscore = score;
    $body.style.backgroundColor = "#60b347";
    $number.textContent = randomNum;
    fn_result('🎉 Correct Number! ', score, highscore);
  } else if (user > randomNum) {
    highscore = --score;
    fn_result('📈Too High! ', score, highscore);
  } else if (user < randomNum) {
    highscore = --score;
    fn_result('📈Too Row! ', score, highscore);
  }
  if (score <= 0) {
    score = 0;
    highscore = 0;
    fn_result(' you lost the game 😥 ', score, highscore);
  }
}
const handlerConfirmNumber = (e) => {
  let user = parseInt($guess.value);
  if (user) {
    fn_userCorfirmNumber(user);
  } else {
    $message.textContent = 'write number please!';
  }
}
const handlerAgain = () => {
  init();

}
const init = () => {
  randomNum = Math.floor(Math.random() * 19 + 1);
  score = 20;
  highscore = 0;
  $guess.value = '';
  $body.style.backgroundColor = "#222";
  $number.textContent = '?'
  fn_result('Start guessing... ', score, highscore);

}

/** 이벤트 등록 ******************************* */

$check.addEventListener('click', handlerConfirmNumber)
$again.addEventListener('click', handlerAgain);

window.addEventListener('load', init);
