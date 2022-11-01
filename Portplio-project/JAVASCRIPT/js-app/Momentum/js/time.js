
const setIntervalClock =()=>{
  let now_time = new Date();
  let hours = String(now_time.getHours()).padStart(2, "0"); // 시
  let minutes = String(now_time.getMinutes()).padStart(2, "0"); // 분
  let seconds = String(now_time.getSeconds()).padStart(2, "0"); // 초
  tagTime.textContent=`${hours}:${minutes}:${seconds}`;
}

const time_init =()=>{
  setIntervalClock();
setInterval(setIntervalClock, 1000);
}
