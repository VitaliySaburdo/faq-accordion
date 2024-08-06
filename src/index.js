import plusIcon from './assets/images/icon-plus.svg';
import minusIcon from './assets/images/icon-minus.svg';

const items = document.querySelectorAll('.faq__item');
const list = document.querySelector('.faq__list');

const toggleAnswer = selectedItem => {
  const answer = selectedItem.querySelector('.faq__answer');
  const itemImg = selectedItem.querySelector('.faq__icon');

  itemImg.src = answer.classList.contains('show') ? plusIcon : minusIcon;
  answer.classList.toggle('show');

  items.forEach(item => {
    const itemAnswer = item.querySelector('.faq__answer');
    const itemImgInsideLoop = item.querySelector('.faq__icon');

    if (item !== selectedItem) {
      itemAnswer.classList.remove('show');
      itemImgInsideLoop.src = plusIcon;
    }
  });
};

list.addEventListener('click', event => {
  const selectedItem = event.target.closest('.faq__item');
  if (!selectedItem) return;
  toggleAnswer(selectedItem);
});

list.addEventListener('keydown', event => {
  const selectedItem = document.activeElement.closest('.faq__item');
  if (!selectedItem) return;

  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault();
      toggleAnswer(selectedItem);
      break;
    case 'ArrowDown':
      event.preventDefault();
      const nextItem = selectedItem.nextElementSibling;
      if (nextItem) nextItem.focus();
      break;
    case 'ArrowUp':
      event.preventDefault();
      const prevItem = selectedItem.previousElementSibling;
      if (prevItem) prevItem.focus();
      break;
  }
});
