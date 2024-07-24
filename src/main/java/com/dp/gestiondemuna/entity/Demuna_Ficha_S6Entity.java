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
@Table(name = "demuna_ficha_s6", schema = "SIGA")

public class Demuna_Ficha_S6Entity implements Serializable {
    @Id
    public Integer id_ficha_s6;
    public Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;
    private String estado_s6;
    private String usu_valida;
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    
    private String p6_1;
    private String p6_1_2;
   
    private String p6_1_2_1_a;
    private String p6_1_2_1_b;
    private String p6_1_2_1_c;
    private String p6_1_2_1_otros;
    private String  p6_1_2_1_otros_desc;
    private String p6_1_2_2;
    
    private Integer p6_2;
    private String p6_2_1_x;
    
    private Integer p6_2_1_fisica_cantidad;
    private Integer p6_2_1_auditiva_cantidad;
    private Integer p6_2_1_visual_cantidad;
    private Integer p6_2_1_cognitiva_cantidad;
    private Integer p6_2_1_psicosocial_cantidad;
    
    private Integer p6_2_2_circunstancia1;
    private Integer p6_2_2_circunstancia2;
    private Integer p6_2_2_circunstancia3;
    private Integer p6_2_2_circunstancia4;
    private Integer p6_2_2_circunstancia5;
    private Integer p6_2_2_circunstancia6;
    private Integer p6_2_2_circunstancia7;
    private Integer p6_2_2_circunstancia8;
    private Integer p6_2_2_otros;
    private Integer p6_2_2_total;
    private String p6_2_2_otros_desc;
    private String p6_3_a;
    private String p6_3_b;
    private String p6_3_c;
    private String p6_3_d;
    private String p6_3_e;
    private String p6_3_f;
    private String p6_3_otros;
    private String p6_3_otros_desc;
    private String p6_4_a;
    private String p6_4_b;
    private String p6_4_c;
    private String p6_4_d;
    private String p6_4_otros;
    private String p6_4_otros_desc;
    private String p6_5_a;
    private String p6_5_b;
    private String p6_5_c;
    private String p6_5_d;
    private String p6_5_e;
    private String p6_5_e_desc;
    private String p6_5_f;
    private String p6_5_otros;
    private String p6_5_otros_desc;
    private String p6_1_2_3_otros_desc;
    private String p6_1_2_3;
    
    
    private String p6_1x;


     private Integer p6_1_1_peruanos_x;
    private Integer p6_1_1_extranjeros_x;
    private Integer p6_1_1_venezolanos_x;
    private Integer p6_1_1_total_x;
    
      private Integer p6_1_2_peruanos_riesgo_x;
      private Integer p6_1_2_peruanos_despro_x;
      
        private Integer p6_1_2_env_riesgo_x;
      private Integer p6_1_2_env_despro_x;
      
      private Integer p6_1_2_vene_riesgo_x;
      private Integer p6_1_2_vene_despro_x;
      
    private Integer p6_1_2_varones_riesgo_x;
    private Integer p6_1_2_mujeres_riesgo_x;
    private Integer p6_1_2_lgtbi_riesgo_x;

    private Integer p6_1_2_varones_despro_x;
    private Integer p6_1_2_mujeres_despro_x;
    private Integer p6_1_2_lgtbi_despro_x;

    private Integer p6_1_2_varones_riesgo_env_x;
    private Integer p6_1_2_mujeres_riesgo_env_x;
    private Integer p6_1_2_lgtbi_riesgo_env_x;

    private Integer p6_1_2_varones_despro_env_x;
    private Integer p6_1_2_mujeres_despro_env_x;
    private Integer p6_1_2_lgtbi_despro_env_x;
    
    
     private Integer p6_1_2_varones_riesgo_vene_x;
    private Integer p6_1_2_mujeres_riesgo_vene_x;
    private Integer p6_1_2_lgtbi_riesgo_vene_x;

    private Integer p6_1_2_varones_despro_vene_x;
    private Integer p6_1_2_mujeres_despro_vene_x;
    private Integer p6_1_2_lgtbi_despro_vene_x;
    
