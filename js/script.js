const bookingButton = document.querySelector('.booking-button');
const bookingFormWrapper = document.querySelector('.booking-form-wrapper');
const bookingForm = bookingFormWrapper.querySelector('.booking-form');
const arrivalDate = bookingFormWrapper.querySelector('.arrival-date');
const dateOfDeparture = bookingFormWrapper.querySelector('.date-of-departure');
const adultInput = bookingFormWrapper.querySelector('.number-of-adult-input');
const childrenInput = bookingFormWrapper.querySelector('.number-of-children-input');

const map = document.querySelector('.map');

let isStorageAdult = true;
let storageAdult = '';

let isStorageChildren = true;
let storageChildren = '';

try {
  storageAdult = localStorage.getItem("adult");
} catch (err) {
  isStorageAdult = false;
}

try {
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageChildren = false;
}

bookingFormWrapper.classList.add('booking-form-hide');
map.classList.add('map-index');

bookingButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  bookingFormWrapper.classList.toggle('booking-form-hide');
  bookingFormWrapper.classList.toggle('booking-form-show');
  bookingFormWrapper.classList.remove('booking-form-error');
  map.classList.toggle('map-index');

  if (storageAdult || storageChildren) {
    adultInput.value = storageAdult;
    childrenInput.value = storageChildren;
  }

  arrivalDate.focus();
});

bookingForm.addEventListener('submit', function (evt) {
  if (!arrivalDate.value || !dateOfDeparture.value) {
    evt.preventDefault();

    bookingFormWrapper.classList.remove('booking-form-error');
    bookingFormWrapper.offsetWidth = bookingFormWrapper.offsetWidth;
    bookingFormWrapper.classList.add('booking-form-error');

  } else {
    if (isStorageAdult) {
      localStorage.setItem('adult', adultInput.value);
      localStorage.setItem('children', childrenInput.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (bookingFormWrapper.classList.contains('booking-form-show')) {
      evt.preventDefault();
      bookingFormWrapper.classList.remove('booking-form-show')
      bookingFormWrapper.classList.add('booking-form-hide');
      bookingFormWrapper.classList.remove('booking-form-error');
      map.classList.toggle('map-index');
    }
  }
});
