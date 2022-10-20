
    'use strict';
    //변수선언
    // const arrRandom = '3146';
    let arrRandom = '';   //랜덤한 4자리의 숫자를 단는 문자열

    //객체 선택-----------------------------------------------------------
    const tagForm = document.querySelector('form');
    const tagInput = document.querySelector('.input');
    const tagResult = document.querySelector('.result');

    
    //이벤트 등록----------------------------------------------------------
    tagForm.addEventListener('submit', (e)=>{
        e.preventDefault();   //Event.preventDefault() : Event.preventDefault()해당이벤트에대한 기본동작을 실행하지않도록하는 메서도

        if( checkInput(tagInput.value) ){  //사용자가 입력하면 4자리맞는지 검사하는 함수를 호출해 값이 true 이면
            //입력값을 체크
            let str = checkValue(tagInput.value);  // 입력한값을 검사하는 함수를 호출해 그 return값을 변수에담는다
            tagResult.append( str );    // 태그에 추가한다( 대입하는거랑은 다름 += 같은 역할)
            tagResult.append( document.createElement('br') );   
        }
    });

    //함수정의 ------------------------------------------------------------
    //랜덤한 숫자생성 함수
    const analysisNumber = ()=>{
        let answer = '';   /* 4개의 랜덤한 숫자를 문자열형식으로  저장 */
        while( answer.length < 4 ){
            let temp = Math.floor(Math.random()*10);  /* 0~9*/
            // if( !answer.includes(temp) )
            if( answer.includes(temp) == false ){
                answer+=temp;
            }
        }
        console.log( answer );
        return answer;
    }
    //사용자가 입력한숫자가 4개가맞는지 확인하는 함수
    const checkInput = (input) => {
        //길이가 4가인가?
        if( input.length !== 4 ){
            alert( '4자리 숫자를 입력하세요');
            return false;
        }
        return true;
    }
    // 입력한4개의숫자가 랜덤으로 생성된 숫자와 맞는지 확인하는 함수
    const checkValue = (answer) => {
        let strike = 0;   //각각의숫자가 인덱스와 값이 일치하ㅁ면
        let ball=0;       // 숫자는 맞지만 인덱스는 틀릴경우
        let out=0;
        for( let i=0 ; i<answer.length ; i++ ){
            const idx = arrRandom.indexOf( answer[i] );    // 입력한 4개의수가 정답4개의 숫자중에있는지 찾는다.
            if( idx > -1 ){       // 값이 없으면 -1을 반환하니까 정답이있다면 -1보다는 클것이다
                //일치하는 값이 있다.
                if( idx === i ) {   //찾은 인덱스가 입력한 수의 인덱스와 일치하면
                    strike++; 
                } else {  // 찾은 수는 있으나 입력한수의 인덱스와 정답수의 인데스가 다르면
                    ball++;
                }
            } else {
                //일치하는 값이 없다.
                out++;
            }
        }    
        return ( `strike=${strike}  ball=${ball}  out=${out}`);
    }

  
    analysisNumber();