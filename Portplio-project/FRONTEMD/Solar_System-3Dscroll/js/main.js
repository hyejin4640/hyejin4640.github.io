'use strict';

// 스크롤값에 의한 transform: translateZ() 값의 변화를 정하는 웹사이트 
// 객체가져오기 *******************************************************************************************
const tagFront = document.querySelectorAll('.front');
const tagProBar = document.querySelector('.progress-bar');
const tagBox = document.querySelector('.box');
const tagMenu = document.querySelector('nav');
const tagA = document.querySelectorAll('nav a');
const tagStage = document.querySelector('.stage');
const END_POSITION = -1000;
const arrFront = [];
let totalScroll = 0;
const zSecPos = [-1000, -300, -100, 100, 300, 500, 700, 900, 1000];  /* box의 transform : transitionZ값의 구간을 담아놓은 배열 */

//  함수정의  **********************************************************************************************

const getIndexSection = (zPos) => {
  for (let i = 0; i < zSecPos.length; i++) {
    if (zPos >= zSecPos[i] && zPos < zSecPos[i + 1]) {
      return i;
    }
  }
  return 0;
}


const setMenuActive = (idx) => {

  const activeElem = document.querySelector('.active');
  activeElem.classList.remove('active');
  tagA[idx].classList.add('active');

}


// 박스z값에 서 각각의  section을 위치시키는 함수
const setSectionPos = () => {
  let endPos = END_POSITION;

  for (let i = 1; i <= tagFront.length; i++) {
    arrFront[tagFront.length - i] = endPos;   /* -1000,-800,-600,-400,-200,0,200,400 */
    tagFront[tagFront.length - i].style.transform = `translateZ(${endPos}vw)`;
    endPos += 200;
  }
}



const handlerResize = () => {
  totalScroll = document.documentElement.scrollHeight - window.innerHeight;
}



const handlerScroll = () => {
  const scrollTop = window.pageYOffset;
  const percent = scrollTop / totalScroll;  /* 전체스크롤영역에서 브라우저화면의 위치값  */
  const zPos = percent * 1990 + END_POSITION; /* 선택값 * 전체값비율 => 전체값에 선택값이 차지하는 비율을 계산하는식 */
  //  전체비율을 100 으로 정해 그범위안에서 원하는값의 비율을 구하기위해 *100 을했다. 
  tagProBar.style.width = percent * 100 + "%";
  tagBox.style.transform = `translateZ(${zPos}vw)`;
  const idx = getIndexSection(zPos);
  setMenuActive(idx);

}


const handlerMouseMove = (e) => {
  // console.log(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
  const posX = -1 + (e.clientX / window.innerWidth) * 2;   /* 전체 중의 내가 현재 갖고있는 위치 */
  const posY = 1 - (e.clientY / window.innerHeight) * 2;
  tagStage.style.transform = `rotateX(${posY * 5}deg) rotateY(${posX * 5}deg)`;


}


const handlerMenuClick = (e) => {
  e.preventDefault();   //Event.preventDefault() : Event.preventDefault()해당이벤트에대한 기본동작을 실행하지않도록하는 메서도
  const target = e.target;
  if (target.tagName === 'A') {
    // 메뉴이동
    const idx = target.getAttribute('href');
    tagBox.style.transform = `translateZ(${zSecPos[idx]}vw)`;
    tagBox.style.transition = `0.5s`;
    setMenuActive(idx);
  }

}


//이벤트 등록및 초기실행함수 *********************************************************************************
const init = () => {
  setSectionPos();
  handlerResize();
  window.addEventListener('scroll', handlerScroll);
  window.addEventListener('resize', handlerResize);
  /* window.innerHeight 값이나 documentElement.ScrollHeight의 값이 브라우저의 사이즈를 즐이며 ㄴ같이 값이 줄어드는데
  그 변화하는 값을 변수에 자동으로 저장시키는 이벤트 이다.  */
  window.addEventListener('mousemove', handlerMouseMove);
  tagMenu.addEventListener('click', handlerMenuClick);
}
window.addEventListener('load', init);