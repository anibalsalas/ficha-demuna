package com.dp.gestiondemuna.repository;

import com.dp.gestiondemuna.entity.Demuna_Ficha_S11Entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface Demuna_Ficha_S11Repository extends JpaRepository<Demuna_Ficha_S11Entity, Integer> {

    @Query(value = "select nvl(max(id_ficha_s11),0) + 1 from siga.demuna_ficha_S11", nativeQuery = true)
    public Integer generarIdFichaS11();

    @Query(value = "select f from Demuna_Ficha_S11Entity f where f.id_ficha=:id_ficha")
    public Demuna_Ficha_S11Entity getFichaS11ByIdFicha(@Param("id_ficha") Integer id_ficha);

//       @Modifying
//    @Transactional
//    @Query("UPDATE Demuna_Ficha_S11Entity f SET f.fch_actualiza = :#{#entity.fch_actualiza}, f.fch_registro = :#{#entity.fch_registro}, f.fch_va_actualiza = :#{#entity.fch_va_actualiza}, f.fch_valida = :#{#entity.fch_valida}, f.p11_1 = :#{#entity.p11_1}, f.p11_1_1_1 = :#{#entity.p11_1_1_1}, f.p11_1_1_2 = :#{#entity.p11_1_1_2}, f.p11_1_1_3 = :#{#entity.p11_1_1_3}, f.p11_2 = :#{#entity.p11_2}, f.p11_2_1_go_regional = :#{#entity.p11_2_1_go_regional}, f.p11_2_1_indeci = :#{#entity.p11_2_1_indeci}, f.p11_2_1_mimp = :#{#entity.p11_2_1_mimp}, f.p11_2_1_muni_provincial = :#{#entity.p11_2_1_muni_provincial}, f.p11_2_otro = :#{#entity.p11_2_otro}, f.p11_2_otro_desc = :#{#entity.p11_2_otro_desc}, f.p11_3 = :#{#entity.p11_3}, f.p11_4 = :#{#entity.p11_4}, f.p11_5 = :#{#entity.p11_5}, f.p11_6 = :#{#entity.p11_6}, f.p11_7_1 = :#{#entity.p11_7_1}, f.p11_7_2 = :#{#entity.p11_7_2}, f.p11_7_3 = :#{#entity.p11_7_3}, f.p11_observa = :#{#entity.p11_observa}, f.usu_actualiza = :#{#entity.usu_actualiza}, f.usu_va_actualiza = :#{#entity.usu_va_actualiza}, f.usu_registro = :#{#entity.usu_registro}, f.usu_valida = :#{#entity.usu_valida} WHERE f.id_ficha_s11 = :#{#entity.id_ficha_s11}")
//    void saveWithoutIdFichaUpdate(@Param("entity") Demuna_Ficha_S11Entity entity);
    @Transactional
    @Modifying
    @Query(value = "update siga.demuna_ficha_s11 f set f.estado_s11 = '1', f.usu_valida=:usu_valida, f.fch_valida=sysdate where f.id_ficha=:id_ficha and f.id_ficha_s11=:id_ficha_s11", nativeQuery = true)
    public void validarSec11(@Param("id_ficha") Integer id_ficha, @Param("id_ficha_s11") Integer id_ficha_s11, @Param("usu_valida") String usu_valida);
}
