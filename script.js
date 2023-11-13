const listBtn = document.querySelector('#list-btn');
//const resetBtn = document.querySelector('#reset-btn');
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
  '#f9f9f9',
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

/* 표지 애니메이션 */

const dragging = document.getElementById('dragging');
const dragged = document.getElementById('dragged');
const dragPlace = document.getElementById('drag-place');
let originalX;

const calcRightValue = () => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const rightValue = Math.min(0.597916 * vw, 1.0629629 * vh) * -1;
  dragged.style.right = rightValue + 'px';
  originalX = rightValue;
};
calcRightValue();

window.addEventListener('resize', calcRightValue);

let isDragging = false;
let startX = originalX;

dragging.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    const afterX = originalX + startX - e.clientX;
    if (afterX > -1) afterX = -1;
    dragged.style.right = afterX + 'px';
  }
});

document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    dragged.style.right = originalX + 'px';
  }
});

/* 목차 클릭 이벤트 */
const indexListItems = document.querySelectorAll('.index-list-content');
indexListItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    showPage(index + 2);
  });
});

let ep1Select = null;
let ep2Select = null;
let ep3Select = null;
let ep4Select = null;
let ep5Select = {
  direction: null,
  anlge: null,
};
let ep6Select = null;
let ep8Select = null;

/* 선택 결과 보고서 */
const reportContainers = document.querySelectorAll('.tr-txt');
const ep1Opt = [
  `점심은&nbsp;<span style="color:#FE8800">한식</span>으로 먹을래`,
  `점심은&nbsp;<span style="color:#5B7D47">양식</span>으로 먹을래`,
];

const ep2Opt = [
  `샌드위치에서&nbsp;<span style="color:#A4C955">양상추</span>는 빼주세요`,
  `샌드위치에서&nbsp;<span style="color:#FA5D4E">베이컨</span>은 빼주세요`,
  `샌드위치에서&nbsp;<span style="color:#EA4232">토마토</span>는 빼주세요`,
  `샌드위치에서&nbsp;<span style="color:#FAB74C">치즈</span>는 빼주세요`,
  `샌드위치에서&nbsp;<span style="color:#A81D9C">양파</span>는 빼주세요`,
  `샌드위치에서&nbsp;<span style="color:#508827">오이</span>는 빼주세요`,
];
const ep3Opt = [
  `폰 케이스는&nbsp;<span style="color:#FBAD3E">주황색</span>이 좋겠어요`,
  `폰 케이스는&nbsp;<span style="color:#E1B24A">노란색</span>이 좋겠어요`,
  `폰 케이스는&nbsp;<span style="color:#B52928">빨간색</span>이 좋겠어요`,
  `폰 케이스는&nbsp;<span style="color:#FE918B">분홍색</span>이 좋겠어요`,
  `폰 케이스는&nbsp;<span style="color:#4E62A0">파란색</span>이 좋겠어요`,
  `폰 케이스는&nbsp;<span style="color:#2D7972">초록색</span>이 좋겠어요`,
];
const ep4Opt = [
  `캐릭터는&nbsp;<span style="color:#6848F5">보라색</span>으로 꾸며야겠어`,
  `캐릭터는&nbsp;<span style="color:#d12ebf">분홍색</span>으로 꾸며야겠어`,
  `캐릭터는&nbsp;<span style="color:#f52f4f">빨간색</span>으로 꾸며야겠어`,
  `캐릭터는&nbsp;<span style="color:#bf4a00">주황색</span>으로 꾸며야겠어`,
  `캐릭터는&nbsp;<span style="color:#7c6100">노란색</span>으로 꾸며야겠어`,
  `캐릭터는&nbsp;<span style="color:#008800">초록색</span>으로 꾸며야겠어`,
  `캐릭터는&nbsp;<span style="color:#006dd1">파란색</span>으로 꾸며야겠어`,
];
const ep6Opt = [
  `난&nbsp;<span style="color:#CCBE95">화이트 쿠키</span>&nbsp;편이야!`,
  `난&nbsp;<span style="color:#C29A6A">초코칩 쿠키</span>&nbsp;편이야!`,
  `난&nbsp;<span style="color:#E2B449">바나나 초코칩 쿠키</span>&nbsp;편이야!`,
  `난&nbsp;<span style="color:#789C2B">녹차맛 쿠키</span>&nbsp;편이야!`,
  `난&nbsp;<span style="color:#F37781">딸기 화이트초코칩 쿠키</span>&nbsp;편이야!`,
];
const ep8Opt = [
  `당신은 마스크 속에서&nbsp;<span style="color:#B03F61">무표정</span>이에요`,
  `당신은 마스크 속에서&nbsp;<span style="color:#D97433">웃어요</span>`,
  `당신은 마스크 속에서&nbsp;<span style="color:#258B6E">시무룩</span>해요`,
];

const updateReport = (ep, index) => {
  switch (ep) {
    case 1:
      reportContainers[0].innerHTML = ep1Opt[index];
      break;
    case 2:
      reportContainers[1].innerHTML = ep2Opt[index];
      break;
    case 3:
      reportContainers[2].innerHTML = ep3Opt[index];
      break;
    case 4:
      reportContainers[3].innerHTML = ep4Opt[index];
      break;
    case 6:
      reportContainers[5].innerHTML = ep6Opt[index];
      break;
    case 8:
      reportContainers[7].innerHTML = ep8Opt[index];
      break;
    default:
  }
};

/* 이미지 클릭 이벤트 */
const disableMap = (map) => {
  map.parentNode.removeChild(map);
};

const clickToInvisible = (ep, map, imgs) => {
  const maps = map.querySelectorAll('area');
  maps.forEach((element, index) => {
    element.addEventListener('click', () => {
      imgs[index].classList.add('opacity');
      disableMap(map);
      updateReport(ep, index);
    });
  });
};

