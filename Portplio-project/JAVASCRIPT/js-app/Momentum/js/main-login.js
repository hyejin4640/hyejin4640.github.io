

const handlerSubmit =(e)=>{
  localStorageSet( LOGIN_KEY , tagLoginInput.value);
  tagLoginName.textContent = `HELLO ${localStorageGet(LOGIN_KEY)} 🙋‍♀️`;
}

const showUserName = ( userName )=>{
  tagLoginForm.classList.add('hidden');
  tagLoginName.classList.remove('hidden');
  tagLoginName.textContent = `HELLO ${userName} 🙋‍♀️`;
}


confirmLogin =()=>{
    // 로컬스토리지에 로그인이름이 저장되어있는지확인
  const userName = localStorageGet(LOGIN_KEY);
  if( userName ){
    // key ⭕
   showUserName( userName );
   btnLogin.classList.add('close');
   btnLoout.classList.remove('close');
  }else{
    // key ❌
    tagLoginForm.addEventListener('submit',handlerSubmit );
    btnLogin.classList.remove('close');
    btnLoout.classList.add('close');
  }
}

const handlerLogout =()=>{
  window.localStorage.clear();
  tagLoginName.innerHTML ='';
  tagTodoUl.innerHTML ='';
  tagLoginInput.value ='';
}

const init =()=>{

  time_init();
  confirmLogin();
  todoList_init();
  background_init();
  btnLoout.addEventListener('click',handlerLogout )
  
}
window.addEventListener('load',init);