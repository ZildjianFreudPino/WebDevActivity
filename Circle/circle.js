/**document.getElementById('s').addEventListener('click', function () {
        const radius = parseFloat(document.getElementById("radius").value);
        const area = Math.PI * radius * radius;
        const circum = 2 * Math.PI * radius
    
        document.getElementById("area").textContent = area.toFixed(2);
        document.getElementById("circumference").textContent = circum.toFixed(2);
        var solve = area;

    document.getElementById('value').innerHTML = <h3 style="font-family: 'lemonmilk', sans-serif;">result: ${solve}</h3>;

    document.getElementById('modal').style.display = 'block';
})
document.getElementById('x').addEventListener('click', function(){
    document.getElementById('modal').style.display = 'none';
})
document.getElementById('backdrop').addEventListener('click', function(){
    document.getElementById('modal').style.display = 'none';
})*/





document.getElementById('s').addEventListener('click', function () {
    let r = parseInt(document.getElementById('radius').value);
    let operation = document.getElementById('s').value;
    
    var circum;
    var area;
    switch (operation) {
        case 'solve':
            area = Math.PI * (r * r);
            circum = 2 * Math.PI * r;
            break;
    }
    document.getElementById('value').innerHTML = `<h3 style="font-family: 'lemonmilk', sans-serif;">Area: ${area} <br><br> Cicumference: ${circum}</h3>`;

    document.getElementById('modal').style.display = 'block';
})
document.getElementById('x').addEventListener('click', function(){
    document.getElementById('modal').style.display = 'none';
})
document.getElementById('backdrop').addEventListener('click', function(){
    document.getElementById('modal').style.display = 'none';
})