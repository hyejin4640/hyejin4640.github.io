(function () {
  "use strict";

/****************** 요소를 객체로 가져오기 ************************************************************ */
const MAX = parseInt(prompt('몇 명이 참여할건가요?'));
const tagInput = document.querySelector('input');
const tagBtn = document.querySelector('button');
const tagWord = document.querySelector('.word');
const tagHistyory = document.querySelector('#history');
const tagOrder = document.querySelector('.order');
let nthNumber = 1;
let preWord ='';


/******************** 함수정의 ************************************************************************ */


function numberUP(){
  if(nthNumber < MAX){
    tagOrder.textContent = ++nthNumber;
  }else{
    nthNumber = 1;
    tagOrder.textContent = nthNumber;
  }}


function showInputWord(){
  preWord = tagInput.value;
  tagWord.textContent = preWord;
  tagHistyory.textContent += `${preWord} =>`;
}


function confirmInput() {
 if( preWord[preWord.length-1] === tagInput.value[0]){
  showInputWord();
  numberUP();
 }else{
  alert('잘못된 값을 입력하셨습니다')
 }}


function onBtnClick(){
if(tagInput.value && !preWord ){
  showInputWord();
  numberUP();
}
else if(preWord){
confirmInput();
}
else{
  alert('잘못된 값을입력하셧습니다');
}}

const offInputEnter = (event)=>{
  if( event.key === 'Enter' ){
    event.preventDefault();  //엔터를누르면 서버에전송되는 기본설정값을 막기위함
    onBtnClick(); // 대신 키가 눌렸을때라는 이벤트안에 엔터키를 누르면 기본설정값은 무력화하지만 키가눌리면 onBtnclick이라는 함수를 실행해라
}}
/****************** 이벤트 등록 ************************************************************************ */
tagInput.addEventListener('keypress',offInputEnter);
tagBtn.addEventListener('click',onBtnClick);

})();
