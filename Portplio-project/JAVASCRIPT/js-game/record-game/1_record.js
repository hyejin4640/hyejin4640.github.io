/** 객체 가져오기 , 변수상수 선언 ******************************************************************** */
const tagColor = document.querySelector("#color");
const tagResult = document.querySelector("#result");
let records = [];
let timeoutID; // undefined 초기값 //null 문자 //nan 숫자 <= 초기값
let time = {
  start: 0,
  end: 0,
  fn_getTimeDiff: function () {
    return this.end - this.start;
  },
};


/** 함수정의 ************************************************************************* */

const changeColorContent = (old, current, text) => {
  tagColor.classList.replace(old, current);
  tagColor.textContent = text;
};

const rankRecord = (time) => {
  records.push(time);
  //평균
  const average = records.reduce((hab, i) => hab + i) / records.length;
  //top3
  const top3 = records.sort((a, b) => a - b).slice(0, 3);
  // 화면 출력
  // tagResult.innerHTML = `${time} ms`;
  let htmlStr = "";
  htmlStr += `<span>현재: ${time}ms</span>\t`;
  htmlStr += `<sapn>평균: ${average}ms</sapn>`;
  top3.forEach((v, i) => {
    htmlStr += `<p>${i + 1}위 : ${v}</p>`;
  });
  tagResult.innerHTML = htmlStr;
};

const handlerColorClick = () => {
  if (tagColor.classList.contains("waiting")) {
    changeColorContent("waiting", "ready", " 초록색이되면클릭하세요👽");
    // ready 배경색으로 바뀌고 지정한 시간뒤에 자동으로 배경색을 초록으로 바꿈
    let second = Math.floor(Math.random() * 2 + 2) * 1000;
    timeoutID = setTimeout(() => {
      // settimeout에 아이디를 지정해 종료를 해줘야 함수가실행될때마다 새로운settimeout 이 생성되지않음.
      changeColorContent("ready", "now", "클릭하세요!!!!!");
      time.start = new Date();
    }, second);
  } else if (tagColor.classList.contains("ready")) {
    clearTimeout(timeoutID);
    changeColorContent("ready", "waiting", "너무 성급하시군요😫");
  } else if (tagColor.classList.contains("now")) {
    changeColorContent("now", "waiting", "클릭해서 START!");
    clearTimeout(timeoutID);
    time.end = new Date();
    rankRecord( time.fn_getTimeDiff());
  }
};

/** 이벤트등록 ************************************************************************* */
tagColor.addEventListener("click", handlerColorClick);
