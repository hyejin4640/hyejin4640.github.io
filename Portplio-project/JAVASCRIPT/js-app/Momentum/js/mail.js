const handlerMailClick =()=>{
  tagWrap.classList.add('close');
  tagMailWrap.classList.remove('close');
}
const handlerCloseClick =()=>{
  tagWrap.classList.remove('close');
  tagMailWrap.classList.add('close');
}
tagMailIcon.addEventListener('click',handlerMailClick);
btnMailclose.addEventListener('click', handlerCloseClick);
