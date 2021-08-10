window.addEventListener('DOMContentLoaded', () => {
  const questionItemsBox = document.querySelectorAll('.questions-item');
  questionItemsBox.forEach(item => {
    const questionBox = item.querySelector('.questions-item__box');
    item.classList.contains('questions--opened') ? questionBox.style.maxHeight = questionBox.scrollHeight + 'px' : '';
    item.addEventListener('click', (e) => {
      let target = e.currentTarget;
      console.log(target);
      const contentQuestion = target.querySelector('.questions-item__box');
      target.classList.toggle('questions--opened');
      if (target.classList.contains('questions--opened')) {
        contentQuestion.style.maxHeight = contentQuestion.scrollHeight + 'px';
      } else {
        contentQuestion.style.maxHeight = null;
      }
    })
  })
});