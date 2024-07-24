/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestiondemuna.entity;

import java.io.Serializable;
import javax.persistence.Embeddable;

/**
 *
 * @author csanchezl
 */
@Embeddable

public class Demuna_Ficha_S4_P4PKEntity implements Serializable {
  
    public Integer id_ficha_s4;
    public Integer id_ficha;
    public Integer id_secuencia;

    public Integer getId_ficha_s4() {
        return id_ficha_s4;
    }

    public void setId_ficha_s4(Integer id_ficha_s4) {
        this.id_ficha_s4 = id_ficha_s4;
    }

    public Integer getId_ficha() {
        return id_ficha;
    }

    public void setId_ficha(Integer id_ficha) {
        this.id_ficha = id_ficha;
    }

    public Integer getId_secuencia() {
        return id_secuencia;
    }

    public void setId_secuencia(Integer id_secuencia) {
        this.id_secuencia = id_secuencia;
    }
    
    
}

