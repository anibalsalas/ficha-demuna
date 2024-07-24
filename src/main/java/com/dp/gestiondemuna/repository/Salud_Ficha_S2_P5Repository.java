//package com.dp.gestionsalud.repository;
//
//import com.dp.gestionsalud.entity.Salud_Ficha_S2_P5Entity;
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.transaction.annotation.Transactional;
//
//public interface Salud_Ficha_S2_P5Repository extends JpaRepository<Salud_Ficha_S2_P5Entity, Integer> {
//
//    @Query(value = "select nvl(max(id_ficha_s2_p5),0) + 1 from siga.salud_ficha_s2_p5", nativeQuery = true)
//    public Integer generarIdFichaS2P5();
//
//    @Query(value = "select f from Salud_Ficha_S2_P5Entity f where f.id_ficha=:id_ficha and f.id_ficha_s2_esp=:id_ficha_s2_esp")
//    public Salud_Ficha_S2_P5Entity getFichaS2P5ByIdFicha(@Param("id_ficha") Integer id_ficha, @Param("id_ficha_s2_esp") Integer id_ficha_s2_esp);
//
//    @Query(value = "select S2.id_ficha_s2_p5,\n"
//            + "            S2.id_ficha,\n"
//            + "            S2.id_ficha_s2_esp,\n"
//            + "            S2.p2_5_aplica,\n"
//            + "            S2.p2_5_total,\n"
//            + "            S2.p2_5_m,\n"
//            + "            S2.p2_5_f,\n"
//            + "            S2.p2_5_nombrado,\n"
//            + "            S2.p2_5_destacado,\n"
//            + "            S2.p2_5_cas_temp,\n"
//            + "            S2.p2_5_cas_inde,\n"
//            + "            S2.p2_5_residente,\n"
//            + "            S2.p2_5_interno,\n"
//            + "            S2.p2_5_serums,\n"
//            + "            S2.p2_5_locacion,\n"
//            + "            S2.p2_5_licencia,\n"
//            + "            S2.p2_5_destacado_otro,\n"
//            + "            S2.p2_5_necesita,\n"
//            + "            S2.p2_5_cexterna,\n"
//            + "            S2.p2_5_hospitalizacion,\n"
//            + "            S2.p2_5_cirugia,\n"
//            + "            S2.p2_5_emergencia,\n"
//            + "            S2.p2_5_investigacion,\n"
//            + "            S2.p2_5_docencia,\n"
//            + "            S2.p2_5_teletrabajo,\n"
//            + "            S2.p2_5_nombre_otro,\n"
//            + "            es.nombre_especialidad, \n"
//            + "            es.tipo_especialidad \n,"
//            + "            S2.usu_registro, \n"
//            + "            S2.fch_registro \n"
//            + "            from siga.salud_ficha_s2_p5 S2 ,siga.salud_ficha_s2_especialidad es where S2.id_ficha=:id_ficha and es.tipo_especialidad=:tipo "
//            + " and S2.id_ficha_s2_esp=es.id_ficha_s2_esp", nativeQuery = true)
//
//    public List<Object[]> listarFichaEspecialidades(@Param("id_ficha") Integer id_ficha, @Param("tipo") String tipo);
//
//    @Transactional
//    @Modifying
//    @Query(value = "delete from siga.salud_ficha_s2_p5 where id_ficha=:id_ficha", nativeQuery = true)
//    public void borrarFichaS2P5(@Param("id_ficha") Integer id_ficha);
//
//}
