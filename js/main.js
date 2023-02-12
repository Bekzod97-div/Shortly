const elLinkForm = document.querySelector('.js__link-form');
const elLinkResult = document.querySelector('.link-result');
const elFormContainer = document.querySelector('.form__container');
const elShortLink = document.querySelector('.short-link')

if(elLinkForm) {
  elLinkForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    elLinkResult.classList.add('link-result--open');
  });
}

if(elFormContainer) {
  elFormContainer.addEventListener('click', function(evt) {
    if (evt.target.matches('.js-short-link__copy-btn')) {
      // Change button text
      evt.target.textContent = 'Copied!';

      // Change button
      evt.target.classList.add('short-link__copy-btn--copied');

      // Copy short link to clipboard
      navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

      // Reset button text and class after 1 second
      setTimeout(function () {
        evt.target.textContent = 'Copy';
        evt.target.classList.remove('short-link__copy-btn--copied');
      }, 1000);
    };
  });
}
