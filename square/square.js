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
