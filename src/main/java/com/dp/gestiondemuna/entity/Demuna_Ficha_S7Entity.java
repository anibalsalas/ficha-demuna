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
@Table(name = "demuna_ficha_s7", schema = "SIGA")

public class Demuna_Ficha_S7Entity implements Serializable {
    @Id
    public Integer id_ficha_s7;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s7;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
     private String p7_1_a;
    private String p7_1_b;
    private String p7_1_c;
    private String p7_1_d;
    private String p7_1_e;
    private String p7_1_f;
   
    private String p7_1_h;
    private String p7_1_i;
    private String  p7_1_j;
    private String p7_1_otros;
    private String p7_1_otros_descrip;
    private Integer p7_1_a_cantidad; 
    private Integer p7_1_b_cantidad;
    private Integer p7_1_c_cantidad;
    private Integer p7_1_d_cantidad;
    private Integer p7_1_e_cantidad;
    private Integer p7_1_f_cantidad;
   
    private Integer p7_1_h_cantidad;
    private Integer p7_1_i_cantidad;
    private Integer p7_1_j_cantidad; 
    private Integer p7_1_otros_cantidad;
    private String p7_2_alimentos;
    private String p7_2_tenencia;
    private String p7_2_visitas;
    private String p7_2_otros;
    private String p7_2_otros_descrip;
    private Integer p7_2_total;
    
    private Integer p7_2_alimentos_cantidad;
    private Integer p7_2_tenencia_cantidad;
    private Integer p7_2_visitas_cantidad;
    private Integer p7_2_otros_cantidad;
    
    private String p7_3;
   
    private String p7_4;
    private String p7_4_1; 

    
     private String p7_4_alimentos_x;
    private String p7_4_tenencia_x;
    private String p7_4_visitas_x;
    private String p7_4_otros_x;
    private String p7_4_otros_descrip_x;
    
     private Integer p7_4_alimentos_cantidad_x;
    private Integer p7_4_tenencia_cantidad_x;
    private Integer p7_4_visitas_cantidad_x;
    private Integer p7_4_otros_cantidad_x;
    private Integer p7_4_total_x;
    
    
    private String p7_2_a_x;
    private String p7_2_b_x;
    private String p7_2_c_x;
    private String p7_2_d_x;
    private String p7_2_e_x;
    private String p7_2_f_x;
    private String p7_2_g_x;
    private String p7_2_h_x;

    private String p7_2_j_x;
    private String p7_2_otros_x;
    private String p7_2_otros_descrip_x;
    
    private Integer p7_2_a_cantidad_x;
    private Integer p7_2_b_cantidad_x;
    private Integer p7_2_c_cantidad_x;
    private Integer p7_2_d_cantidad_x;
    private Integer p7_2_e_cantidad_x;
    private Integer p7_2_f_cantidad_x;
    private Integer p7_2_g_cantidad_x;
    private Integer p7_2_h_cantidad_x;
   
    private Integer p7_2_j_cantidad_x;
    private Integer p7_2_otros_cantidad_x;
    
    private Integer p7_3_x;
    private Integer p7_4_x;
}
