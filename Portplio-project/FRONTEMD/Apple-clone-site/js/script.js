// 웹페이지 새로고침시...
const setCurrentScene = () => {
  yOffset = window.pageYOffset;
  let total = 0;
  for (let i = 0; i < sceneInfo.length; i++) {
    total += sceneInfo[i].scrollHeight;
    if (total >= yOffset) {
      currentScene = i;
      break;
    }
  }
};

// section의 높이값 설정
const setSecHeight = () => {
  for (let i = 0; i < sceneInfo.length; i++) {
    sceneInfo[i].scrollHeight = sceneInfo[i].heightCnt * window.innerHeight;
    sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + "px";
  }
  setCurrentScene();
};

// 섹션구간내에서 발생하는 애니메이션 값을 그려주는 함수.
const partAniPlay = (values, currentYOffset) => {
  let calc = 0;
  const scrollHeight =
    sceneInfo[currentScene].scrollHeight; /* 현재섹션의 높이값 */
  let scrollRatio =
    currentYOffset /
    scrollHeight; /* 현재섹션에서의 스크롤위치값을 비율로 바꾼값(0~1사이) */
  if (values.length >= 3) {
    // start,end 는 0-1사이로만든 비율의 전체 높이값을 기준으로 변환값
    const start =
      values[2].start *
      scrollHeight; /* 0~1사이의 0.2가 차지하는 비율과 전체높이값에서 0.2가차지하는비율만큼의 값은 얼마인지 알아내는식 */
    const end = values[2].end * scrollHeight; /* 0.3 */
    const partHeight = end - start; /* 선택구간 */
    const partRatio =
      (currentYOffset - start) /
      partHeight; /* 선택구간의(비율 0~1사이)서의 스크롤위치값 */
    if (currentYOffset >= start && currentYOffset <= end) {
      calc = partRatio * (values[1] - values[0]) + values[0];
    } else if (currentYOffset < start) {
      calc = values[0];
    } else if (currentYOffset > end) {
      calc = values[1];
    }
  } else {
    calc = scrollRatio * (values[1] - values[0]) + values[0];
  }
  return calc;
};

