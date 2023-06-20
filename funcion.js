document.querySelector('#boton').addEventListener('click', guardarUsuario);

function guardarUsuario() {
    var codigo = document.querySelector('#codigo').value;
    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var nota1 = document.querySelector('#nota1').value;
    var nota2 = document.querySelector('#nota2').value;
    var nota3 = document.querySelector('#nota3').value;

    var promedio = calcularPromedio(nota1, nota2, nota3);

    agregarUsuario(codigo, nombre, apellido, nota1, nota2, nota3, promedio);
}

function calcularPromedio(nota1, nota2, nota3) {
    var suma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3);
    var promedio = suma / 3;
    return promedio.toFixed(2);
}
