
const tagTime = document.querySelector(".time");

// let time = 300;
// const timer =()=>{
//     time--;
//     tagTime.textContent =`${Math.trunc(time/60)}:${time%60}`; 
// if ( time <= 0){
  
//   tagTime.textContent = '종료';
// }
// }
// timer();
// setInterval(timer , 1000);


const clock_init = () => {
  let now_time = new Date();
  let hours = String(now_time.getHours()).padStart(2, "0"); // 시
  let minutes = String(now_time.getMinutes()).padStart(2, "0"); // 분
  let seconds = String(now_time.getSeconds()).padStart(2, "0"); // 초
  tagTime.textContent = `${hours}:${minutes}:${seconds}`;
};
clock_init();
setInterval(clock_init, 1000);
