let position = 0;
const slidersToShow = 1;
const slidersToScroll = 1;
const container = document.querySelector('.carousel__container');
const track = document.querySelector('.carousel__track');
const items = document.querySelectorAll('.carousel__item');
const btnPrev = document.querySelector('.carousel__button_prev');
const btnNext = document.querySelector('.carousel__button_next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidersToShow;
const movePosition = slidersToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount - (Math.abs(position) + slidersToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidersToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidersToScroll ? movePosition : itemsLeft * itemWidth;

  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
}

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidersToShow) * itemWidth;
};

checkBtns();



