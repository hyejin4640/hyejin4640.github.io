"use strict";

const $slide = document.querySelector(".slide");
const $slideList = document.querySelector(".slide-list");
const $prevButton = document.querySelector(".prev");
const $nextButton = document.querySelector(".next");
const $Imgs = document.querySelectorAll(".slide-list > img");
const $circle = document.querySelector(".circle");
const $play = document.querySelector(".play-btn > .play");
const $stop = document.querySelector(".play-btn > .stop");
const $bg = document.querySelector(".bg");
let $dot;
const SLIDE_LEN = $Imgs.length;
const IMG_WIDTH = $Imgs[0].clientWidth;
let currentIdx = 0;
const MOVE_TIME = 300;
let IntervalId;
let check = false;
// ------ prev 버튼을 클릭했을때-----------------
const handlerClickPrev = (e) => {
  currentIdx--;
  // if (currentIdx === 0) {
  //   $prevButton.setAttribute("disabled", "true");
  // }
  // $nextButton.removeAttribute("disabled");
  if (currentIdx >= -1) {
    $slideList.style.transition = MOVE_TIME + "ms";
    $slideList.style.transform = `translateX(-${
      IMG_WIDTH * (currentIdx + 1)
    }px)`;
  }

  if (currentIdx === -1) {
    setTimeout(() => {
      $slideList.style.transition = "0ms";
      $slideList.style.transform = `translateX(-${SLIDE_LEN * IMG_WIDTH}px)`;
    }, MOVE_TIME);
    currentIdx = SLIDE_LEN - 1;
  }
  drawClickDot($dot[currentIdx]);
};
// ------ next 버튼을 클릭했을때-----------------
const handlerClickNext = (e) => {
  currentIdx++;
  if (currentIdx <= SLIDE_LEN) {
    // 5 보다 cidx가 작거나 같을때
    $slideList.style.transition = MOVE_TIME + "ms"; // 300ms 씩 움직여라
    $slideList.style.transform = `translateX(-${
      IMG_WIDTH * (currentIdx + 1)
    }px)`; //-300* (1,2,3,4,5)
  }
  if (currentIdx === SLIDE_LEN) {
    //5와 cidx가 같을때
    // currentIdx = SLIDE_LEN-1 ;
    setTimeout(() => {
      $slideList.style.transition = "0ms"; //JS는 0이어도 단위를 넣어야함 ms
      $slideList.style.transform = `translateX(-${IMG_WIDTH}px)`;
    }, MOVE_TIME);
    currentIdx = 0;
  }
  // if (currentIdx === SLIDE_LEN - 1) {
  //   $nextButton.setAttribute("disabled", "true");
  // }
  // $prevButton.removeAttribute("disabled");

  drawClickDot($dot[currentIdx]);
};

const getChildIndex = (obj) => {
  const elem = obj.parentNode.childNodes;

  for (let i = 0; i < elem.length; i++) {
    if (elem[i] === obj) {
      return i - 3;
    }
  }
  return -1;
};

const drawClickDot = (obj) => {
  const curDot = document.querySelector(".dot-active");
  curDot.classList.remove("dot-active");
  obj.classList.add("dot-active");
};

const handlerClickDot = (e) => {
  let obj = e.target;
  drawClickDot(obj);
  // const curDot = document.querySelector(".dot-active");
  // curDot.classList.remove("dot-active");
  // obj.classList.add("dot-active");
  getChildIndex(obj);
  currentIdx = getChildIndex(obj);
  console.log(currentIdx);
  if (currentIdx < 0) currentIdx = 0;
  $slideList.style.transition = MOVE_TIME + "ms";
  $slideList.style.transform = `translateX(-${IMG_WIDTH * (currentIdx + 1)}px)`;
};

const createElemDot = (SLIDE_LEN) => {
  for (let i = 0; i < SLIDE_LEN; i++) {
    const tagdot = document.createElement("p");
    tagdot.classList.add("dot");
    $circle.appendChild(tagdot);
  }
  $dot = document.querySelectorAll(".dot");
  $dot.forEach((v, i) => {
    if (i === 0) {
      v.classList.add("dot-active");
    }
    v.setAttribute("data-idx", i);
    v.addEventListener("click", handlerClickDot);
  });
};

// 1번 이미지와 5번이미지를 양끝에 복제해서 붙이는 함수
const cloneImage = () => {
  const firstNode = $slideList.firstElementChild;
  const lastNode = $slideList.lastElementChild;
  const cloneFirst = firstNode.cloneNode(true); //복제 메소드
  const cloneLast = lastNode.cloneNode(true); //복제 메소드
  $slideList.appendChild(cloneFirst);
  $slideList.insertBefore(cloneLast, firstNode);
};

// play 버튼을 클릭하면 무한재생 함수
const handlerClickPlay = () => {
  IntervalId = setInterval(() => {
    handlerClickPrev();
  }, 1000);
};
// play 버튼을 클릭하면 무한재생 멈춤 함수
const handlerClickStop = () => {
  clearInterval(IntervalId);
};

const handlerBg = () => {
  if (check) {
    document.querySelector('body').style.backgroundColor ="#ffffff";
    check = false;
  }else{
    document.querySelector("body").style.backgroundColor = "black";
    check = true;
  }
 
};
const init = () => {
  createElemDot(SLIDE_LEN);
  cloneImage();
  $prevButton.addEventListener("click", handlerClickPrev);
  $nextButton.addEventListener("click", handlerClickNext);
  $play.addEventListener("click", handlerClickPlay);
  $stop.addEventListener("click", handlerClickStop);
  $bg.addEventListener("click", handlerBg);
};

init();
