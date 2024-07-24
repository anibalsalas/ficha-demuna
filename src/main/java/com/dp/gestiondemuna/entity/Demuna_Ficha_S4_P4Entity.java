/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestiondemuna.entity;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

/**
 *
 * @author csanchezl
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "demuna_ficha_s4_p4", schema = "SIGA")

public class Demuna_Ficha_S4_P4Entity implements Serializable {
//    @Id
//    public Integer id_ficha_s4;
//    public Integer id_ficha;
//    public Integer id_secuencia;
    
    @EmbeddedId
    private Demuna_Ficha_S4_P4PKEntity demuna_ficha_s4_p4pk;    
    
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    
     private String usu_valida;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
    private String estado;
    
    
    private String p4_profesion,
            p4_seleccion,
            p4_txt_otros,
            p4_capa,
            p4_equipo;
    
    private Integer             
            p4_selecc_num,
            p4_anno,
            p4_meses,
            p4_tipo_contrato;  
    
    private String p4_14_1_a,
     p4_14_1_b,
     p4_14_1_c,
     p4_14_1_d, 
     p4_14_1_e,
     p4_14_1_f,
            
    p4_14_2_a,
    p4_14_2_b,
    p4_14_2_c,
    p4_14_2_d;
    
    
    
    private String p4_14_2_e;    
    private String p4_14_2_e_otro;
   

 public String getP4_14_2_e() {
        return p4_14_2_e;
    }

    public void setP4_14_2_e(String p4_14_2_e) {
        this.p4_14_2_e = p4_14_2_e;
    }
    
     public String getP4_14_2_e_otro() {
        return p4_14_2_e_otro;
    }

    public void setP4_14_2_e_otro(String p4_14_2_e_otro) {
        this.p4_14_2_e_otro = p4_14_2_e_otro;
    }
    
    public Demuna_Ficha_S4_P4PKEntity getDemuna_ficha_s4_p4pk() {
        return demuna_ficha_s4_p4pk;
    }

    public void setDemuna_ficha_s4_p4pk(Demuna_Ficha_S4_P4PKEntity demuna_ficha_s4_p4pk) {
        this.demuna_ficha_s4_p4pk = demuna_ficha_s4_p4pk;
    }


    public String getUsu_registro() {
        return usu_registro;
    }

    public void setUsu_registro(String usu_registro) {
        this.usu_registro = usu_registro;
    }

    public Date getFch_registro() {
        return fch_registro;
    }

    public void setFch_registro(Date fch_registro) {
        this.fch_registro = fch_registro;
    }

    public String getUsu_actualiza() {
        return usu_actualiza;
    }

    public void setUsu_actualiza(String usu_actualiza) {
        this.usu_actualiza = usu_actualiza;
    }

    public Date getFch_actualiza() {
        return fch_actualiza;
    }

    public void setFch_actualiza(Date fch_actualiza) {
        this.fch_actualiza = fch_actualiza;
    }
    
    ///////
      public Date getFch_valida() {
        return fch_valida;
    }

    public void setFch_valida(Date fch_valida) {
        this.fch_valida = fch_valida;
    }
    
    /////
     public String getUsu_valida() {
        return usu_valida;
    }

    public void setUsu_valida(String usu_valida) {
        this.usu_valida = usu_valida;
    }
    //////
    

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getP4_profesion() {
        return p4_profesion;
    }

    public void setP4_profesion(String p4_profesion) {
        this.p4_profesion = p4_profesion;
    }

    public String getP4_seleccion() {
        return p4_seleccion;
    }

    public void setP4_seleccion(String p4_seleccion) {
        this.p4_seleccion = p4_seleccion;
    }

    public String getP4_txt_otros() {
        return p4_txt_otros;
    }

    public void setP4_txt_otros(String p4_txt_otros) {
        this.p4_txt_otros = p4_txt_otros;
    }

    public String getP4_capa() {
        return p4_capa;
    }

    public void setP4_capa(String p4_capa) {
        this.p4_capa = p4_capa;
    }

    public String getP4_equipo() {
        return p4_equipo;
    }

    public void setP4_equipo(String p4_equipo) {
        this.p4_equipo = p4_equipo;
    }

    public Integer getP4_selecc_num() {
        return p4_selecc_num;
    }

    public void setP4_selecc_num(Integer p4_selecc_num) {
        this.p4_selecc_num = p4_selecc_num;
    }

    public Integer getP4_anno() {
        return p4_anno;
    }

    public void setP4_anno(Integer p4_anno) {
        this.p4_anno = p4_anno;
    }

    public Integer getP4_meses() {
        return p4_meses;
    }

    public void setP4_meses(Integer p4_meses) {
        this.p4_meses = p4_meses;
    }

    public Integer getP4_tipo_contrato() {
        return p4_tipo_contrato;
    }

    public void setP4_tipo_contrato(Integer p4_tipo_contrato) {
        this.p4_tipo_contrato = p4_tipo_contrato;
    }
    
    
   ///////////////////////////
    
     public String getP4_14_1_a() {
        return p4_14_1_a;
    }

    public void setP4_14_1_a(String p4_14_1_a) {
        this.p4_14_1_a = p4_14_1_a;
    }
    
     public String getP4_14_1_b() {
        return p4_14_1_b;
    }

    public void setP4_14_1_b(String p4_14_1_b) {
        this.p4_14_1_b = p4_14_1_b;
    }
    
      public String getP4_14_1_c() {
        return p4_14_1_c;
    }

    public void setP4_14_1_c(String p4_14_1_c) {
        this.p4_14_1_c = p4_14_1_c;
    }
    
      public String getP4_14_1_d() {
        return p4_14_1_d;
    }

    public void setP4_14_1_d(String p4_14_1_d) {
        this.p4_14_1_d = p4_14_1_d;
    }
    
    
      public String getP4_14_1_e() {
        return p4_14_1_e;
    }

    public void setP4_14_1_e(String p4_14_1_e) {
        this.p4_14_1_e = p4_14_1_e;
    }
    
      public String getP4_14_1_f() {
        return p4_14_1_f;
    }

    public void setP4_14_1_f(String p4_14_1_f) {
        this.p4_14_1_f = p4_14_1_f;
    }
    
    
     public String getP4_14_2_a() {
        return p4_14_2_a;
    }

    public void setP4_14_2_a(String p4_14_2_a) {
        this.p4_14_2_a = p4_14_2_a;
    }
    
     public String getP4_14_2_b() {
        return p4_14_2_b;
    }

    public void setP4_14_2_b(String p4_14_2_b) {
        this.p4_14_2_b = p4_14_2_b;
    }
    
      public String getP4_14_2_c() {
        return p4_14_2_c;
    }

    public void setP4_14_2_c(String p4_14_2_c) {
        this.p4_14_2_c = p4_14_2_c;
    }
    
      public String getP4_14_2_d() {
        return p4_14_2_d;
    }

    public void setP4_14_2_d(String p4_14_2_d) {
        this.p4_14_2_d = p4_14_2_d;
    }
    

    
}

