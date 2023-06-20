package com.example.mayo.services;


import com.example.mayo.entity.constructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class servicio {

    public List<constructor> constructors=new ArrayList<>();

    public servicio(){

        constructors.add(new constructor(01,"John","Aroca","601",5,5,2.5f));
        constructors.add(new constructor(02,"Sleyder","Sevillano","602",5,4,2.1f));
        constructors.add(new constructor(03,"Daniel","Quimabayo","602",4,2,4.3f));
        constructors.add(new constructor(04,"Marly","Cardoso","603",4,4.2f,3.0f));
        constructors.add(new constructor(05,"Santiago","Sarta","601",1,2,5));
    }

    public List<constructor> ListarEstudiante(){return constructors;}

    public constructor buscarestudiante(int codigo){
        for(constructor constructor : constructors ){
            if (constructor.getCodigo()==codigo){
                return constructor;
            }
        }
        return null;
    }

        public void EliminarEstudiante(int codigo){
        constructor estudiante1=buscarestudiante(codigo);

            constructors.remove(estudiante1);
        }


}
