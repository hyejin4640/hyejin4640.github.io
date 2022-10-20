(function () {
  "use strict";

  /** 객체 가져오기 ************************************************************************/
  const tagNumber = document.querySelectorAll(".num");
  const tagOp = document.querySelectorAll(".op");
  const tagAc = document.querySelector(".ac");
  const tagEquals = document.querySelector(".equals");
  const tagInput = document.querySelector("input");
  let num1 = ""; //문자형으로 입력받아야 연산이아직 안되상태로 화면에 출력하기위해
  let num2 = "";
  let op = "";
  let inputCalc = "";
  let isChange = false; // chageNumber()를 실행된 건지 아닌건지

  /** 함수정의 ********************************************************************************/
  // 화면에 출력해주는 함수
  // 공통적으로 사용하는 함수를 정의할땐 매개변수로 전달되는 값을받아 공통되는 연산을 처리해준다.
  const chageNumber = (result)=>{
    num1 = inputCalc = '' + result;
    num2 = op = '';
    isChange =true;
  }
  const displayCalc =(display)=>{
    inputCalc += display;
    tagInput.value = inputCalc; 
  }
// 숫자버튼을 클릭하면 변수에 담는 함수
const onClickNumber = (event)=>{
  if( num1 && op ){
    num2 += event.target.textContent;
  }else{
    if( isChange ) {
      //변경이 된 상태
      onClickAC();
      isChange = false;
  }
    op='';
    num1 += event.target.textContent;
  }
  displayCalc(event.target.textContent);
}
// 연산자 버튼을 클릭하며 변수에 담는함수
const onClickOperator = (event)=>{

  if(num1){
    if(op){
      onClickEquals();
    }
    op = event.target.textContent;
    displayCalc(event.target.textContent);
  }else{
    op='';
    alert('숫자를 먼저입력하세요')
  }
}
// 초기화함수
// 입력값 , 출력값을 모두 삭제하는 함수
// 결국 입력 -> 연산-> 출력
// 위에 과정에서 데이터가 들어와서 데이터를 가공해서 데이터를 출력하는것이니까 그데이터를 삭제하면된다
const onClickAC =()=>{
  inputCalc=num1=num2=op='';  //변수들에 공백넣어 데이터를 초기화
  displayCalc('');//화면에 출력하는 함수에 공백넣어 화면을초기화
}
// op 변수로 구분해 수식을 나열해 연산하기 but, num2 에 값이있다면!(왜 num2냐면 연산식가장마지막필요변수이니까 변수가 가차면 연산하면되니까)
// = 버튼을 클릭하면 op 변수를 구분해 수식을 세워 연산하는함수
const onClickEquals =()=>{
  
  if(num2){
    let value1 = parseInt(num1);
    let value2 = parseInt(num2);
    let result = 0;
  switch (op){
    case "+":  result = value1 + value2;
      break;
    case "-":  result = value1 - value2;
      break;
    case "*":  result = value1 * value2;
      break;
    case "/":  result = value1 / value2;
      break;
    default: alert('수식이 잘못되었습니다')
      // 초기화함수실행
      break;
  }
  displayCalc(`= ${result}`);
  chageNumber(result);
  }
}
  /** 이벤트 등록 ***********************************************************************/
 tagNumber.forEach(item => item.addEventListener('click',onClickNumber));
 tagOp.forEach((item)=>{item.addEventListener('click',onClickOperator)});
 tagEquals.addEventListener('click',onClickEquals);
 tagAc.onclick = onClickAC;


})();
