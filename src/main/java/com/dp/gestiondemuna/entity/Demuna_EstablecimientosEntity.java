package com.dp.gestiondemuna.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "demuna_padron", schema = "SIGA")
public class Demuna_EstablecimientosEntity implements Serializable {

   
    @Id
    private Integer id_sestablecmnt;
    private String cod_unico;
    private String nom_entidad;
    private String des_departament;
    private String des_provincia;
    private String des_distrito;
    private String nom_autoridad;
    
    private String dni;
      
    private String ubigeo;
    
    private String direccion;
    private String telefono;
    private String correo;
    private String nresolu;

    private String coddptox;
    private String codprovx;
    private String coddistx;
   private String c_tipo_entidad; 
   
    // Constructor adicional que acepta dos parámetros de tipo String
    public Demuna_EstablecimientosEntity(String nom_entidad, String cod_unico) {
        this.nom_entidad = nom_entidad;
        this.cod_unico = cod_unico;
    }
 
}
