const bookingButton = document.querySelector('.booking-button');
const bookingFormWrapper = document.querySelector('.booking-form-wrapper');
const bookingForm = bookingFormWrapper.querySelector('.booking-form');
const arrivalDate = bookingFormWrapper.querySelector('.arrival-date');
const dateOfDeparture = bookingFormWrapper.querySelector('.date-of-departure');
const adultInput = bookingFormWrapper.querySelector('.number-of-adult-input');
const childrenInput = bookingFormWrapper.querySelector('.number-of-children-input');

let isStorageAdult = true;
let storage = '';

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

bookingButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  bookingFormWrapper.classList.toggle('booking-form-hide');
  bookingFormWrapper.classList.toggle('booking-form-show');

  if (storageAdult || storageChildren) {
    adultInput.value = storageAdult;
    childrenInput.value = storageChildren;
  }

  arrivalDate.focus();
});

bookingForm.addEventListener('submit', function (evt) {
  if (!arrivalDate.value || !dateOfDeparture.value) {
    evt.preventDefault();

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
    }
  }
});
