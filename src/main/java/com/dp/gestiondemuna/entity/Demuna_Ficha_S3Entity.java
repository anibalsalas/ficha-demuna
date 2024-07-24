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
@Table(name = "demuna_ficha_s3", schema = "SIGA")
public class Demuna_Ficha_S3Entity implements Serializable {
    @Id
    public Integer id_ficha_s3;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    
    private String estado_s3;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;

    private String p3_1;
    private Integer p3_2;
    private String p3_3;
    private String p3_3_obser;
    private String p3_4;
    private String p3_4_obser;
    private String p3_4_1;
    private String p3_4_1_obser;    
    private String p3_5_a;
    private String p3_5_b;
    private String p3_5_c;
    private String p3_5_obser;
    private String p3_6;
    private String p3_6_obser;
    private String p3_6_1;
    private String p3_6_1_a;
    private String p3_6_1_b;
    private String p3_7_luz;
    private String p3_7_agua;
    private String p3_7_tel;
    private String p3_7_cel;
    private String p3_7_inter;
    private String p3_8;
    private Integer p3_8_n_escritorios;
    private Integer p3_8_n_sillas;
    private Integer p3_8_n_archivadores;
    
     private Integer p3_9_n_computadoras;
    private Integer p3_9_n_laptos;
    private Integer p3_9_n_impresoras;
  
      @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S3' and ea.nom_campo = 'S3_2_ARCH')")
    private Integer s3_2_arch_id_archivo;
      
       @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S3' and ea.nom_campo = 'S3_3_ARCH')")
    private Integer s3_3_arch_id_archivo;
       
        @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S3' and ea.nom_campo = 'S3_4_ARCH')")
    private Integer s3_4_arch_id_archivo;



   @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S3' and ea.nom_campo = 'S341_ARCH')")
    private Integer s341_arch_id_archivo;

}


//  p3_3           char(1 byte),
//  p3_3_obser     varchar2(1100 byte),
//  p3_4           char(1 byte),
//  p3_4_obser     varchar2(1100 byte),
//  p3_5           char(1 byte),
//  p3_5_obser     varchar2(1100 byte),
//  p3_6           char(1 byte),
//  p3_6_obser     varchar2(1100 byte),
//  p3_6_1         char(1 byte),
//  p3_7_luz       char(1 byte),
//  p3_7_agua      char(1 byte),
//  p3_7_tel       char(1 byte),
//  p3_7_inter     char(1 byte),
//  p3_8           char(1 byte)