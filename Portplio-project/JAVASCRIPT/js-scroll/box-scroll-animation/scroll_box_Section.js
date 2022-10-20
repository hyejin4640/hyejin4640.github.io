//  웹사이트를 만들때 요소의 위치 기준을 뷰포트로 할때도 있고 다른 요소의위치로 적용시킬때도있고
// 스크롤바의 전채 100% 비율로 백분율 로 바꿔서 그비율중에 %지로 위치를 잡을수도있따

// *******************객체가져오기 *****************************
const tagBox = document.querySelectorAll("section div");
const tagSection = document.querySelectorAll("section");
// console.log( tagSection );
const MAX_MAGIN = 400;

/* ***************함수정의 ************************************ */
const handlerScroll = () => {
  tagSection.forEach((elem) => {
    const sectionTop = elem.getBoundingClientRect().top;
    const boxObj = elem.children;
    // const boxObj = elem.childNodes;
    if( window.innerHeight > MAX_MAGIN+sectionTop){

      // for( let i=0; i<boxObj.length; i++){
      //   boxObj[i].classList.add('show');
      // }

      // boxObj.forEach((obj)=>{
      //   console.log( obj);
      // })

      Array.from(boxObj).forEach( (obj )=>{
        obj.classList.add('show');
        
      })
    }

    // 자식노드들을 묶은 자료형은 배열이아니다.(유사배열) 
    // console.log( Array.isArray(elem.children));    //false
    // console.log( Array.isArray(elem.childNodes));  // false : 하지만 childNodes는 노드리스트에서 foreach를 사용할수있도록 구현이되어있다(prototype으로 상속 받을수있음)

    
  });

  /* section별로 window.innerHeight값 보다 getBoundinG..Top값 + MAX_MAGIN값이 더 작아지면 section안에 div자식들이 브라우저에 어느위치에있건 한번에 class를 적용한다.
(그래서 div들을 감싼 부모 section에 위치값을 기준으로 지정함)
(view포트상단에 section이 가까워졌다는뜻 but,너무 가까워질때 말고 적정영역에 지정하기위해 임의에 변수애 값을400을더해 주었다) */
};

const init = () => {
  window.addEventListener("scroll", handlerScroll);
};

/******************윈도우에 dom구조가 로드가되면 ************** */
window.addEventListener("load", init);
