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
@Table(name = "demuna_ficha_s10", schema = "SIGA")
public class Demuna_Ficha_S10Entity implements Serializable {
    @Id
    public Integer id_ficha_s10;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    
    private String estado_s10;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
    private String p10_1;
    private String p10_1_1;
    private Integer p10_1_2_nna;
    private Integer p10_1_2_m;
    private Integer p10_1_2_h;
    private String p10_1_2_edad;
    private String p10_1_2_edad_otro;
    private String p10_1_2_edad_otro_desc;
    private String p10_1_3;
    private String p10_1_3_1_a;
    private Integer p10_1_3_1_a_cantidad;
    private String p10_1_3_1_b;
    private Integer p10_1_3_1_b_cantidad;
    private String p10_1_3_1_c;
    private Integer p10_1_3_1_c_cantidad;
    private String p10_1_3_1_d;
    private Integer p10_1_3_1_d_cantidad;
    private String p10_1_3_1_e;
    private Integer p10_1_3_1_e_cantidad;
    private String p10_1_3_2;
    private String p10_2;
    private Integer p10_1_2_lgtbi;
    private String p10_1_3x;
    
     private Integer p10_1_4_env_mujeres;
      private Integer p10_1_4_env_hombres;
      private Integer p10_1_4_env_lgtbi;
      
       private Integer p10_1_4_vene_mujeres;
      private Integer p10_1_4_vene_hombres;
      private Integer p10_1_4_vene_lgtbi;
      
      private String p10_1_4_edadx;
      private String p10_1_4_edad_otro_desc_x;
      
      private String p10_1_4_edad_vene_x;
      private String p10_1_4_edad_otro_vene_desc_x;
      
        private String p10_2_x;
   
     
     private Integer p10_1_4_env_nna;
      private Integer p10_1_4_vene_nna;
}
