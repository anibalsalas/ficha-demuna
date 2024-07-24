/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
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

/**
 *
 * @author asalas
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "demuna_ficha", schema = "SIGA")
public class Demuna_FichaEntity implements Serializable {

    @Id
    private Integer id_ficha;
    private String usu_registro;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_registro;

    private String usu_actualiza;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_actualiza;

    private String estado;
    private String codi_depe_tde;

    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_supervision;

    private Integer id_sestablecmnt;
    private String cod_unico;
    private String titular_entidad;
 
    private String nom_defensor;
    private String num_celular;
    private String correo_demuna;
    private String no_pudo_aplicar_ficha;

    private String codi_depa_dpt;
    private String codi_prov_tpr;
    private String codi_dist_tdi;
    private String nom_entidad;
    private String ndocumento;

    private String direccion_defensor;
    private String telefono_defensor;
    private String correo_defensor;

    private String direccion_demuna;
    private String correo_demuna_oficial;
    private String telefono_demuna;
    private String estado_s1;
    private String usu_valida;
    
    private String nom_funcionario;
    private String dni_funcionario;
    private String dni_defensor_demuna;
     private String telefono_funcionario;
    private String correo_funcionario; 
    private String motivo_no_implementado;        
    
     private String dni_alcalde;
    private String telefono_alcalde;
    private String correo_alcalde;
    
    private String aceptar;
     private String c_tipo_entidad;
    private String implementado;
  
     private String p1_6;
    private String p1_7;
    private String p1_observa;
    
    @DateTimeFormat(pattern = "dd/MM/yyyy HH:mm:ss")
    @Temporal(TemporalType.TIMESTAMP)
    private Date fch_valida;
    private String flag_validar;

    @Formula("(select t.desc_depe_tde from siga.tdependencias t where t.codi_depe_tde = codi_depe_tde)")
    private String txt_desc_depe_tde;

    @Formula("(select u.nomb_cort_usu from siga.usuario u where trim(u.usuario_usu) = trim(usu_registro))")
    private String txt_comisionado;

    @Formula("decode(estado,'I','INCOMPLETA','C','COMPLETA')")
    private String txt_estado_ficha;
    
     @Formula("decode(flag_validar,'0','Ficha sin Validar','1','Validación Parcial','2','Validación Completada')")
    private String txt_flag_validar;

    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = '00' and x.coddist = '00')")
    private String departamento_demuna;
    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = codi_prov_tpr and x.coddist = '00')")
    private String provincia_demuna;
    @Formula("(select x.nombre from siga.xubigeo x where x.coddpto = codi_depa_dpt and x.codprov = codi_prov_tpr and x.coddist = codi_dist_tdi)")
    private String distrito_demuna;
    
    @Transient
    private Demuna_FichaEntity demuna_ficha;
    
    @Transient
    public Demuna_Ficha_S2Entity demuna_ficha_s2;
    @Transient
    private Demuna_Ficha_S3Entity demuna_ficha_s3;
    @Transient
    private Demuna_Ficha_S4Entity demuna_ficha_s4;
    @Transient
    private Demuna_Ficha_S5Entity demuna_ficha_s5;
    @Transient
    private Demuna_Ficha_S6Entity demuna_ficha_s6;
    @Transient
    private Demuna_Ficha_S7Entity demuna_ficha_s7;
    @Transient
    private Demuna_Ficha_S8Entity demuna_ficha_s8;
    @Transient
    private Demuna_Ficha_S9Entity demuna_ficha_s9;
    @Transient
    private Demuna_Ficha_S10Entity demuna_ficha_s10;
    @Transient
    private Demuna_Ficha_S11Entity demuna_ficha_s11;

    @Transient
    private String msg_modal;
    @Transient
    private String txt_btn_guardado_parcial;
    @Transient
    private boolean flag_readonly;
    @Transient
    private boolean flag_ie;
    @Transient
    private boolean flag_guardado_parcial;
    @Transient
    private String msg_modal_ie;
    @Transient
    private String flag_modal;
    @Transient
    private String cod_unico_ant;

    
      @Formula("(select count(ea.id_archivo) \n"
            + "from siga.demuna_archivo ea \n"
            + "where ea.id_ficha = id_ficha and ea.id_seccion = 'S1' and ea.nom_campo = 'S1_7_ARCH')")
    private Integer s1_7_arch_id_archivo;
      
      
    public Integer getId_ficha() {
        return id_ficha;
    }

    public void setId_ficha(Integer id_ficha) {
        this.id_ficha = id_ficha;
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

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCodi_depe_tde() {
        return codi_depe_tde;
    }

    public void setCodi_depe_tde(String codi_depe_tde) {
        this.codi_depe_tde = codi_depe_tde;
    }

    public Date getFch_supervision() {
        return fch_supervision;
    }

    public void setFch_supervision(Date fch_supervision) {
        this.fch_supervision = fch_supervision;
    }

    public Integer getId_sestablecmnt() {
        return id_sestablecmnt;
    }

    public void setId_sestablecmnt(Integer id_sestablecmnt) {
        this.id_sestablecmnt = id_sestablecmnt;
    }

    public String getCod_unico() {
        return cod_unico;
    }

    public void setCod_unico(String cod_unico) {
        this.cod_unico = cod_unico;
    }

    public String getTitular_entidad() {
        return titular_entidad;
    }

    public void setTitular_entidad(String titular_entidad) {
        this.titular_entidad = titular_entidad;
    }

 

    public String getNom_defensor() {
        return nom_defensor;
    }

    public void setNom_defensor(String nom_defensor) {
        this.nom_defensor = nom_defensor;
    }

    public String getNum_celular() {
        return num_celular;
    }

    public void setNum_celular(String num_celular) {
        this.num_celular = num_celular;
    }

    public String getCorreo_demuna() {
        return correo_demuna;
    }

    public void setCorreo_demuna(String correo_demuna) {
        this.correo_demuna = correo_demuna;
    }

    public String getNo_pudo_aplicar_ficha() {
        return no_pudo_aplicar_ficha;
    }

    public void getNo_pudo_aplicar_ficha(String no_pudo_aplicar_ficha) {
        this.no_pudo_aplicar_ficha = no_pudo_aplicar_ficha;
    }

    public String getDepartamento_demuna() {
        return departamento_demuna;
    }

    public void setDepartamento_demuna(String departamento_demuna) {
        this.departamento_demuna = departamento_demuna;
    }

    public String getProvincia_demuna() {
        return provincia_demuna;
    }

    public void setProvincia_demuna(String provincia_demuna) {
        this.provincia_demuna = provincia_demuna;
    }

    public String getDistrito_demuna() {
        return distrito_demuna;
    }

    public void setDistrito_demuna(String distrito_demuna) {
        this.distrito_demuna = distrito_demuna;
    }

    public String getCodi_depa_dpt() {
        return codi_depa_dpt;
    }

    public void setCodi_depa_dpt(String codi_depa_dpt) {
        this.codi_depa_dpt = codi_depa_dpt;
    }

    public String getCodi_prov_tpr() {
        return codi_prov_tpr;
    }

    public void setCodi_prov_tpr(String codi_prov_tpr) {
        this.codi_prov_tpr = codi_prov_tpr;
    }

    public String getCodi_dist_tdi() {
        return codi_dist_tdi;
    }

    public void setCodi_dist_tdi(String codi_dist_tdi) {
        this.codi_dist_tdi = codi_dist_tdi;
    }

    public String getNom_entidad() {
        return nom_entidad;
    }

    public void setNom_entidad(String nom_entidad) {
        this.nom_entidad = nom_entidad;
    }

    public String getNdocumento() {
        return ndocumento;
    }

    public void setNdocumento(String ndocumento) {
        this.ndocumento = ndocumento;
    }

    public String getTxt_desc_depe_tde() {
        return txt_desc_depe_tde;
    }

    public void setTxt_desc_depe_tde(String txt_desc_depe_tde) {
        this.txt_desc_depe_tde = txt_desc_depe_tde;
    }

    public String getTxt_comisionado() {
        return txt_comisionado;
    }

    public void setTxt_comisionado(String txt_comisionado) {
        this.txt_comisionado = txt_comisionado;
    }

    public String getTxt_estado_ficha() {
        return txt_estado_ficha;
    }

    public void setTxt_estado_ficha(String txt_estado_ficha) {
        this.txt_estado_ficha = txt_estado_ficha;
    }
    
    
    public Demuna_FichaEntity getDemuna_ficha() {
        return demuna_ficha;
    }

    public void setDemuna_ficha(Demuna_FichaEntity demuna_ficha) {
        this.demuna_ficha = demuna_ficha;
    }
    
    

    public Demuna_Ficha_S2Entity getDemuna_ficha_s2() {
        return demuna_ficha_s2;
    }

    public void setDemuna_ficha_s2(Demuna_Ficha_S2Entity demuna_ficha_s2) {
        this.demuna_ficha_s2 = demuna_ficha_s2;
    }

    public Demuna_Ficha_S3Entity getDemuna_ficha_s3() {
        return demuna_ficha_s3;
    }

    public void setDemuna_ficha_s3(Demuna_Ficha_S3Entity demuna_ficha_s3) {
        this.demuna_ficha_s3 = demuna_ficha_s3;
    }

    public Demuna_Ficha_S4Entity getDemuna_ficha_s4() {
        return demuna_ficha_s4;
    }

    public void setDemuna_ficha_s4(Demuna_Ficha_S4Entity demuna_ficha_s4) {
        this.demuna_ficha_s4 = demuna_ficha_s4;
    }

    public Demuna_Ficha_S5Entity getDemuna_ficha_s5() {
        return demuna_ficha_s5;
    }

    public void setDemuna_ficha_s5(Demuna_Ficha_S5Entity demuna_ficha_s5) {
        this.demuna_ficha_s5 = demuna_ficha_s5;
    }

    public Demuna_Ficha_S6Entity getDemuna_ficha_s6() {
        return demuna_ficha_s6;
    }

    public void setDemuna_ficha_s6(Demuna_Ficha_S6Entity demuna_ficha_s6) {
        this.demuna_ficha_s6 = demuna_ficha_s6;
    }

    public Demuna_Ficha_S7Entity getDemuna_ficha_s7() {
        return demuna_ficha_s7;
    }

    public void setDemuna_ficha_s7(Demuna_Ficha_S7Entity demuna_ficha_s7) {
        this.demuna_ficha_s7 = demuna_ficha_s7;
    }

    public Demuna_Ficha_S8Entity getDemuna_ficha_s8() {
        return demuna_ficha_s8;
    }

    public void setDemuna_ficha_s8(Demuna_Ficha_S8Entity demuna_ficha_s8) {
        this.demuna_ficha_s8 = demuna_ficha_s8;
    }

    public Demuna_Ficha_S9Entity getDemuna_ficha_s9() {
        return demuna_ficha_s9;
    }

    public void setDemuna_ficha_s9(Demuna_Ficha_S9Entity demuna_ficha_s9) {
        this.demuna_ficha_s9 = demuna_ficha_s9;
    }

    public Demuna_Ficha_S10Entity getDemuna_ficha_s10() {
        return demuna_ficha_s10;
    }

    public void setDemuna_ficha_s10(Demuna_Ficha_S10Entity demuna_ficha_s10) {
        this.demuna_ficha_s10 = demuna_ficha_s10;
    }

    public Demuna_Ficha_S11Entity getDemuna_ficha_s11() {
        return demuna_ficha_s11;
    }

    public void setDemuna_ficha_s11(Demuna_Ficha_S11Entity demuna_ficha_s11) {
        this.demuna_ficha_s11 = demuna_ficha_s11;
    }

    public String getMsg_modal() {
        return msg_modal;
    }

    public void setMsg_modal(String msg_modal) {
        this.msg_modal = msg_modal;
    }

    public String getTxt_btn_guardado_parcial() {
        return txt_btn_guardado_parcial;
    }

    public void setTxt_btn_guardado_parcial(String txt_btn_guardado_parcial) {
        this.txt_btn_guardado_parcial = txt_btn_guardado_parcial;
    }

    public boolean isFlag_readonly() {
        return flag_readonly;
    }

    public void setFlag_readonly(boolean flag_readonly) {
        this.flag_readonly = flag_readonly;
    }

    public boolean isFlag_ie() {
        return flag_ie;
    }

    public void setFlag_ie(boolean flag_ie) {
        this.flag_ie = flag_ie;
    }

    public boolean isFlag_guardado_parcial() {
        return flag_guardado_parcial;
    }

    public void setFlag_guardado_parcial(boolean flag_guardado_parcial) {
        this.flag_guardado_parcial = flag_guardado_parcial;
    }

    public String getMsg_modal_ie() {
        return msg_modal_ie;
    }

    public void setMsg_modal_ie(String msg_modal_ie) {
        this.msg_modal_ie = msg_modal_ie;
    }

    public String getFlag_modal() {
        return flag_modal;
    }

    public void setFlag_modal(String flag_modal) {
        this.flag_modal = flag_modal;
    }

    public String getCod_unico_ant() {
        return cod_unico_ant;
    }

    public void setCod_unico_ant(String cod_unico_ant) {
        this.cod_unico_ant = cod_unico_ant;
    }

    /**
     * ********************************
     */
    public String getDireccion_defensor() {
        return direccion_defensor;
    }

    public void setDireccion_defensor(String direccion_defensor) {
        this.direccion_defensor = direccion_defensor;
    }

    public String getTelefono_defensor() {
        return telefono_defensor;
    }

    public void setTelefono_defensor(String telefono_defensor) {
        this.telefono_defensor = telefono_defensor;
    }

    public String getCorreo_defensor() {
        return correo_defensor;
    }

    public void setCorreo_defensor(String correo_defensor) {
        this.correo_defensor = correo_defensor;
    }

    /**
     * ********************************
     */
    public String getDireccion_demuna() {
        return direccion_demuna;
    }

    public void setDireccion_demuna(String direccion_demuna) {
        this.direccion_demuna = direccion_demuna;
    }

    public String getCorreo_demuna_oficial() {
        return correo_demuna_oficial;
    }

    public void setCorreo_demuna_oficial(String correo_demuna_oficial) {
        this.correo_demuna_oficial = correo_demuna_oficial;
    }

    public String getTelefono_demuna() {
        return telefono_demuna;
    }

    public void setTelefono_demuna(String telefono_demuna) {
        this.telefono_demuna = telefono_demuna;
    }
    
     public String getDni_funcionario() {
        return dni_funcionario;
    }

    public void setDni_funcionario(String dni_funcionario) {
        this.dni_funcionario = dni_funcionario;
    }
    
    
     public String getAceptar() {
        return aceptar;
    }

    public void setAceptar(String aceptar) {
        this.aceptar = aceptar;
    }
    
    
       public String getNom_funcionario() {
        return nom_funcionario;
    }

    public void setNom_funcionario(String nom_funcionario) {
        this.nom_funcionario = nom_funcionario;
    }
    
    public String getDni_defensor_demuna() {
        return dni_defensor_demuna;
    }

    public void setDni_defensor_demuna(String dni_defensor_demuna) {
        this.dni_defensor_demuna = dni_defensor_demuna;
    }
    
      public String getTelefono_funcionario() {
        return telefono_funcionario;
    }

    public void setTelefono_funcionario(String telefono_funcionario) {
        this.telefono_funcionario = telefono_funcionario;
    }
    
    public String getCorreo_funcionario() {
        return correo_funcionario;
    }

    public void setCorreo_funcionario(String correo_funcionario) {
        this.correo_funcionario = correo_funcionario;
    }
     
    
         public String getMotivo_no_implementado() {
        return motivo_no_implementado;
    }

    public void setMotivo_no_implementado(String motivo_no_implementado) {
        this.motivo_no_implementado = motivo_no_implementado;
    }
      
