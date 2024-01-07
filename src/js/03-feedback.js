import throttle from 'lodash.throttle';

const form = document.querySelector('.js-form');
const STORAGE_KEY = 'feedback-form-state';

function fillForm(form) {
  const storageValue = localStorage.getItem(STORAGE_KEY);
  if (storageValue) {
    const { email, message } = JSON.parse(storageValue);

    form.elements.email.value = email;
    form.elements.message.value = message;
  }
}

function saveFormValue(form) {
  const throttledSave = throttle(() => {
    const storageData = localStorage.getItem(STORAGE_KEY);
    const parsedData = storageData ? JSON.parse(storageData) : {};
    const formData = [...form.elements].reduce((acc, el) => {
      if (el.name) {
        acc[el.name] = el.value;
      }
      return acc;
    }, {});

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...parsedData, ...formData })
    );
  }, 500);

  form.addEventListener('input', throttledSave);
}

function handleSubmit(e) {
  e.preventDefault();
  const { email, message } = e.target.elements;

  console.log({ email: email.value, message: message.value });
  email.value = '';
  message.value = '';
  localStorage.removeItem(STORAGE_KEY);
}

fillForm(form);
saveFormValue(form);
form.addEventListener('submit', handleSubmit);
