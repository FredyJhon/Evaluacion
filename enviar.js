$(document).ready(function() {
    $('#listar').on('click', function(event) {
      event.preventDefault();
  
      var tabla = document.querySelector('#tabla');
      tabla.innerHTML = '';
  
      $.ajax({
        url: "http://localhost:8080/listar",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta) {
          console.log(respuesta);
  
          for (var i = 0; i < respuesta.length; i++) {
            tabla.innerHTML += '<tr><td>' + respuesta[i].codigo +
              '</td><td>' + respuesta[i].nombre +
              '</td><td>' + respuesta[i].apellido +
              '</td><td>' + respuesta[i].nota1 +
              '</td><td>' + respuesta[i].nota2 +
              '</td><td>' + respuesta[i].nota3 +
              '</td></tr>';
          }
  
          alert("Listado de estudiantes obtenido correctamente");
        },
        error: function() {
          alert("Error al obtener el listado de estudiantes");
        }
      });
    });
  
    $('#actualizar').on('click', function(event) {
      event.preventDefault();
  
      var nombre = $('#nombre').val();
      var datos = {
        nota1: $('#nota1').val(),
        nota2: $('#nota2').val(),
        nota3: $('#nota3').val()
      };
  
      $.ajax({
        url: "http://localhost:8080/actualizar/" + nombre,
        type: "PUT",
        data: JSON.stringify(datos),
        contentType: "application/json",
        dataType: "json",
        success: function(respuesta) {
          console.log(respuesta);
          alert("Estudiante actualizado correctamente");
        },
        error: function() {
          alert("Error al actualizar el estudiante");
        }
      });
    });
  
    $('#calcular').on('click', function(event) {
      event.preventDefault();
  
      var tabla = document.querySelector('#tabla');
      tabla.innerHTML = '';
  
      $.ajax({
        url: "http://localhost:8080/promedio",
        type: "GET",
        dataType: "JSON",
        success: function(respuesta) {
          console.log(respuesta);
  
          for (var i = 0; i < respuesta.length; i++) {
            tabla.innerHTML += '<tr><td>' + respuesta[i].codigo +
              '</td><td>' + respuesta[i].nombre +
              '</td><td>' + respuesta[i].apellido +
              '</td><td>' + respuesta[i].nota1 +
              '</td><td>' + respuesta[i].nota2 +
              '</td><td>' + respuesta[i].nota3 +
              '</td><td>' + respuesta[i].promedio +
              '</td></tr>';
          }
  
          alert("Promedio de estudiantes calculado correctamente");
        },
        error: function() {
          alert("Error al calcular el promedio de estudiantes");
        }
      });
    });
  });
  