// 섹션내에 구간에서 파트별로 발생하는 애니메이션 설정
const sectionAniPlay = (prevHeight) => {
  const currentYOffset =
    yOffset -
    prevHeight; /* 현재섹션의 스크롤위치값 :  전체스크롤의 현재스크롤위치값 - 이전페이지들의 높이값*/
  let scrollRatio =
    currentYOffset /
    sceneInfo[currentScene]
      .scrollHeight; /*선택값 / 전체값 :  현재섹션에서의 위치값 / 현재섹션의 높이값 */
  // 현재섹셕의 스크롤 위치값(0~1사이의비율로)
  const tagObjs = sceneInfo[currentScene].objs;
  const values = sceneInfo[currentScene].values;
  switch (currentScene) {
    case 0: //section-0
      /* canvas load */
      let seq = Math.round(partAniPlay(values.images_seq, currentYOffset));
      if (seq < 0) {
        seq = 0;
      }
      tagObjs.context.drawImage(tagObjs.videoImages[seq], 0, 0);
      tagObjs.canvas.style.opacity = partAniPlay(
        values.canvas_opacity_out,
        currentYOffset
      );

      /* message show */
      // messageA
      if (scrollRatio <= 0.22) {
        tagObjs.msgA.style.transform = `translateY(${partAniPlay(
          values.msgA_position_in,
          currentYOffset
        )}px)`;
        tagObjs.msgA.style.opacity = partAniPlay(
          values.msgA_opacity_in,
          currentYOffset
        );
      } else {
        tagObjs.msgA.style.opacity = partAniPlay(
          values.msgA_opacity_out,
          currentYOffset
        );
        tagObjs.msgA.style.transform = `translateY(${partAniPlay(
          values.msgA_position_out,
          currentYOffset
        )}px)`;
      }
      //messageB
      if (scrollRatio <= 0.42) {
        tagObjs.msgB.style.transform = `translateY(${partAniPlay(
          values.msgB_position_in,
          currentYOffset
        )}px)`;
        tagObjs.msgB.style.opacity = partAniPlay(
          values.msgB_opacity_in,
          currentYOffset
        );
      } else {
        tagObjs.msgB.style.opacity = partAniPlay(
          values.msgB_opacity_out,
          currentYOffset
        );
        tagObjs.msgB.style.transform = `translateY(${partAniPlay(
          values.msgB_position_out,
          currentYOffset
        )}px)`;
      }
      //messageC
      if (scrollRatio <= 0.62) {
        tagObjs.msgC.style.transform = `translateY(${partAniPlay(
          values.msgC_position_in,
          currentYOffset
        )}px)`;
        tagObjs.msgC.style.opacity = partAniPlay(
          values.msgC_opacity_in,
          currentYOffset
        );
      } else {
        tagObjs.msgC.style.opacity = partAniPlay(
          values.msgC_opacity_out,
          currentYOffset
        );
        tagObjs.msgC.style.transform = `translateY(${partAniPlay(
          values.msgC_position_out,
          currentYOffset
        )}px)`;
      }
      //messageD
      if (scrollRatio <= 0.82) {
        tagObjs.msgD.style.transform = `translateY(${partAniPlay(
          values.msgD_position_in,
          currentYOffset
        )}px)`;
        tagObjs.msgD.style.opacity = partAniPlay(
          values.msgD_opacity_in,
          currentYOffset
        );
      } else {
        tagObjs.msgD.style.opacity = partAniPlay(
          values.msgD_opacity_out,
          currentYOffset
        );
        tagObjs.msgD.style.transform = `translateY(${partAniPlay(
          values.msgD_position_out,
          currentYOffset
        )}px)`;
      }

      break;
    case 1: //section-1
      break;
    case 2: //section-2
      // canvas load
      let seq2 = Math.round(partAniPlay(values.images_seq, currentYOffset));
      if (seq2 < 0) {
        seq2 = 0;
      }
      tagObjs.context.drawImage(tagObjs.videoImages[seq2], 0, 0);
      // messageA
      if (scrollRatio <= 0.22) {
        tagObjs.msgA.style.opacity = partAniPlay(
          values.msgA_opacity_in,
          currentYOffset
        );
        tagObjs.msgA.style.transform = `translateY(${partAniPlay(
          values.msgA_position_in,
          currentYOffset
        )}px)`;
      } else {
        tagObjs.msgA.style.opacity = partAniPlay(
          values.msgA_opacity_out,
          currentYOffset
        );
        tagObjs.msgA.style.transform = `translateY(${partAniPlay(
          values.msgA_position_out,
          currentYOffset
        )}px)`;
      }
      //messageB
      if (scrollRatio <= 0.42) {
        tagObjs.msgB.style.transform = `translateY(${partAniPlay(
          values.msgB_position_in,
          currentYOffset
        )}px)`;
        tagObjs.msgB.style.opacity = partAniPlay(
          values.msgB_opacity_in,
          currentYOffset
        );
      } else {
        tagObjs.msgB.style.opacity = partAniPlay(
          values.msgB_opacity_out,
          currentYOffset
        );
        tagObjs.msgB.style.transform = `translateY(${partAniPlay(
          values.msgB_position_out,
          currentYOffset
        )}px)`;
      }
      //messageC
      if (scrollRatio <= 0.62) {
        tagObjs.msgC.style.transform = `translateY(${partAniPlay(
          values.msgC_position_in,
          currentYOffset
        )}px)`;
        tagObjs.msgC.style.opacity = partAniPlay(
          values.msgC_opacity_in,
          currentYOffset
        );
      } else {
        tagObjs.msgC.style.opacity = partAniPlay(
          values.msgC_opacity_out,
          currentYOffset
        );
        tagObjs.msgC.style.transform = `translateY(${partAniPlay(
          values.msgC_position_out,
          currentYOffset
        )}px)`;
      }
      break;
    case 3: //section-3
      
      // 가로와 세로사이즈를 꽉차게하기 위해
      const widthRatio = document.body.offsetWidth / tagObjs.canvas.width; 
      const heightRatio =
        window.innerHeight / tagObjs.canvas.height; /* 선택값 / 전체 */
      let canvasRatio;
      if (widthRatio <= heightRatio) {
        //브라우저가 길게 가는경우
        canvasRatio = heightRatio;
      } else {
        canvasRatio = widthRatio;
      }
      tagObjs.canvas.style.transform = `scale(${canvasRatio})`;
      tagObjs.context.fillStyle = "gray";
      tagObjs.context.drawImage(tagObjs.videoImages[0], 0, 0);

      // 캔버스 사이즈에 맞춘 width , height
      const rectInnerWidth = document.body.offsetWidth / canvasRatio;
      const rectInnerHeight = window.innerHeight / canvasRatio;
      if (!values.rectStartY) {
        // values.rectStartY = tagObjs.canvas.getBoundingClientRect().top;  // 바운딩랙ㅌtop값은 스크롤을 빨리하면 값을 제대로 못가져옴. 
        values.rectStartY =   tagObjs.canvas.offsetTop +(tagObjs.canvas.height - tagObjs.canvas.height*canvasRatio)/2 ; // 
        const temp = sceneInfo[currentScene].scrollHeight;
        values.rectL[2].start = (window.innerHeight / 2 ) / temp; //비율 : 뷰포트의 중간정도에서시작하도록
        values.rectL[2].end = values.rectStartY / temp;
        values.rectR[2].start = (window.innerHeight / 2 ) / temp; //비율 : 뷰포트의 중간정도에서시작하도록
        values.rectR[2].end = values.rectStartY / temp;
      }
      const rectWidth = rectInnerWidth * 0.15; // 20%
      values.rectL[0] = (tagObjs.canvas.width - rectInnerWidth) / 2;
      values.rectL[1] = values.rectL[0] - rectWidth; // 오른쪽 네모칸 width 값 설정
      values.rectR[0] = values.rectL[0] + rectInnerWidth - rectWidth;
      values.rectR[1] = values.rectR[0] + rectWidth;

      // 그려주기
      tagObjs.context.fillRect(
        parseInt(partAniPlay(values.rectL, currentYOffset)),
        0,
        parseInt(rectWidth),
        tagObjs.canvas.height
      );
      tagObjs.context.fillRect(
        parseInt(partAniPlay(values.rectR, currentYOffset)),
        0,
        parseInt(rectWidth),
        tagObjs.canvas.height
      );
      // 맥북광고 이미지 고정
      if (scrollRatio < values.rectR[2].end) {
        // 캔버스에 닿기 전
        
        tagObjs.canvas.classList.remove("fixed");
      } else {
        // 캔버스에 닿은 후
        // 이미지가 바뀌어서 보여야 함.
       
        values.blendHeight[0] = 0;
        values.blendHeight[1] = tagObjs.canvas.height;
        values.blendHeight[2].start = values.rectR[2].end;
        values.blendHeight[2].end = values.blendHeight[2].start + 0.3;
        const blendH = partAniPlay(values.blendHeight, currentYOffset);
        tagObjs.context.drawImage(
          tagObjs.videoImages[1],
          0,
          tagObjs.canvas.height - blendH,
          tagObjs.canvas.width,
          blendH,
          0,
          tagObjs.canvas.height - blendH,
          tagObjs.canvas.width,
          blendH,

        );
        // 고정
        tagObjs.canvas.classList.add("fixed");
        tagObjs.canvas.style.top = `-${(tagObjs.canvas.height - tagObjs.canvas.height*canvasRatio)/2}px`;  // canvas에 지정한 scale때문에 fixed로 고정해도 화면세어  top:0에값이 보여지지않는다 그래서 스크롤된값만큼 빼줘서 top:0의 효과를 만든다
        
        // 고정해제 scale 지정
        if( scrollRatio > values.blendHeight[2].end){
            // 스케일이 작아지는 시점
            values.canvasScale[0] = canvasRatio;
            values.canvasScale[1] = canvasRatio * 0.7;
            values.canvasScale[2].start =  values.blendHeight[2].end;
            values.canvasScale[2].end =  values.canvasScale[2].start + 0.3;

            tagObjs.canvas.style.transform = `scale(${partAniPlay(values.canvasScale , currentYOffset)})`;
            tagObjs.canvas.style.marginTop =0;

        }
        //fixed 종료
        if( scrollRatio > values.canvasScale[2].end ){
            tagObjs.canvas.classList.remove('fixed');
            tagObjs.canvas.style.marginTop = `${sceneInfo[currentScene].scrollHeight*0.6}px`;
            
            //canvas and caption position
            values.canvasPosY[2].start =  values.canvasScale[2].end + 0.1;
            values.canvasPosY[2].end = values.canvasPosY[2].start + 0.2;
            tagObjs.desc.style.transform = `translateY(${partAniPlay(
                values.canvasPosY,
                currentYOffset
              )}px)`;
        }
    
    
    }
      break;
  }
};

