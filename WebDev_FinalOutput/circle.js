
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