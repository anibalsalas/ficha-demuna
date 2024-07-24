//package com.dp.gestionsalud.repository;
//
//import com.dp.gestionsalud.entity.Salud_Ficha_S2_EspecialidadEntity;
//import com.dp.gestionsalud.entity.Salud_Ficha_S2_P5Entity;
//import java.util.List;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//
//public interface Salud_Ficha_S2_EspecialidadRepository extends JpaRepository<Salud_Ficha_S2_EspecialidadEntity, Integer> {
//
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and neurologicas='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNeurologicas(@Param("tipo_especialidad") String tipo_especialidad);
//
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and incor='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesIncor(@Param("tipo_especialidad") String tipo_especialidad);
//
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and ninio='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNinio(@Param("tipo_especialidad") String tipo_especialidad);
//    
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and neoplasicas='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNeoplasicas(@Param("tipo_especialidad") String tipo_especialidad);
//    
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and oftalmologicas='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesOftalmologicas(@Param("tipo_especialidad") String tipo_especialidad);
//    
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and noguchi='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNoguchi(@Param("tipo_especialidad") String tipo_especialidad);
//    
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and maternidad='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesMaternidad(@Param("tipo_especialidad") String tipo_especialidad);
//    
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and rebagliati='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesRebagliati(@Param("tipo_especialidad") String tipo_especialidad);
//    
//    @Query("select f from Salud_Ficha_S2_EspecialidadEntity f where tipo_especialidad=:tipo_especialidad and rehabilitacion='S'")
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesRehabilitacion(@Param("tipo_especialidad") String tipo_especialidad);
//
//}
