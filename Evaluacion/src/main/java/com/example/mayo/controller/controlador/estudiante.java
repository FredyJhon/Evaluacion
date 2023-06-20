package com.example.mayo.controller.controlador;


import com.example.mayo.entity.constructor;
import com.example.mayo.services.servicio;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class estudiante {

    private servicio servicioE;

    public estudiante(servicio servicioE){
        this.servicioE=servicioE;
    }
    @GetMapping("/ListarEstudiante")
    public List<constructor> ListarEstudiante(){return servicioE.ListarEstudiante();}

    @GetMapping("/BuscarEstudiante/{codigo}")
    public constructor buscarestudiante (@PathVariable int codigo){return servicioE.buscarestudiante(codigo);}


    @DeleteMapping("/EliminarEstudiante/curso")
    public ResponseEntity<constructor> EliminarEstudiante(@PathVariable int codigo) {

        if (servicioE.buscarestudiante(codigo)!=null) {
            servicioE.EliminarEstudiante(codigo);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        }else{

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }


    }

}
