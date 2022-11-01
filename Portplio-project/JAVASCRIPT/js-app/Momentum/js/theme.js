const THEME_KEY = "darkTheme";
const tagTheme = document.querySelector('.theme');

const handlerThemeClick =()=>{
  const htmlElem = document.documentElement;
  if( htmlElem.classList.contains('dark')){
    // dark 모드
    htmlElem.classList.remove('dark');
    window.localStorage.setItem(THEME_KEY,'false');
  }else{
    htmlElem.classList.add('dark');
    window.localStorage.setItem(THEME_KEY,'true');
  }
  
}

const theme_init=()=>{
  const saveTheme =  window.localStorage.getItem(THEME_KEY);
  if( saveTheme !== null ){
    if( saveTheme === 'true'){
      document.documentElement.classList.add('dark');
    }
  }
  tagTheme.addEventListener('click',handlerThemeClick );
}
theme_init();