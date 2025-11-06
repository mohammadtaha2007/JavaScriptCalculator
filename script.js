let result = document.getElementById("result");

let inputNum = (num) => {
  result.innerHTML += num;
};

let NumberCalc = () => {
  result.innerHTML = eval(result.innerHTML);
};

let AC = () => {
  result.innerHTML = "";
};

let C = () => {
    result.innerHTML = result.innerHTML.slice(0,-1);
}

function toggleSign() {
  if (result.innerHTML.startsWith('-')) {
    result.innerHTML = result.innerHTML.slice(1);
  } else if (result.innerHTML !== '') {
    result.innerHTML = '-' + result.innerHTML;
  }
}

function sqrt() {
  if (result.innerHTML !== '') {
    let value = eval(result.innerHTML);
    if (value < 0) {
      result.innerHTML = "Error";
    } else {
      result.innerHTML = Math.sqrt(value);
    }
  }
}

function square() {
  if (result.innerHTML !== '') {
    let value = eval(result.innerHTML);
    result.innerHTML = Math.pow(value, 2);
  }
}
