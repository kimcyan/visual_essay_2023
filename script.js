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
  'white',
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
      imageMapResize();
    }, 401);
  }
});
nextBtn.addEventListener('click', () => {
  if (canClick) {
    canClick = false;
    showPage(currentPage + 1);
    setTimeout(() => {
      canClick = true;
      imageMapResize();
    }, 401);
  }
});

const togglePageBtnDisabled = (index) => {
  if (index === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  if (index === 11) {
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

/* ep1 */
const ep1Img1 = document.querySelector('#ep1-1');
const ep1Img1dash1 = document.querySelector('#ep1-1-1');
const ep1Img2 = document.querySelector('#ep1-2');
const map1 = document.querySelector('map[name="image-map1"]');

const clickEp1Map1 = () => {
  console.log('click');
  ep1Img1.classList.add('invisible');
  ep1Img1dash1.classList.add('invisible');
  disableMap(map1);
};
const clickEp1Map2 = () => {
  console.log('click');
  ep1Img2.classList.add('invisible');
  disableMap(map1);
};

/* ep2 */
const ep2Imgs = document.querySelectorAll('.ep2-click');
