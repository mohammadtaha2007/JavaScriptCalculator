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

