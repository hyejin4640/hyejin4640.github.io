/* 로컬스토리지 key  */
const LOGIN_KEY = "username";
const TODO_KEY = "todos";

/* login  */
const tagTime = document.querySelector('.time');
const tagLoginName = document.querySelector('.login-name');
const tagLoginInput = document.querySelector('#loginForm > input');
const tagLoginForm = document.querySelector('#loginForm');
const btnLogin = document.querySelector('#loginForm > button');
const btnLoout = document.querySelector('.logout');

/* todoList  */
let todoListArr =[];
const tagTodoForm = document.querySelector('#todoForm');
const tagTodoInput = document.querySelector('#todoForm > input');
const tagTodoUl = document.querySelector('.todoList');


/* bg */
const tagbgDesc = document.querySelector('.bg_desc');


/* mail */
const tagWrap = document.querySelector('.wrap');
const tagMailWrap = document.querySelector('.mailWrap');
const tagMailIcon = document.querySelector('.fa-envelope')
const btnMailclose = document.querySelector('.xbtn')