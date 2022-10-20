
//  웹사이트를 만들때 요소의 위치 기준을 뷰포트로 할때도 있고 다른 요소의위치로 적용시킬때도있고
// 스크롤바의 전채 100% 비율로 백분율 로 바꿔서 그비율중에 %지로 위치를 잡을수도있따



// *******************객체가져오기 *****************************
const tagBox = document.querySelectorAll('section div');
const tagSection = document.querySelectorAll('section');
const MAX_MAGIN = 400; 

/* ***************함수정의 ************************************ */
const handlerScroll=()=>{
  tagBox.forEach((elem)=>{
    const boxTop =elem.getBoundingClientRect().top;
    if( window.innerHeight > boxTop+MAX_MAGIN){
      elem.classList.add('show');
    }  
    console.log( boxTop+MAX_MAGIN , window.innerHeight);  
  })
/* div들을 하나의 배열로 갖고온 객체에 div하나하나요소에 getbound..TOP값의 위치가
설정한 기준이되면 각각의 요소에 클래스를 추가한다 */


  // tagSection.forEach((elem)=>{
  //   const sectionTop = elem.getBoundingClientRect().top;

  //   if( sectionTop+MAX_MAGIN < window.innerHeight){
  //    for(let i=0; i< elem.children.length; i++){
  //     elem.children[i].classList.add('show');
  //    }
  //   }
  //   //  웹페이지를 만들땐 스크롤을 내릴때만 애니메이션을 지정해준다. 다시 위로 올린땐 애니메이션처리x 완성되어져잇는 상태로 보임
  //   console.log( sectionTop+MAX_MAGIN , window.innerHeight);
  // })

/* section별로 window.innerHeight값 보다 getBoundinG..Top값 + MAX_MAGIN값이 더 작아지면 section안에 div자식들이 브라우저에 어느위치에있건 한번에 class를 적용한다.
(그래서 div들을 감싼 부모 section에 위치값을 기준으로 지정함)
(view포트상단에 section이 가까워졌다는뜻 but,너무 가까워질때 말고 적정영역에 지정하기위해 임의에 변수애 값을400을더해 주었다) */

}

const init=()=>{
  window.addEventListener('scroll',handlerScroll );
}


/******************윈도우에 dom구조가 로드가되면 ************** */
window.addEventListener('load',init);