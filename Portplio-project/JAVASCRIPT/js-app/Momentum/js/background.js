const img_url = "image_unsplash.json";

const drawBgDesc = (desc, user, country) => {
  tagbgDesc.textContent = `${desc},${user},${country}`;
};
const drawBackImg = (imgUrl) => {
  document.body.style.backgroundImage = `url(${imgUrl})`;
};

const randomIdx = (data) => {
  const idx = Math.floor(Math.random() * data.length);
  drawBackImg(data[idx].urls.full);
  drawBgDesc(
    data[idx].alt_description,
    data[idx].location.name,
    data[idx].location.country
  );
};

const background_init = () => {
  fetch(img_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      randomIdx(data);
    })
    .catch((error) => {
      console.log(error);
    });
};


