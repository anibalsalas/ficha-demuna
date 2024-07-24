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
@Table(name = "demuna_ficha_s8", schema = "SIGA")
public class Demuna_Ficha_S8Entity implements Serializable {
    @Id
    public Integer id_ficha_s8;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s8;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
     private String p8_1;
    private Double p8_1_1_p2024;
    private Double p8_1_1_p2023;
    private String p8_1_1_p2024_no;
    private String p8_1_1_p2023_no;
    private String p8_2;
    private String p8_3;
    private String p8_4;
}
