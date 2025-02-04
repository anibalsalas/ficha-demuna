
package com.dp.gestiondemuna.repository;

import com.dp.gestiondemuna.entity.Demuna_EstablecimientosEntity;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface Demuna_EstablecimientosRepository extends JpaRepository<Demuna_EstablecimientosEntity, Integer> {

    @Query(value = "select f from Demuna_EstablecimientosEntity f where trim(f.cod_unico)=:cod_unico")
    public Demuna_EstablecimientosEntity buscarByCodEESS(@Param("cod_unico") String cod_unico);

    /**
     * INICIO NUEVO 
     */
    @Query("SELECT f FROM Demuna_EstablecimientosEntity f ORDER BY f.nom_entidad ASC")
    public List<Demuna_EstablecimientosEntity> listarEM();

    
        @Query(value = "select u from Demuna_EstablecimientosEntity u where trim(upper(u.cod_unico))=:username")
    Demuna_EstablecimientosEntity buscarAutoridad(@Param("username") String username);
    
    /**
     * FIN NUEVO 
     */

//    @Query(value = "select tipo_ficha from Demuna_EstablecimientosEntity f where trim(f.cod_unico)=:cod_unico")
//    public String buscarTipoFichaEstablecimiento(@Param("cod_unico") String cod_unico);
}
