const ACCESS_KEY = "kWuw6vg9fc9Hehd5aeURFw-qECbF9kvWI91pLfqrzMY";
// const img_url = `https://api.unsplash.com/photos/random?query=landscape&client_id=${ACCESS_KEY}`;
// const img_url = "https://kyung0446.github.io/json/image_unsplash.json";
const img_url = "image_unsplash.json";



// 함수정의 -----------------------------------------------------------------------------------


const changeBgDesc =( desc, user , country  )=>{
  const tagBgDesc=  document.querySelector(".bg_desc");
  tagBgDesc.textContent = `${desc},${user},${country}`;
}


const changeBgImage = (imgUrl) => {
  document.body.style.backgroundImage = `linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2)) , url(${imgUrl})`;
};


const getRandomIdx = (data)=>{
  const idx= Math.floor(Math.random() * data.length);
  changeBgImage(data[idx].urls.full);
  changeBgDesc( data[idx].alt_description ,data[idx].location.name ,data[idx].location.country);
 }


const background_init = () => {
  fetch(img_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      getRandomIdx(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
background_init();

// 저작권 참고:  description ,name ,city ,country //
