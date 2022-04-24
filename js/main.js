const wrapper = document.querySelector('.app-projects__wrapper');
// console.log(wrapper);
const view = wrapper.querySelectorAll('.app-projects__view');
// console.log(view);
const arrowLeft = document.querySelector('.arrows__left');
const arrowRight = document.querySelector('.arrows__right');

function showOverlay() {
  const current = document.querySelector('.current');
  const overlay = current.querySelector('.view__overlay');
  overlay.classList.remove('none');
}

function hideOverlay() {
  const current = document.querySelector('.current');
  const overlay = current.querySelector('.view__overlay');
  overlay.classList.add('none');
}

function nextProject() {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add('current');
  } else {
    view[0].classList.add('current');
  }
}

function prevProject() {
  const current = document.querySelector('.current');
  current.classList.remove('current');
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add('current');
  } else {
    view[view.length - 1].classList.add('current');
  }
}

wrapper.addEventListener('mouseover', (e) => {
  showOverlay();
});

wrapper.addEventListener('mouseleave', (e) => {
  hideOverlay();
});

arrowRight.addEventListener('click', (e) => {
  nextProject();
});

arrowLeft.addEventListener('click', (e) => {
  prevProject();
});
