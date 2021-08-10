const playBtn = document.querySelector('.video__btn');
const playBtnBox = document.querySelector('.video__box-btn');
const videoPleyar = document.querySelector('.videoplayer');
if (playBtn) {
  playBtn.addEventListener('click', () => {
    playBtnBox.classList.add('hide');
  });
}