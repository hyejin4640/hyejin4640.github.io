
/* 객체 가져오기 ************************************************************** */
const tagWrap =document.querySelector('#wrap');
const tagBgList = document.querySelectorAll('.bg');
const tagTownImgs = document.querySelectorAll('.town img');
const tagSun = document.querySelector('.sun > .sun-img');
const tagMoon = document.querySelector('.moon > img')
/* 함수정의 ************************************************************** */


const setMoonView =()=>{
tagMoon.classList.add('lastMoon');
}



const setSunView=(index)=>{
// -90, -30, ,30 ,90
const arrPos =[-90,-30,30,90];
if( Math.abs(arrPos[index]) === 90){ /* 절대값 비교 */
  tagSun.style.opacity = '0';
}else{
  tagSun.style.opacity = '1';
}
tagSun.style.transform = `rotate( ${arrPos[index]}deg)`;
tagMoon.classList.remove('lastMoon');
}



const setchangeTown =( index )=>{
  tagTownImgs.forEach((elem)=>{
    elem.classList.remove('town-view');
  })

  tagTownImgs[index].classList.add('town-view');
}



const setBackground =( index )=>{
  /* 태그에 class를 찾아 없애주는 2가지 방법 */

  /* 지정한 요소들에서만 class를 찾아서 명령할수있어 다른 태그에 영향X */
  // tagBgList.forEach((elem)=>{
  //   elem.classList.remove('active');
  // })

 /* 전체html문서에서 class를 찾아 명령하기때문에 다른 요소에 영향O */
  const nowBg = document.querySelector('.active');
  nowBg.classList.remove('active');
  tagBgList[index].classList.add('active');
}

const changeBackground = ( percent )=>{
  if( percent < 25 ){
    setBackground(0);
    setchangeTown(0);
    setSunView(0);
  }else if( percent >= 25 && percent < 50){
    setBackground(1);
    setchangeTown(0);
    setSunView(1);
  }else if( percent >= 50 && percent < 75){
    setBackground(2);
    setchangeTown(1);
    setSunView(2);
  }else if( percent >=75 && percent < 100){
    setBackground(3);
    setchangeTown(1);
    setSunView(3);
    setMoonView();
  }
}


const handlerScroll=()=>{
  // 전체 스크롤에 대한 현재위치값을 100분율로 표시(%)
  // percent < 25 : sky1
  // 25 <= percent < 50 : sky2
  // 50 <= percent < 75  : sky3
  // 75 <= percent < 100 : sky4

  const totalPage = tagWrap.offsetHeight;
  const viewPage = document.documentElement.clientHeight;
  const scrollY = window.pageYOffset || window.scrollY;
  const percentPage = totalPage - viewPage;
  const percent = Math.floor( ( scrollY / percentPage )*100 );  /* 내가원하는값 / 전체 *100% => 100%중에 내가원하는값이 몇%인지 */
  changeBackground( percent );


}

const init =()=>{
  window.addEventListener('scroll', handlerScroll)
}
window.addEventListener('load',init)