    private Integer p6_1_2_total_riesgo;
    private Integer p6_1_2_total_despro;
    
    private String p6_1_3x;
    private String p6_1_3_otros_desc;
    
    private String p6_1_4x;
    private String p6_1_4_otros_desc;

    private String p6_1_5x;
    private String p6_1_5_otros_desc;

    private String p6_2x;
    
    private String p6_4_3_1_a;
    private String p6_4_3_1_b;
    private String p6_4_3_1_c;
    private String p6_4_3_1_d;
    private String p6_4_3_1_e;
    private String p6_4_3_1_otro;
    private String p6_4_3_1_detalle;
    
    private String p6_8_a_x;
    private String p6_8_b_x;
    private String p6_8_c_x;
    private String p6_8_d_x;
    private String p6_8_e_x;
    private String p6_8_f_x;
    private String p6_8_detallar_x;
    private String p6_8_g_x;
    
    private Integer p6_8_a_cantidad_x;
    private Integer p6_8_b_cantidad_x;
    private Integer p6_8_c_cantidad_x;
    private Integer p6_8_d_cantidad_x;
    private Integer p6_8_e_cantidad_x;
    private Integer p6_8_f_cantidad_x;
    
    private String p6_5_x;
    private String p6_5_a_x;
    private String p6_5_b_x;
    private String p6_5_c_x;
    private String p6_5_d_x;
    private String p6_5_e_x;
    private String p6_5_f_x;
    private String p6_5_otros_x;
    private String p6_5_otros_descrip_x;
    
    
    private String p6_4_1_x;
    private String p6_4_2_venezolana_x;
    private String p6_4_2_boliviana_x;
    private String p6_4_2_ecuatoriana_x;
    private String p6_4_2_haitiana_x;
    private String p6_4_2_otros_x;
    private String p6_4_2_otros_descrip_x;
    
       private Integer p6_4_3_x;
       
    private String p6_4_5_a_x;
    private String p6_4_5_b_x;
    private String p6_4_5_c_x;
    private String p6_4_5_d_x;
    private String p6_4_5_e_x;
    private String p6_4_5_f_x;
    private String p6_4_5_g_x;
    private String p6_4_5_h_x;
    private String p6_4_5_otros_x;
    private String p6_4_5_otros_descrip_x;
    
     private Integer p6_4_5_a_cantidad_x;
    private Integer p6_4_5_b_cantidad_x;
    private Integer p6_4_5_c_cantidad_x;
    private Integer p6_4_5_d_cantidad_x;
    private Integer p6_4_5_e_cantidad_x;
    private Integer p6_4_5_f_cantidad_x;
    private Integer p6_4_5_g_cantidad_x;
    private Integer p6_4_5_h_cantidad_x;
    private Integer p6_4_5_otros_cantidad_x;
    private Integer p6_4_5_total_x;
    
    
     private Integer p6_4_2_venezolana_cantidad_x;
    private Integer p6_4_2_boliviana_cantidad_x;
    private Integer p6_4_2_ecuatoriana_cantidad_x;
    private Integer p6_4_2_hatiana_cantidad_x;
    private Integer p6_4_2_otros_cantidad_x;
    
    private String p6_9;
    private Integer p6_9_a_recibidos23;
    private Integer p6_9_a_favorecidos23;
    private Integer p6_9_a_recibidos24;
    private Integer p6_9_a_favorecidos24;
    private Integer p6_9_b_recibidos23;
    private Integer p6_9_b_favorecidos23;
    private Integer p6_9_b_recibidos24;
    private Integer p6_9_b_favorecidos24;
    private String p6_9_detalles;
    
     private Integer casos_riesgo_2023;
     private Integer casos_riesgo_2024;
     private Integer casos_despro_2023;
     private Integer casos_despro_2024;
    
    @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S6' and ea.nom_campo = 'S6312_ARCH')")
    private Integer s6312_arch_id_archivo;
    
    
    @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S6' and ea.nom_campo = 'S6313_ARCH')")
    private Integer s6313_arch_id_archivo;
    
}