//스크롤이 발생될 때 현재 보여지는 section 값을 가져오도록 함.
const handlerScroll = () => {
  yOffset = window.pageYOffset;
  let prevHeight = 0; /* 이전섹션의높이값이 더해지는 변수 */
  for (let i = 0; i < currentScene; i++) {
    /* currentScene : 0,1,2,3 */
    prevHeight += sceneInfo[i].scrollHeight;
  }
  if (yOffset > prevHeight + sceneInfo[currentScene].scrollHeight) {
    /* 이전높이값 + 현재높이값 보다 현재 스크롤값이 더크면++ */
    currentScene++;
  }
  if (yOffset < prevHeight) {
    /* 현재 스크롤위치값이 이전섹션높이값보다작으면--  */
    currentScene--;
  }
  document.body.setAttribute(
    "id",
    `show-section-${currentScene}`
  ); /* 각센셕의 sticky-msg를 보이게함 */
  sectionAniPlay(prevHeight);
};

// 이미지를 객체로가져와 배열안에 저장한다.
const setCavasImages = () => {
  let imgElem;
  let heightRatio; /* canvas사이즈비율 변수 */

  for (let j = 0; j < sceneInfo.length; j++) {
    // 섹션의 이미지가 설정되지않게하기위해 => imgCount의 값이 0이상인지 검사
    let count = sceneInfo[j].imgCount;
    if (count <= 0) continue;

    // 이미지들을 객체로 가져오기
    for (let i = 0; i < count; i++) {
      imgElem = new Image();
      imgElem.src = `./images/seq_${j}/${i}.jpg`;
      sceneInfo[j].objs.videoImages.push(imgElem);
    }

    // 각canvas의 사이즈 조정
    heightRatio =
      window.innerHeight /
      sceneInfo[j].objs.canvas.height; /* 선택된사이즈 / 전체 사이즈 */
    if (j === 3) {
      sceneInfo[j].objs.canvas.style.transform = `scale(${heightRatio})`;
    } else {
      sceneInfo[
        j
      ].objs.canvas.style.transform = `translate(-50%,-50%) scale(${heightRatio})`;
    }

    // canvas의 이미지중에 0번째 이미지로 업로드.
    sceneInfo[j].objs.videoImages[0].onload = () => {
      sceneInfo[j].objs.context.drawImage(
        sceneInfo[j].objs.videoImages[0],
        0,
        0
      );
    };
  }
};

// 메뉴를 스크롤에 따라 고정.
const menuPosCheck = (tagGlobalNav, tagLocalNav) => {
  const globalNavHeight = tagGlobalNav.clientHeight;
  if (yOffset > globalNavHeight) {
    tagLocalNav.classList.add("local-nav-fixed");
  } else {
    tagLocalNav.classList.remove("local-nav-fixed");
  }
};

const init = () => {
  //각각의 섹션의 height 설정
  setSecHeight();
  setCavasImages();
  //초기화
  window.addEventListener("scroll", () => {
    const tagGlobalNav = document.querySelector(".global-nav");
    const tagLocalNav = document.querySelector(".local-nav");
    handlerScroll();
    menuPosCheck(tagGlobalNav, tagLocalNav);
  });
};

window.addEventListener("load", init);
window.addEventListener("resize", setSecHeight);