// ep1
const ep1Imgs = document.querySelectorAll('.ep1-click');
const map1 = document.querySelector('map[name="image-map1"]');

clickToInvisible(1, map1, ep1Imgs);

// ep2
const ep2Imgs = document.querySelectorAll('.ep2-click');
const map2 = document.querySelector('map[name="image-map2"]');

clickToInvisible(2, map2, ep2Imgs);

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
      disableMap(map);
      updateReport(3, index);
    });
  });
};

changeCaseColor(map3, ep3Imgs);

// ep4
const ep4statue = document.querySelector('#ep4-statue');
const ep4mouse = document.querySelector('#ep4-mouse');
const ep4wrap = document.querySelector('.ep4');

const statueColorChange = [
  [0, 45, 90, 135, 163, 225, 315],
  ['#282959', '#592853', '#592828', '#593828', '#594e28', '#2b5928', '#283359'],
];
let ep4ColorIndex = 0;

const changeStatueColor = () => {
  if (ep4ColorIndex === statueColorChange[0].length - 1) ep4ColorIndex = -1;
  ep4statue.style.filter =
    'hue-rotate(' + statueColorChange[0][++ep4ColorIndex] + 'deg)';
  backgroundColor[currentPage] = statueColorChange[1][ep4ColorIndex];
  changeBackgroundColor(currentPage);
  updateReport(4, ep4ColorIndex);
  ep4wrap.classList.add('slow');
};
ep4mouse.addEventListener('click', changeStatueColor);

// ep5
const magnet = document.querySelector('#ep5-magnet');
const map5 = document.querySelector('map[name="magnet-map"]');
const root = document.documentElement;
let arrowAngle = -17.45;
const ep5value = [
  [-48, -28, -7, 6.34, 21, 32, 60],
  [
    'min(-1vw, -1.777vh)',
    'min(7vw, 12.444vh)',
    'min(15vw, 26.666vh)',
    'min(20.2vw, 35.91vh)',
    'min(32vw, 56.888vh)',
    'min(44vw, 78.22vh)',
    'min(53vw, 94.22vh)',
  ],
  [
    'min(34vw, 60.444vh)',
    'min(40vw, 71.111vh)',
    'min(44vw, 78.222vh)',
    'min(46.5vw, 82.667vh)',
    'min(45.5625vw, 82.6vh)',
    'min(39.44vw, 70.115vh)',
    'min(27.44vw, 48.796vh)',
  ],
  [-51, -36, -23, -17.45, 10, 42, 58],
];
let magnetIndex = 3;
const moveMagnet = (map) => {
  const maps = map.querySelectorAll('area');
  maps[0].addEventListener('click', () => {
    if (magnetIndex > 0) {
      console.log(0);
      magnetIndex -= 1;
      magnetUpdate();
    }
  });
  maps[1].addEventListener('click', () => {
    if (magnetIndex < 6) {
      console.log(1);
      magnetIndex += 1;
      magnetUpdate();
    }
  });
};
const magnetUpdate = () => {
  magnet.style.transform = `rotate(${ep5value[0][magnetIndex]}deg)`;
  magnet.style.top = ep5value[1][magnetIndex];
  magnet.style.left = ep5value[2][magnetIndex];
  arrowAngle = ep5value[3][magnetIndex];
  root.style.setProperty('--arrow-angle', `${arrowAngle}deg`);
  if (magnetIndex < 3)
    reportContainers[4].innerHTML = `인생의 방향은&nbsp;<span style="color: #F05052">왼쪽</span>으로&nbsp;<span style="color: #639EEA">약 ${
      ep5value[0][3] - ep5value[0][magnetIndex] - 0.34
    }°</span>`;
  else if (magnetIndex > 3)
    reportContainers[4].innerHTML = `인생의 방향은&nbsp;<span style="color: #F05052">오른쪽</span>으로&nbsp;<span style="color: #639EEA">약 ${
      ep5value[0][3] + ep5value[0][magnetIndex] - 0.34
    }°</span>`;
  else
    reportContainers[4].innerHTML = `인생은 역시&nbsp;<span style="color: #F05052">직진</span>이 아닐까?</span>`;
};

moveMagnet(map5);

// ep6
const ep6Imgs = document.querySelectorAll('.ep6-click');
const map6 = document.querySelector('map[name="image-map6"]');

clickToInvisible(6, map6, ep6Imgs);

// ep7
const ep7Imgs = document.querySelectorAll('.thread');
const map7 = document.querySelector('map[name="image-map7"]');

const clickToVisible = (map, imgs) => {
  const maps = map.querySelectorAll('area');
  maps.forEach((element, index) => {
    element.addEventListener('click', () => {
      imgs[index].classList.remove('opacity');
      reportContainers[6].innerHTML = `이렇게 해보는 건&nbsp;<span style="color: #0F156D">어때?</span>`;
    });
  });
};
clickToVisible(map7, ep7Imgs);

// ep8
const ep8Imgs = document.querySelectorAll('.ep8-click');
const map8 = document.querySelector('map[name="image-map8"]');

clickToInvisible(8, map8, ep8Imgs);

// 날짜
let today = new Date();
let tY = today.getFullYear();
let tM = today.getMonth() + 1;
let tD = today.getDate();
document.querySelector('#report-date').innerHTML =
  tY + '년 ' + tM + '월 ' + tD + '일 ';

//도움말
const helpWrap = document.querySelector('.help-wrap');
helpWrap.addEventListener('click', () => {
  toggleDisplay(helpWrap);
});
helpBtn.addEventListener('click', () => {
  toggleDisplay(helpWrap);
});
