package com.dp.gestiondemuna.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
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
@Table(name = "demuna_ficha_s9", schema = "SIGA")
public class Demuna_Ficha_S9Entity implements Serializable {
    @Id
    public Integer id_ficha_s9;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s9;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
     private String p9_1;
    private String p9_2;
    private String p9_2_1_1;
    private String p9_2_1_2;
    private String p9_2_1_3;
    private String p9_2_1_4;
    private String p9_3;
    private String p9_3_1_a;
    private String p9_3_1_b;
    private String p9_3_1_otros;
    private String p9_3_1_otros_descrip;
    private String p9_4;
    private String p9_4_1;
    private String p9_4_2;
    private String p9_4_3;
    private String p9_5;
    private String p9_5_1_fiscalia_familia;
    private String p9_5_1_upe; 
    private String p9_5_1_centro_salud;
    private String p9_5_1_ugel_iiee;
    private String p9_5_1_juzgado_familia;
    private String p9_5_1_comisaria;
    private String p9_5_1_cem;
    private String p9_5_1_salud_mental;
    private String p9_5_1_otros;
    private String p9_5_1_otros_descrip;
    private String p9_6;
    private String p9_6_1;
    private String p9_6_2_orde_resolucion;
    private String p9_9_2;
    private String p9_9_2_detalle;
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    private Date p9_6_2_fecha;
      
    private String p9_7;
    private String p9_7_1;
    private String p9_8;
    private String p9_8_1;
    private String p9_9;
    private String p9_9_1_1;
    private String p9_9_1_2;
    private String p9_9_1_3;
    
    private String p9_9_1_4;
    
     @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S9' and ea.nom_campo = 'S962_ARCH')")
    private Integer s962_arch_id_archivo;
}