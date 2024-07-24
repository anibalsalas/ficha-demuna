package com.dp.gestiondemuna.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "demuna_ficha_s11", schema = "SIGA")
public class Demuna_Ficha_S11Entity implements Serializable {

    @Id
    public Integer id_ficha_s11;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;

    //@Formula("decode(estado,'I','INCOMPLETA','C','COMPLETA','1','VALIDADO')")
    private String estado_s11;

    private String usu_valida;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;

    private String p11_1;
    private String p11_1_1_1;
    private String p11_1_1_2;
    private String p11_1_1_3;
    private String p11_2;
    private String p11_2_1_mimp;
    private String p11_2_1_indeci;
    private String p11_2_1_go_regional;
    private String p11_2_1_muni_provincial;
    private String p11_2_otro;
    private String p11_2_otro_desc;
    private String p11_3;
    private String p11_4;
    private String p11_5;
    private String p11_6;
    private String p11_7_1;
    private String p11_7_2;
    private String p11_7_3;
    
    
//    @Transient
//    private String pregunta;
//
//    @Formula("(select count(ea.id_archivo) \n"
//            + "from siga.demuna_archivo ea \n"
//            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S11' and ea.nom_campo = 's11_arch')")
//    private Integer s11_arch_id_archivo;
    
       @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S11' and ea.nom_campo = 'S114_ARCH')")
    private Integer s114_arch_id_archivo;
}