/**
     * ********************************
     */
    public String getDni_alcalde() {
        return dni_alcalde;
    }

    public void setDni_alcalde(String dni_alcalde) {
        this.dni_alcalde = dni_alcalde;
    }

    public String getTelefono_alcalde() {
        return telefono_alcalde;
    }

    public void setTelefono_alcalde(String telefono_alcalde) {
        this.telefono_alcalde = telefono_alcalde;
    }

    public String getCorreo_alcalde() {
        return correo_alcalde;
    }

    public void setCorreo_alcalde(String correo_alcalde) {
        this.correo_alcalde = correo_alcalde;
    }

    /**
     * ********************************
     */
    
     public String getP1_6() {
        return p1_6;
    }

    public void setP1_6(String p1_6) {
        this.p1_6 = p1_6;
    }

    public String getP1_7() {
        return p1_7;
    }

    public void setP1_7(String p1_7) {
        this.p1_7 = p1_7;
    }
    
     public String getP1_observa() {
        return p1_observa;
    }

    public void setP1_observa(String p1_observa) {
        this.p1_observa = p1_observa;
    }
    
 public String getC_tipo_entidad() {
        return c_tipo_entidad;
    }

    public void setC_tipo_entidad(String c_tipo_entidad) {
        this.c_tipo_entidad = c_tipo_entidad;
    }
}
