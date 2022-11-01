const tagTodoForm = document.querySelector('#todoForm');
const tagTodoInput = document.querySelector('#todoForm input');
const tagTodoList = document.querySelector('.todoList');
const TODO_KEY ="todos";
let todos = [];


// 함수정의 -----------------------------------------------------------------------------------------------------
const saveLocalStorage =()=>{
  const strSave = JSON.stringify(todos);   /* 문자열로 변환 */
  localStorage.setItem(TODO_KEY , strSave );
  
  
} 

const saveTodos =( id, value )=>{
  const newObj = {
    id, 
    value,
  };
  todos.push( newObj );
  saveLocalStorage();
}

const handlerDelete =(e)=>{ 
  const delObj = e.target.parentElement;
const delId = delObj.id;
todos = todos.filter((item)=>{
  return item.id !== delId
})
delObj.remove();
saveLocalStorage();
}

const addTodoList =(id,value)=>{

// 태그 총 3개 생성 li > button,span 
const tagLi = document.createElement('li');
const tagbutton = document.createElement('button');
const tagspan = document.createElement('span');
// id를 1부터 순서대로 추가하기
tagLi.id = id;
// 버튼 이벤트 추가
tagbutton.addEventListener('click', handlerDelete );
// html 문서안에 추가
tagTodoList.appendChild(tagLi);
tagLi.appendChild(tagspan);
tagLi.appendChild(tagbutton);

// 컨텐츠 추가
tagspan.textContent = value;
tagbutton.textContent ='❌';
saveTodos( tagLi.id , value );

}

const handlerTodoSubmit =(e)=>{
  // submit 기본속성 작동x.
  e.preventDefault();
  // 입력받은값 문서에 작성 : id는 현재시간을 넣어준다.(함수를넣어준게아니라 return된 현재시간의값을 넣어줌)
  addTodoList(  Date.now() ,tagTodoInput.value );
  // input 입력창 reset
  tagTodoInput.value ='';
  
}

const todoList_init =()=>{
  // localstorage 값을 읽어오기
  const strRead = localStorage.getItem(TODO_KEY);
  if( strRead ){
    const obj = JSON.parse( strRead );
     obj.forEach(elem => {
      addTodoList( elem.id, elem.value );
     });
    
    
  }
  tagTodoForm.addEventListener('submit', handlerTodoSubmit );
}
todoList_init();



