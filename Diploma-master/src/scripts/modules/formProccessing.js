const checkValidValues = (inputEmail, inputName) => {
  const emailReg = /[а-яё ]/gi,
    nameReg = /[^а-яё ]/gi;

  inputEmail.value = inputEmail.value.replace(emailReg, '');
  inputName.value = inputName.value.replace(nameReg, '');
}

const cleanInputs = (form) => {
  form.querySelectorAll('input').forEach(input => {
    input.value = '';
  });
  form.querySelector('textarea').value = '';
}

const openRequest = (body, path) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200) {
      alert('Ваши данные успешно отправлены!');
      console.log('status: ', request.status);
    } else {
      alert('Произошла ошибка, попробуйте еще раз!');
      console.error('status: ', request.status);
    }
  });

  request.open('POST', path);
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(body));
}

const formProccessing = (formSelector, inputEmailSelector, inputNameSelector) => {
  const form = document.querySelector(formSelector);
  const inputEmail = document.querySelector(inputEmailSelector);
  const inputName = document.querySelector(inputNameSelector);

  form.addEventListener('input', (e) => {
    checkValidValues(inputEmail, inputName);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);

    let formData = new FormData(form);
    const body = {};
    formData.forEach((item, key) => {
      body[key] = item;
    });

    openRequest(body, '../src/server.php');
    cleanInputs(form);
  });
}

export default formProccessing;