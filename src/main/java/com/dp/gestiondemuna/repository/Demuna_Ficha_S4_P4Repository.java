/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dp.gestiondemuna.repository;

import com.dp.gestiondemuna.entity.Demuna_Ficha_S4_P4Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S4_P4PKEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author csanchezl
 */

public interface Demuna_Ficha_S4_P4Repository extends JpaRepository<Demuna_Ficha_S4_P4Entity, Demuna_Ficha_S4_P4PKEntity> {
    @Query(value = "select nvl(max(id_secuencia),0) + 1 from siga.demuna_ficha_s4_p4 where id_ficha_s4 =:id_ficha_s4", nativeQuery = true)
    public Integer generarIdFichaS4P4(@Param("id_ficha_s4") Integer id_ficha_s4);

    @Query(value = "select f from Demuna_Ficha_S4_P4Entity f where f.demuna_ficha_s4_p4pk.id_ficha=:id_ficha and f.p4_profesion =:p4_profesion")
    public List<Demuna_Ficha_S4_P4Entity> getFichaS4_P4ByIdFicha(@Param("id_ficha") Integer id_ficha, @Param("p4_profesion") String p4_profesion);
}
