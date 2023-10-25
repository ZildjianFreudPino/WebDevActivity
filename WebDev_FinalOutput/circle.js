
document.getElementById('s').addEventListener('click', function () {
    let r = parseInt(document.getElementById('radius').value);
    let d = parseInt(document.getElementsByClassName('diameter').value);
    let operation = document.getElementById('s').value;
    
    var radius;
    var diameter;
    switch (operation) {
        case 'solve':
            diameter = 3.14 * r;
            radius = 2 * 3.14 * r;
            break;
    }
    document.getElementById('value').innerHTML = `<h3 style="font-family: 'lemonmilk', sans-serif;">Circumference (diameter): ${diameter} <br><br> Cicumference (radius): ${radius}</h3>`;

    document.getElementById('modal').style.display = 'block';
})
document.getElementById('x').addEventListener('click', function(){
    document.getElementById('modal').style.display = 'none';
})
document.getElementById('backdrop').addEventListener('click', function(){
    document.getElementById('modal').style.display = 'none';
})