window.onload = setupSlideshow;

const currentClass = 'home-slideshow__button--current';

function setupSlideshow() {
  const currentInputs = document.querySelectorAll('.hidden-input[type="radio"]');

  /* give all current slideshow buttons the active state */
  currentInputs.forEach(input => {
    let button = document.querySelector('[for="' + input.getAttribute('id') + '"]');
    if (input.checked) {
      button.classList.add(currentClass);
    }
    button.addEventListener('click', handleButtonState);
  });
}

function handleButtonState() {
  let button = this,
      buttons = document.querySelectorAll('[name="' + this.getAttribute('name') + '"]'),
      input = document.querySelector('#' + this.getAttribute('for'));

  buttons.forEach(button => {
    button.classList.remove(currentClass);
  });

  setTimeout(() => {
    if (input.checked) {
      button.classList.add(currentClass);
    } else {
      button.classList.remove(currentClass);
    }
  });
}
