
const modal = document.getElementById("Modal");
const ModalBtn = document.getElementById("Modal-Rect");


const lengthRect = document.getElementById("length");
const widthRect = document.getElementById("width");
const result = document.getElementById("result");
const areaOutput = document.getElementById("area");

const closeButton = document.querySelector(".close");

ModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

document.getElementById("calculate").addEventListener("click", () => {
    const length = parseFloat(lengthRect.value);
    const width = parseFloat(widthRect.value);

    if (!isNaN(length) && !isNaN(width)) {
        const area = length * width;
        areaOutput.textContent = area;
    } else {
        areaOutput.textContent = "Wrong move sir";
    }
});