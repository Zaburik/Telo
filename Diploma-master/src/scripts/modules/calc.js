const calc = (mainContainerSelector, optionsParentSelector, radioBtnParentSelector, outputSelector) => {

  let optionsParent = document.querySelector(optionsParentSelector);
  let mainContainer = document.querySelector(mainContainerSelector);
  let radioBtnParent = document.querySelector(radioBtnParentSelector);
  let output = document.querySelector(outputSelector);

  // variables for formula
  let customersAmount = parseInt(optionsParent[optionsParent.selectedIndex].value),
    term = 3,
    x,
    result = 3000;

  mainContainer.addEventListener('change', (e) => {

    customersAmount = parseInt(optionsParent[optionsParent.selectedIndex].value); // количество пользователей

    radioBtnParent.childNodes.forEach((item) => {
      if (item.checked) {
        term = parseInt(item.value); // сроки в днях (цифрой) 
      }
    });

    const coutResult = (x) => {
      result = customersAmount * term * 1000 * x;
    }

    const decreaseResult = () => {
      result -= result * 10 / 100;
    }

    switch(customersAmount) {
      case 2:
        x = 19/20;
        break;

      case 3:
        x = 0.9;
        break;

      case 5:
        x = 0.9;
        break;

      case 7:
        x = 6/7;
        break;

      case 10:
        x = 0.8;
        break;

      default:
        x = 1;
    }

    if (!isNaN(customersAmount)) {
      coutResult(x);
      if (term === 12) {
        coutResult(x);
        decreaseResult();
      }
    } else {
      result = 10 * term * 1000 * x;
      if (term === 12) {
        result = 10 * term * 1000 * x;
        decreaseResult();
      }
    }

    output.textContent = result;
  });


}

export default calc;