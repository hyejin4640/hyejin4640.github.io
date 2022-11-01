const tagNavMenu = document.querySelector(".nav-menu");
const tagNavBar = document.querySelector(".nav-bar");
const tagHello = document.querySelector(".hello");
const tagMiniContainer = document.querySelector(".mini-contents");
const btns = document.querySelector(".mini-btn-wrap");
const tagWebWraps = document.querySelectorAll(".web-wrap");
const tagWebH1 = document.querySelector(".web-h1");
const sections = document.querySelectorAll('section');
const minusHeight = 100;


// json파일로부터 패치API를 사용해 받아온다.
const loadProjectData = async () => {
  const reponse = await fetch("./data/data.json");
  const json = await reponse.json();
  return json.project;
};

// 뷰포트의 max-width:768일때 메뉴바와 메뉴의 위치를 정하는 함수
const handlerNavBarClick = (e) => {
  tagNavMenu.classList.toggle("nav-open");
};

// 메뉴 fiexd
const handlerNavFixed = (scrollTop) => {
  const Nav = document.querySelector('nav');
  if (scrollTop > Nav.offsetHeight) {
    Nav.classList.add('fixed')
  } else {
    Nav.classList.remove('fixed')
  }
}

// 소개멘트의 애니메이션 함수
const introTxtAnimate = () => {
  new TypeIt(".hello", {
    speed: 50,
    startDelay: 600,
  }).go();
};

// json파일로 읽어온 데이터를 바탕으로 요소생성
const createElement = (item) => {
  const tagA = document.createElement("a");
  const tagImg = document.createElement("img");
  const tagdiv = document.createElement("div");
  const tagH4 = document.createElement("h4");

  tagA.classList.add("mini-content");
  tagImg.classList.add("mini-img");
  tagdiv.classList.add("mini-desc");
  tagH4.classList.add("mini-desc-h4");

  tagA.setAttribute("data-type", item.type);
  tagA.href = item.siteURL;
  tagImg.src = item.image;
  tagImg.alt = item.alt;
  tagH4.textContent = `click this project!`;

  tagdiv.append(tagH4);
  tagA.append(tagImg);
  tagA.append(tagdiv);
  return tagA;
};

// Make the items matching {key: value} invisible.
function updateItems(items, key) {
  tagMiniContainer.classList.add("anim-out");

  setTimeout(() => {
    items.forEach((item) => {
      if (item.dataset["type"] === key) {
        item.classList.remove("invisible");
      } else {
        item.classList.add("invisible");
      }
      if (key === "all") {
        item.classList.remove("invisible");
      }
    });
    tagMiniContainer.classList.remove("anim-out");
  }, 300);
}

// Handle button click
function onBtnClick(event, items) {
  const target = event.target;
  const filter = target.dataset.filter;
  const btnChild = btns.children;
  if (filter == null) {
    return;
  }
  Array.from(btnChild).forEach((v) => {
    v.classList.remove("backgroundIn");
  });
  target.classList.add("backgroundIn");
  updateItems(items, filter);
}

// 스크롤시 요소들이 지정한 위치에 등장하면 위치값과 opacity의 변화를 주는 애니메이션
const handlerScrollPosAni = () => {
  const webH1ScrollTop = tagWebH1.getBoundingClientRect().top;

  // web-h1
  if (webH1ScrollTop < window.innerHeight) {
    tagWebH1.style.animation = `slide-top 0.4s ease-in`;
  }
  //web-wraps
  tagWebWraps.forEach((elem, idx) => {
    const elemScrollTop = elem.getBoundingClientRect().top;
    const tagVideo = elem.childNodes[3].childNodes[1].childNodes[1].childNodes[1];
    if (idx % 2 === 0 && elemScrollTop < window.innerHeight - minusHeight) {
      elem.classList.add('web-slide-left');
    }
    if (idx % 2 !== 0 && elemScrollTop < window.innerHeight - minusHeight) {
      elem.classList.add('web-slide-right');
    }

  });
}

const removeClass = () => {
  const liList = tagNavMenu.children;
  Array.from(liList).forEach((elem) => {
    elem.classList.remove('navOn');
  })
}


const handlerScrollNavOn =( scrollTop)=>{
  const headerH = document.querySelector('header').offsetHeight;
  const txtFlowH = document.querySelector('.txt-flow-wrap').offsetHeight;
  const headersHeight = headerH+txtFlowH;

  if( scrollTop > headersHeight ){
    sections.forEach((elem ,idx )=> {
      const elemTop = elem.getBoundingClientRect().top;
      if( elemTop <= window.innerHeight/2){
       removeClass()
        tagNavMenu.children[idx+1].classList.add('navOn');
      }
    });
  }else{
    //section의 영역이아니라면 메뉴활성화 시키지않음
    removeClass();
    return;
  }
  
  
}


const init = () => {
  introTxtAnimate();
  marqueeText_init();

  loadProjectData().then((items) => {
    const elements = items.map(createElement);
    tagMiniContainer.append(...elements);
    btns.addEventListener("click", (event) => onBtnClick(event, elements));
  });

  tagNavBar.addEventListener("click", handlerNavBarClick);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY
    handlerNavFixed(scrollTop)
    handlerMarqueeScroll();
    handlerScrollPosAni();
    handlerScrollNavOn( scrollTop );
  });
  // 새로고침시 최상단으로 복원
  // history.scrollRestoration = "manual";
};
window.addEventListener("load", init);
