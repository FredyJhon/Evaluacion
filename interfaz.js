var UsuarioList = [];

function agregarUsuario(usu_codigo, usu_nombre, usu_apellido, usu_nota1, usu_nota2, usu_nota3, usu_promedio) {
    var usuario = {
        codigo: usu_codigo,
        nombre: usu_nombre,
        apellido: usu_apellido,
        nota1: usu_nota1,
        nota2: usu_nota2,
        nota3: usu_nota3,
        promedio: usu_promedio
    };

    UsuarioList.push(usuario);
    console.log(UsuarioList);

    var tabla = document.querySelector('#tabla');
    tabla.innerHTML += '<tr><td>' + usu_codigo +
        '</td><td>' + usu_nombre +
        '</td><td>' + usu_apellido +
        '</td><td>' + usu_nota1 +
        '</td><td>' + usu_nota2 +
        '</td><td>' + usu_nota3 +
        '</td><td>' + usu_promedio +
        '</td></tr>';
}
