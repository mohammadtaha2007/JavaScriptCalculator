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
