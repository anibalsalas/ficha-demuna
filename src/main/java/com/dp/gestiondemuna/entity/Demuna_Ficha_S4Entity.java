package com.dp.gestiondemuna.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
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
@Table(name = "demuna_ficha_s4", schema = "SIGA")

public class Demuna_Ficha_S4Entity implements Serializable {
    @Id
    public Integer id_ficha_s4;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    
    private String estado_s4;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
    
    
    @Transient
    List<Demuna_Ficha_S4_P4Entity> ListaDemunaFichaS4P4_A = new ArrayList();
    
    @Transient
    List<Demuna_Ficha_S4_P4Entity> ListaDemunaFichaS4P4_B = new ArrayList();
    
    @Transient
    List<Demuna_Ficha_S4_P4Entity> ListaDemunaFichaS4P4_C = new ArrayList();
    
    @Transient
    List<Demuna_Ficha_S4_P4Entity> ListaDemunaFichaS4P4_D = new ArrayList();
    
    @Transient
    List<Demuna_Ficha_S4_P4Entity> ListaDemunaFichaS4P4_E = new ArrayList();
    
    
    private String p4_1;
    private Integer p4_1_1;
    private Integer p4_1_2;
    private String p4_2;
    private String p4_3_abogado;
    private String p4_3_psicologo; 
    private String p4_3_tsocial;
    private String p4_3_educador; 
    private String p4_3_otro;
    private String p4_3_otro_desc;
    private Integer p4_3_abogado_cantidad;
    private Integer p4_3_psicologo_cantidad;
    private Integer p4_3_tsocial_cantidad;
    private Integer p4_3_educador_cantidad;
    private Integer p4_3_otro_cantidad;
    
    private String p4_4_abogado;
    private String p4_4_psicologo;
    private String p4_4_tsocial;
    private String p4_4_educador;
    private String p4_4_otro;
    private String p4_4_otro_desc;
    
    private Integer p4_4_abogado_cantidad;
    private Integer p4_4_psicologo_cantidad;
    private Integer p4_4_tsocial_cantidad;
    private Integer p4_4_educador_cantidad;
    private Integer p4_4_otro_cantidad;
    private String p4_4_1;
    private String p4_4_noaplica;
    
    private String p4_4_abogado_lengua;
    private String p4_4_psicologo_lengua;
    private String p4_4_tsocial_lengua;
    private String p4_4_educador_lengua;
    private String p4_4_otro_lengua;
    private String p4_4_1_observa;
    
    private String p4_5;
    private String p4_6_profesion;
    private String p4_6_otro;
    private String p4_6_otro_desc;
    private String p4_7;
    private String p4_7_3_nresol;
    
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Temporal(TemporalType.DATE)
    private Date p4_7_3_fecha;
    
    private String p4_8;
    private String p4_9;
    private String p4_9_lengua;
    private String p4_9_observaciones;
    private String p4_10;
    private String p4_10_1_1_noaplica;
    private String p4_10_1_2;
    private String p4_10_1_3_a;
    private String p4_10_1_3_b;
    private String p4_10_1_3_c;
    private String p4_10_1_3_d;
    private String p4_10_1_3_e;
    private String p4_10_1_3_f;
    private String p4_10_1_3_g;
    private String p4_10_1_3_otra;
    
    private String p4_10_2_noaplica;
    private String p4_10_2_a;
    private String p4_10_2_b;
    private String p4_10_2_c;
    private String p4_10_2_d;
    private String p4_10_2_otro;
    private String p4_10_2_otro_desc;
    
    private String p4_11;
    private Integer p4_12;
    private Integer p4_13_f;
    private Integer p4_13_m;
    private String p4_15_1;
    private String p4_15_2;
    private String p4_15_3_a;
    private String p4_15_3_b;
    private String p4_15_3_c;
    private String p4_15_3_d;
    private String p4_15_3_e;
    private String p4_15_3_f; 
    private String p4_15_3_g;
    private String p4_15_3_otro;
    private String p4_15_3_otro_desc;
    private String p4_16;
    private String p4_16_a;
    private String p4_16_b;
    private String p4_16_c;
    private String p4_16_d;
    private String p4_16_otro;
    private String p4_16_otro_desc;
    private String p4_17;
    private String p4_17_1;
    private String p4_18;
    private String p4_18_1_a;
    private String p4_18_1_b;
    private String p4_18_1_c;
    private String p4_18_1_otros;
    private String p4_18_1_otro_desc;
    private Integer p4_19;
    private Integer p4_19_f;
    private Integer p4_19_m;
    private String p4_20_1;
    private String p4_20_2_a;
    private String p4_20_2_b;
    private String p4_20_2_c;
    private String p4_20_2_d;
    private String p4_20_2_e;
    private String p4_20_2_f;
    private String p4_20_2_g;
    private String p4_20_2_otro;
    private String p4_20_2_otro_desc;
    private String p4_21_noaplica;
    private String p4_21_a;
    private String p4_21_b;
    private String p4_21_c;
    private String p4_21_d;
    private String p4_21_otro;
    private String p4_21_otro_desc;
    private String p4_22;
    private Integer p4_22_1;
    private Integer p4_23_f;
    private Integer p4_23_m;
    private String p4_25_1;
    private String p4_25_2_a;
    private String p4_25_2_b;    
    private String p4_25_2_c;
    private String p4_25_2_d;
    private String p4_25_2_e;
    private String p4_25_2_f;
    private String p4_25_2_g;
    private String p4_25_2_otro;
    private String p4_25_2_otro_desc; 
    private String p4_26_noaplica;
    private String p4_26_a;
    private String p4_26_b;
    private String p4_26_c;
    private String p4_26_d;
    private String p4_26_otro;
    private String p4_26_otro_desc;
    private String p4_27;
    private Integer p4_27_1;
    private Integer p4_28_f;
    private Integer p4_28_m;
    private String p4_30_1;
    private String p4_30_a;
    private String p4_30_b;
    private String p4_30_c;
    private String p4_30_d; 
    private String p4_30_e;
    private String p4_30_f;
    private String p4_30_g;
    private String p4_30_otro;
    private String p4_30_otro_desc;
    private String p4_31_noaplica;
    private String p4_31_a;
    private String p4_31_b;
    private String p4_31_c;
    private String p4_31_d;
    private String p4_31_otro;
    private String p4_31_desc;
    
    private String p4_32;
    private Integer p4_32_1_f;
    private Integer p4_32_1_m;
    
     private String p4_33;
    private Integer p4_33_1_f;
    private Integer p4_33_1_m;
    
    
     private String p4_33_2;
    private Integer p4_33_2_1_f;
    private Integer p4_33_2_1_m;
    
    private String p4_35_1;
    private String p4_35_2_a;
    private String p4_35_2_b;
    private String p4_35_2_c;
    private String p4_35_2_d;
    private String p4_35_2_e;
    private String p4_35_2_f;
    private String p4_35_2_otro;
    private String p4_35_2_otro_detalle;
    private String p4_36_noaplica;
    private String p4_36_a;
    private String p4_36_b;
    private String p4_36_c;
    private String p4_36_d;
    private String p4_36_otro;
    private String p4_36_otro_desc;

    private String p4_10_1_3_otra_detalle;
    
    
     @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S4' and ea.nom_campo = 'S471_ARCH')")
    private Integer s471_arch_id_archivo;
     
}