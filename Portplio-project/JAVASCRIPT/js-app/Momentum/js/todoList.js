


const saveLocalStorage = () => {
  const strTodoList = JSON.stringify(todoListArr);
  localStorageSet(TODO_KEY, strTodoList );
};

const saveTodosArr = (id, value) => {
  const newobj = {
    id : String(id),  // 삭제하려는 요소의 id와 로컬스토리지에 저장된 오브젝트의 id의 데이터타입이 number/string으로 달라 오류발행으로인해 id를 로컬에 넣을때부터 stirig으로 변환함
    value,
  };
  todoListArr.push( newobj);
  saveLocalStorage();
};

const handlerDelete =(e)=>{
  const tagLi = e.currentTarget.parentNode;
  const tagLiId = tagLi.id;
  todoListArr = todoListArr.filter((item)=>{
    return item.id !== tagLiId;
  });  
  tagLi.remove();
  saveLocalStorage();
  
}

const createTodoListElem = (id, userTodo) => {  
  const Li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  tagTodoUl.appendChild(Li);
  Li.appendChild(span);
  Li.appendChild(button);

  Li.id = id;
  button.addEventListener('click', handlerDelete );
  span.textContent = userTodo ;
  button.textContent = `❌`;
  saveTodosArr(id, userTodo);
};

const handlerTodoSubmit = (e) => {
  e.preventDefault();
  const userTodo = tagTodoInput.value;
  createTodoListElem(Date.now(), userTodo);
};

const todoList_init = () => {
const ReadTodos = localStorageGet( TODO_KEY );
if( ReadTodos  ){
  const obj = JSON.parse( ReadTodos );
  obj.forEach(elem => {
    createTodoListElem( elem.id , elem.value );
  });
}
  tagTodoForm.addEventListener("submit", handlerTodoSubmit);
};
