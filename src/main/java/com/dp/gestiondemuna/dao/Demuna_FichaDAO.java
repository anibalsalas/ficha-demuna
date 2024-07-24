package com.dp.gestiondemuna.dao;

import com.dp.gestiondemuna.dto.GepCuadroComparativoDTO;
import com.dp.gestiondemuna.entity.Demuna_ArchivoEntity;
import com.dp.gestiondemuna.entity.Demuna_ArchivoPk;
import com.dp.gestiondemuna.entity.Demuna_EstablecimientosEntity;
import com.dp.gestiondemuna.entity.Demuna_FichaEntity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S10Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S11Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S2Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S3Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S4Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S5Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S6Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S7Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S8Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S9Entity;
import com.dp.gestiondemuna.entity.XubigeoEntity;
import java.util.List;

public interface Demuna_FichaDAO {

    //SECCION GENERAL
    public List<Demuna_FichaEntity> listarFichas(String usuario_usu, String codi_depe_tde);

    public Integer generarIdFicha();

    public void guardarFicha(Demuna_FichaEntity ficha);

    public List<Demuna_FichaEntity> buscarFichaByCodigoUnico(String cod_unico);

    public Demuna_FichaEntity getFichaByIdFicha(Integer id_ficha);

    public List<Demuna_FichaEntity> listarFichasByComisionado(String usuario_usu);
    
    public Demuna_FichaEntity getFichaByCodigoUnico(String cod_unico);

    /**
     *
     * INICIO NUEVO
     */
    public List<Demuna_EstablecimientosEntity> listarEM();

    public List<Demuna_FichaEntity> listarFichasByCodUnico(String cod_unico);

    public List<Demuna_FichaEntity> listarFichasByCodUnico2();

    /**
     *
     * FIN NUEVO OSWALDO
     */
    //SECCION 2
    //public String buscarTipoFichaEstablecimiento(String cod_unico);
    public Integer generarIdFichaS2();

    public void guardarFichaS2(Demuna_Ficha_S2Entity fichaS2);

    public Demuna_Ficha_S2Entity getFichaS2ByIdFicha(Integer id_ficha);

    //Seccion 2 P5
//    public Integer generarIdFichaS2P5();
//    public Demuna_Ficha_S2_P5Entity getFichaS2P5ByIdFicha(Integer id_ficha, Integer id_ficha_s2_esp);
//
//    public void guardarFichaS2P5(Demuna_Ficha_S2_P5Entity fichaS2P5);
//
//    public void borrarFichaS2P5(Integer id_ficha);
//
//    public List<Demuna_Ficha_S2_P5Entity> listarFichaEspecialidades(Integer id_ficha, String tipo);
    //SECCION 3
    public Integer generarIdFichaS3();

    public void guardarFichaS3(Demuna_Ficha_S3Entity fichaS3);

    public Demuna_Ficha_S3Entity getFichaS3ByIdFicha(Integer id_ficha);

    //SECCION 4
    public Integer generarIdFichaS4();

    public void guardarFichaS4(Demuna_Ficha_S4Entity fichaS4);

    public Demuna_Ficha_S4Entity getFichaS4ByIdFicha(Integer id_ficha);

    //SECCION 5
    public Integer generarIdFichaS5();

    public void guardarFichaS5(Demuna_Ficha_S5Entity fichaS5);

    public Demuna_Ficha_S5Entity getFichaS5ByIdFicha(Integer id_ficha);

    //SECCION 6
    public Integer generarIdFichaS6();

    public void guardarFichaS6(Demuna_Ficha_S6Entity fichaS6);

    public Demuna_Ficha_S6Entity getFichaS6ByIdFicha(Integer id_ficha);

    //SECCION 7
    public Integer generarIdFichaS7();

    public void guardarFichaS7(Demuna_Ficha_S7Entity fichaS7);

    public Demuna_Ficha_S7Entity getFichaS7ByIdFicha(Integer id_ficha);

    //SECCION 8
    public Integer generarIdFichaS8();

    public void guardarFichaS8(Demuna_Ficha_S8Entity fichaS8);

    public Demuna_Ficha_S8Entity getFichaS8ByIdFicha(Integer id_ficha);

    //SECCION 9
    public Integer generarIdFichaS9();

    public void guardarFichaS9(Demuna_Ficha_S9Entity fichaS9);

    public Demuna_Ficha_S9Entity getFichaS9ByIdFicha(Integer id_ficha);

    //SECCION 10
    public Integer generarIdFichaS10();

    public void guardarFichaS10(Demuna_Ficha_S10Entity fichaS10);

    public Demuna_Ficha_S10Entity getFichaS10ByIdFicha(Integer id_ficha);

    //SECCION 11
    public Integer generarIdFichaS11();

    public void guardarFichaS11(Demuna_Ficha_S11Entity fichaS11);

    public Demuna_Ficha_S11Entity getFichaS11ByIdFicha(Integer id_ficha);

    public List<Demuna_FichaEntity> listarSeguimientoFichas(String codi_depa_dpt, String estado);

    public List<GepCuadroComparativoDTO> listarCuadroRegistro();

    public GepCuadroComparativoDTO listarTotalCuadroRegistro();

    public List<GepCuadroComparativoDTO> listarCuadroRegistro2();

    //SALUD ESTABLECIMIENTO
    public Demuna_EstablecimientosEntity buscarByCodEESS(String cod_unico);

    //XUBIGEO
    List<XubigeoEntity> findAllDepartamento();

    List<XubigeoEntity> findAllProvincia(String coddpto);

    //List<Demuna_EstablecimientosEntity> findUniqueDistrito(String coddptox, String codprovx, String coddistx);
    List<XubigeoEntity> findAllDistrito(String coddpto, String codprov);

    List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(String coddptox, String codprovx);

    List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(String coddptox, String codprovx, String coddistx);

    XubigeoEntity findDptoByNomb(String departamento);

    XubigeoEntity findProvByNomb(String coddpto, String provincia);

    XubigeoEntity findDistByNomb(String coddpto, String codprov, String distrito);

    public List<String> listarRegiones();
    //PARAMETROS
//    List<ParametroDTO> listarDependenciaEESS();
//
//    List<ParametroDTO> listarCategoriaEESS();

    //Especialidades Seccion2
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesNeurologicas(String tipo_especialidad);
//
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesIncor(String tipo_especialidad);
//
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNinio(String tipo_especialidad);
//
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNeoplasicas(String tipo_especialidad);
//
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesOftalmologicas(String tipo_especialidad);
//
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNoguchi(String tipo_especialidad);
//
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesMaternidad(String tipo_especialidad);
//
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesRebagliati(String tipo_especialidad);
//
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesRehabilitacion(String tipo_especialidad);
    public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnico(String cod_unico);

    //ARCHIVOS
    public Integer generarIdArchivo();

    public void guardarArchivo(Demuna_ArchivoEntity archivo);

    public List<Demuna_ArchivoEntity> listarArchivos(Integer id_ficha, String nom_campo, String id_seccion, String cod_unico);

    public Demuna_ArchivoEntity getArchivoById(Integer id_archivo, Integer id_ficha, String cod_unico);

    public void eliminarArchivoById(Demuna_ArchivoPk id);

    public Demuna_FichaEntity validarSecX(Integer id_ficha, Integer id_ficha_x, String sec_x, String usu_valida);
}
