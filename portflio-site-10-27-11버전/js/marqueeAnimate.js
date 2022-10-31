
const tagTxtP1 = document.querySelector('.txt-flow > .txt-p1');
const tagTxtP2 = document.querySelector('.txt-flow > .txt-p2');

let txtFlowCount1 = 0;
let txtFlowCount2 = 0;

const textArr1 = 'HTML CSS JAVASCRIPT PYTHON FIGMA POTHOSOP WEBDEVELOPER FRONTEND BACKEND'.split(' ')
const textArr2 = 'WELLCOME TO MY WEBSITE THANKYOU FOR WATHING MY PORTFOLIO PROJECT'.split(' ')


function marqueeText(count, element, direction) {

  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0;
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
}

function animate() {
  txtFlowCount1++
  txtFlowCount2++

  txtFlowCount1 = marqueeText(txtFlowCount1, tagTxtP1, -1)
  txtFlowCount2 = marqueeText(txtFlowCount2, tagTxtP2, 1)


  window.requestAnimationFrame(animate)
}

const handlerMarqueeScroll = () => {
  txtFlowCount1 += 15
  txtFlowCount2 += 15

}



function initTexts(element, textArray) {
  textArray.push(...textArray)
  for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
  }
}

const marqueeText_init = () => {
  initTexts(tagTxtP1, textArr1)
  initTexts(tagTxtP2, textArr2)
  animate()
}

