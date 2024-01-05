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
  form.addEventListener('input', ({ target: { name, value } }) => {
    const storageData = localStorage.getItem(STORAGE_KEY);
    const parsedData = storageData ? JSON.parse(storageData) : {};

    const formData = {
      [name]: value,
    };
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...parsedData, ...formData })
    );
  });
}

fillForm(form);
saveFormValue(form);
