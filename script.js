const checkmark = document.querySelector('.checkmark');
checkmark.addEventListener('click', () => {
  checkmark.classList.toggle('checked');
});

const lostPassword = document.querySelector('.forgotten-password p');
lostPassword.addEventListener('click', () => {
  alert('You are retarded');
});
