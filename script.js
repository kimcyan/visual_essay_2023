const listBtn = document.querySelector('#list-btn');
const resetBtn = document.querySelector('#reset-btn');
const helpBtn = document.querySelector('#help-btn');

const navWrap = document.querySelector('#nav-wrapper');
const navCloseBtn = document.querySelector('#nav-close-btn');
const navLists = document.querySelectorAll('.nav-list');

const mainWrap = document.querySelector('#main-wrapper');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const pageContents = document.querySelectorAll('.page-content');

let currentPage = 0;

let backgroundColor = [
  '#fe8800',
  'white',
  '#ad00fe',
  '#c62b29',
  '#ffe3be',
  '#282959',
  '#173bd1',
  '#218b59',
  '#3e48a7',
  '#314d57',
  '#aaa',
];

const toggleDisplay = (element) => {
  element.classList.toggle('invisible');
};
const changeBackgroundColor = (index) => {
  mainWrap.style.backgroundColor = backgroundColor[index];
};
const showPage = (index) => {
  pageContents[currentPage].classList.toggle('open');
  setTimeout(() => {
    pageContents[currentPage].classList.toggle('invisible');
    pageContents[index].classList.toggle('invisible');
    pageContents[index].classList.toggle('open');
    changeBackgroundColor(index);
    currentPage = index;
    togglePageBtnDisabled(currentPage);
  }, 200);
  setTimeout(() => {
    imageMapResize();
  }, 401);
};

listBtn.addEventListener('click', () => {
  toggleDisplay(navWrap);
});
navCloseBtn.addEventListener('click', () => {
  toggleDisplay(navWrap);
});
navLists.forEach((element, index) => {
  element.addEventListener('click', () => {
    showPage(index);
    toggleDisplay(navWrap);
  });
});

let canClick = true;
prevBtn.addEventListener('click', () => {
  if (canClick) {
    canClick = false;
    showPage(currentPage - 1);
    setTimeout(() => {
      canClick = true;
    }, 401);
  }
});
nextBtn.addEventListener('click', () => {
  if (canClick) {
    canClick = false;
    showPage(currentPage + 1);
    setTimeout(() => {
      canClick = true;
    }, 401);
  }
});

const togglePageBtnDisabled = (index) => {
  if (index === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  if (index === 10) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
};

/* 목차 클릭 이벤트 */
const indexListItems = document.querySelectorAll('.index-list-content');
indexListItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    showPage(index + 2);
  });
});

/* 이미지 클릭 이벤트 */
const disableMap = (map) => {
  map.parentNode.removeChild(map);
};

const clickToInvisible = (map, imgs) => {
  const maps = map.querySelectorAll('area');
  maps.forEach((element, index) => {
    element.addEventListener('click', () => {
      imgs[index].classList.add('invisible');
      disableMap(map);
    });
  });
};

// ep1
const ep1Imgs = document.querySelectorAll('.ep1-click');
const map1 = document.querySelector('map[name="image-map1"]');

clickToInvisible(map1, ep1Imgs);

// ep2
const ep2Imgs = document.querySelectorAll('.ep2-click');
const map2 = document.querySelector('map[name="image-map2"]');

clickToInvisible(map2, ep2Imgs);

// ep3
const ep3Imgs = document.querySelectorAll('.ep3-click');
const map3 = document.querySelector('map[name="image-map3"]');

const caseColorHue = [
  [0, 12, 335, 318, 183, 104],
  [348, 0, 325, 312, 163, 89],
  [24, 50, 0, 345, 223, 167],
  [28, 49, 9, 0, 228, 146],
  [155, 165, 132, 120, 0, 289],
  [206, 232, 196, 178, 63, 0],
];
const changeCaseColor = (map, imgs) => {
  const maps = map.querySelectorAll('area');
  maps.forEach((element, index) => {
    element.addEventListener('click', () => {
      for (i = 0; i < 6; i++) {
        imgs[i].style.filter = 'hue-rotate(' + caseColorHue[i][index] + 'deg)';
      }
    });
  });
};

changeCaseColor(map3, ep3Imgs);

// ep6
const ep6Imgs = document.querySelectorAll('.ep6-click');
const map6 = document.querySelector('map[name="image-map6"]');

clickToInvisible(map6, ep6Imgs);

// ep8
const ep8Imgs = document.querySelectorAll('.ep8-click');
const map8 = document.querySelector('map[name="image-map8"]');

clickToInvisible(map8, ep8Imgs);

/* 선택 결과 보고서 */
const reportTxts = document.querySelectorAll('.tr-txt');

// 날짜
let today = new Date();
let tY = today.getFullYear();
let tM = today.getMonth();
let tD = today.getDate();
document.querySelector('#report-date').innerHTML =
  tY + '년 ' + tM + '월 ' + tD + '일 ';
