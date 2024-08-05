const items = document.querySelectorAll('.faq__item');
const list = document.querySelector('.faq__list');

list.addEventListener('click', event => {
  const selectedItem = event.target.closest('.faq__item');
  if (!selectedItem) return;

  const answer = selectedItem.querySelector('.faq__answer');
  const itemImg = selectedItem.querySelector('.faq__icon');

  itemImg.src = answer.classList.contains('show')
    ? './assets/images/icon-plus.svg'
    : './assets/images/icon-minus.svg';

  answer.classList.toggle('show');

  items.forEach(item => {
    const itemAnswer = item.querySelector('.faq__answer');
    const itemImg = item.querySelector('.faq__icon');

    if (item !== selectedItem) {
      itemAnswer.classList.remove('show');
      itemImg.src = './assets/images/icon-plus.svg';
    }
  });
});
