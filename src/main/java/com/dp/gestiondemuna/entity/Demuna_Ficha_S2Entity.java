package com.dp.gestiondemuna.entity;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "demuna_ficha_s2", schema = "SIGA")
public class Demuna_Ficha_S2Entity implements Serializable {
     
    @Id
    
    private Integer id_ficha_s2;
    private Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s2;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
    private String p2_1;
    private String  p2_1_2_ordenanza;
    
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    private Date p2_1_2_fecha_emi;      
      
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    private Date p2_1_2_fecha_public;
    
    private String p2_2;
    private String p2_2_1;
    private String p2_3;
    private String p2_3_1;
    private String p2_4; 
    private String p2_5;
    private String p2_5_1_nrsol;
    
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    private Date p2_5_2_fecha_emi;
   
    private String p2_6_lv_hora_inicio;
    private String p2_6_lv_hora_cierre;
   
    
    private String p2_7_presencial;
    private String p2_7_virtual;
    private String p2_7_tel; 
    private String p2_7_emergencia;
    private String p2_7_otra;
    private String p2_7_otra_desc;
    
    private String p2_7_1_correo; 
    private String p2_7_1_chat;
    private String p2_7_1_redes;
    private String  p2_7_1_mesa;
    private String p2_8;
    private String p2_8_1;
    private String p2_9;
   
    private String p2_6_lunes;
    private String p2_6_martes;
    private String p2_6_miercoles;
    private String p2_6_jueves;
    private String p2_6_viernes;
    private String p2_6_sabado;
    private String p2_6_domingo;
    
    private String p2_7_noaplicax;
   

        @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S2' and ea.nom_campo = 'S2_ARCH')")
    private Integer s2_arch_id_archivo;
   

         @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S2' and ea.nom_campo = 'S212_ARCH')")
    private Integer s212_arch_id_archivo;
         
         
           @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S2' and ea.nom_campo = 'S251_ARCH')")
    private Integer s251_arch_id_archivo;
}



