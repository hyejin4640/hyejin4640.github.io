// card 12 개생성 - wrap안에 위치
// card-f, card-b 를 생성 - card 안에 위치
"use strict";

const $wrap = document.querySelector('#wrap');
const TOTAL = 12;
let color_list = [];
let currentIdx = 0;
let choiceCard =[];
let sucess = 0;



const randomColor = () =>{
  const color = ['red', 'purple' , 'yellow','pink','aqua','green'];
  const totalcolors = color.concat(color);
  for ( let i=0; i<TOTAL; i++){    
    const pick = Math.floor(Math.random()*totalcolors.length);
    color_list.push( totalcolors[pick]);
    totalcolors.splice(pick,1);
  }
}

/* color=none 은 매개변수가 들어오지않을때 기본값으로 설정함 */
const createDiv =( divClass, color="none" )=>{
  const divElem = document.createElement('div');
  divElem.classList.add( divClass );
  divElem.style.backgroundColor = color;
  return divElem;   //return : 함수를 호출한곳으로 다시 값을 가지고 되돌아간다.
}


const fn_clickCard =( event )=>{
  
  const obj = event.currentTarget;
  obj.classList.add('open'); 
  
  choiceCard.push( obj );
  if( choiceCard.length < 2 ){
    return;  // 2개의 요소가 들어와있지않으면 return
   }   
  // 색깔이 같은지 틀린지를 확인
  const first = choiceCard[0].querySelector('.card-front').style.backgroundColor;
  const second = choiceCard[1].querySelector('.card-front').style.backgroundColor;
  if ( first === second){
    //같은색상의 카드 선택
    sucess ++;
    if( sucess >= (TOTAL/2) ){
     setTimeout(() => {
      alert('축하합니다 게임이 끝났습니다!');
      init();
     }, 900);
    }
  }else{
    //다른색상의 카드 선택
    choiceCard.forEach((v)=>{
      setTimeout(() => {
        v.classList.remove('open')
      }, 900);
    //다시 원상복귀해야하니까
    })
  }
  // 선택된카드를 초기화( 배열에담긴 값들을 초기화)
  choiceCard =[];
}


const creatCardElem = ()=>{
  for(let i=0; i< TOTAL; i++){
    const front = createDiv( 'card-front' , color_list[i] );   //함수안에서 return 값이있으니까 반환된 즉 생성된 태그가 변수에 저장됨.
    const back = createDiv( 'card-back', 'blue' );
    const card = createDiv( 'card' );
    card.appendChild(front);  
    card.appendChild(back);    //파랑
    $wrap.appendChild(card);
    card.addEventListener('click', fn_clickCard );    
  }
}

/* 3초있다가 원래 상태로 복귀 모든 카드의 back이 보이게 */
const startCardGame =()=>{
  setTimeout(() => {
    document.querySelectorAll('.card').forEach(v =>{
      v.classList.remove('open');
    })
  }, 4000);
}

/* 시작하자마자 카드의 앞면을 보이게  */
const startCardRotate =()=>{
  document.querySelectorAll('.card').forEach((v,i) => {
    setTimeout(()=>{
      v.classList.add('open');
    }, 1000+(200 * i))
  });
  startCardGame();

}

const init =()=>{
  color_list = [];
  choiceCard = [];
  sucess = 0;
  $wrap.innerHTML ='';
  let elem = $wrap.childNodes;    
  randomColor();   /* 카드색을 리스트안에있는 12개의 색중에서 랜덤색 지정 함수 */
  creatCardElem();  /* 카드의 앞,뒤 태그와 감싸는 부모태그를 생성하는 함수  */
  startCardRotate();  /* 프로그램이 실행됨과 동시게 카드를 다 뒤집어 주면서 보여주는 함수 */
}

init();

