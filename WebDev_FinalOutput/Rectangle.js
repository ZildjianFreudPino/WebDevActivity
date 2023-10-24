
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
document.getElementById('modal').style.display = 'none';

function openSquare() {
    document.getElementById('modal').style.display = 'block';
}

function exitSquare() {
    document.getElementById('modal').style.display = 'none';
}

document.getElementById('submit').addEventListener('click', function () {
    calculateSquare();
    calculateSquarePerimeter();
});

function calculateSquare() {
    const Sidelength = parseFloat(document.getElementById("Sidelength").value);
    const Area = Sidelength * Sidelength;
    document.getElementById("Area").textContent = Area;
    document.getElementById("Perimeter").textContent = "";
}

function calculateSquarePerimeter() {
    const Side_A = parseFloat(document.getElementById("Side_A").value);
    const Side_B = parseFloat(document.getElementById("Side_B").value);
    const Side_C = parseFloat(document.getElementById("Side_C").value);

    // Perimeter of a square is 4 times the side length
    const Perimeter = Side_A + Side_B + Side_C;

    document.getElementById("Perimeter").textContent = Perimeter;
}