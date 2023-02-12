const elLinkForm = document.querySelector('.js__link-form');
const elLinkResult = document.querySelector('.link-result');

elLinkForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  elLinkResult.classList.add('link-result--open');
})