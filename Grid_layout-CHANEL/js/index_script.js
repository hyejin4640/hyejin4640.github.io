(() => {
  // ********************** 객체정의 *******************************
  const tagMenuIcon = document.querySelector(".menu-icon");
  const tagMenuList = document.querySelectorAll(".menu-bar > ul > li");
  const tagSection = document.querySelectorAll("section");
  const tagNav = document.querySelector("nav.menu-bar");
  const tagMain = document.querySelector("main");
  // ********************** 함수정의 *******************************


  // 비트 AND, OR, XOR 연산자 사용하기 
  // 우선순위 :  삼항연산자 > 비트연사자 

  // const changeDisplay =()=>{
  //   const value = tagMenuIcon.style.opacity;
  //   let strValue = (value^'1');
  //   tagMenuIcon.style.opacity = ""+strValue;
  //   tagNav.classList.toggle("menu-off");
  //   tagMain.classList.toggle("menu-on");
  // }

  const getMenuIndex = (obj) => {
    const elem = obj.parentNode.children;
    for (let i = 0; i < elem.length; i++) {
      if (elem[i] === obj) {
        return i;
      }
    }
    return 0;
  };

  const handlerClickMenu = (e) => {
    const idx = getMenuIndex(e.currentTarget);
    // if (  idx < 0){idx = 0;}
    /* menu-icon display */
    tagMenuIcon.style.opacity = "1";
    tagMenuIcon.style.cursor = "pointer";
    // changeDisplay();
    /* menu-bar display  :메뉴바가 메뉴를 클릭하면 섹션이 화면에 꽉차게 표시되고 메뉴바는 사라지게 */
    tagNav.classList.add("menu-off"); //있으면삭제 ,없으면 추가
    /* section display */
    tagSection.forEach((elem) => {
      elem.classList.remove("on");
    });
    tagSection[idx].classList.add("on");
    /* main display  */
    tagMain.classList.remove("menu-on");
  };

  const handlerClickicon = () => {
    const value = tagMenuIcon.style.opacity;
    if (value == 0) {
      return;
    }
    tagMenuIcon.style.cursor = "inherit";
    // changeDisplay();
    tagMenuIcon.style.opacity = "0";
    tagNav.classList.toggle("menu-off");
    tagMain.classList.toggle("menu-on");
  };
  // ***************** 이벤트 등록 ************************************
  tagMenuList.forEach((elem) => {
    elem.addEventListener("click", handlerClickMenu);
  });

  tagMenuIcon.addEventListener("click", handlerClickicon);
})();
