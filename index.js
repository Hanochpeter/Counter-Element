let paraE1 = document.createElement("p");
paraE1.classList.add("bgOne");
paraE1.textContent = "0";
paraE1.style.padding = "50px"
paraE1.style.marginLeft = "70px"
paraE1.style.marginRight = "70px"
document.body.appendChild(paraE1);


let paraE2 = document.createElement("p");
paraE2.classList.add("counter-value")
document.body.appendChild(paraE2)

let btnE2 = document.createElement("button");
btnE2.textContent = "Decrease";
btnE2.classList.add("btnEle");
document.body.appendChild(btnE2);

let btnE1 = document.createElement("button");
btnE1.textContent = "Increase";
btnE1.classList.add("btnEle");
document.body.appendChild(btnE1);

btnE1.onclick = function() {
    let previousCounterValue = paraE1.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) + 1;
    let previous = paraE2.innerText;
    if (updatedCounterValue > 0) {
        paraE1.style.color = "green";

        paraE2.innerText = "Safe";
    } else if (updatedCounterValue < 0) {
        paraE1.style.color = "red";
        paraE2.innerText = "Danger";
    } else {
        paraE1.style.color = "yellow";
        paraE2.innerText = "Start Now";
    }
    paraE2.innerText=previous
    paraE1.textContent = updatedCounterValue;

};

btnE2.onclick = function onDecrement() {
    let previousCounterValue = paraE1.textContent;
    let updatedCounterValue = parseInt(previousCounterValue) - 1;
    let previous = paraE2.innerText;
    if (updatedCounterValue > 0) {
        paraE1.style.color = "green";
        paraE2.innerText = "Safe";
    } else if (updatedCounterValue < 0) {
        paraE1.style.color = "red";
        paraE2.innerText = "Danger";
    } else {
        paraE1.style.color = "yellow";
        paraE2.innerText = "Start Now";
    }
    paraE2.innerText=previous
    paraE1.textContent = updatedCounterValue;

};