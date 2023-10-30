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

const ep1Select = null;
const ep2Select = null;
const ep3Select = null;
const ep4Select = null;
const ep5Select = {
  direction: null,
  anlge: null,
};
const ep6Select = null;
const ep8Select = null;

/* 선택 결과 보고서 */
const reportContainers = document.querySelectorAll('.tr-txt');
const reportContents = [
  `점심은 ${ep1Select}으로 먹을래`,
  `샌드위치에서 ${ep2Select} 빼주세요`,
  `폰 케이스는 ${ep3Select}이 좋겠어요`,
  `캐릭터는 ${ep4Select}로 꾸며야겠어`,
  `인생의 방향은 <span class="color: #F05052">${ep5Select.direction}으로 <span class="color: #639EEA">약 ${ep5Select.angle}</span>`,
  `난 ${ep6Select} 편이야!`,
  `이렇게 해보는 건 <span class="color: #0F156D">어때?</span>`,
  `마스크 속 당신은 ${ep8Select}`,
];

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

// 날짜
let today = new Date();
let tY = today.getFullYear();
let tM = today.getMonth();
let tD = today.getDate();
document.querySelector('#report-date').innerHTML =
  tY + '년 ' + tM + '월 ' + tD + '일 ';
