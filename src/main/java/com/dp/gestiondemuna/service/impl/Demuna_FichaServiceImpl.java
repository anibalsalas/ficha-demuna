package com.dp.gestiondemuna.service.impl;

import com.dp.gestiondemuna.dao.Demuna_FichaDAO;
import com.dp.gestiondemuna.dto.GepCuadroComparativoDTO;
import com.dp.gestiondemuna.entity.Demuna_ArchivoEntity;
import com.dp.gestiondemuna.entity.Demuna_ArchivoPk;
import com.dp.gestiondemuna.entity.Demuna_EstablecimientosEntity;
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
import com.dp.gestiondemuna.service.Demuna_FichaService;
import com.dp.gestiondemuna.entity.XubigeoEntity;
import com.dp.gestiondemuna.entity.Demuna_FichaEntity;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S11Repository;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Demuna_FichaServiceImpl implements Demuna_FichaService {

    @Autowired
    private Demuna_Ficha_S11Repository demuna_Ficha_S11Repository;

    @Autowired
    Demuna_FichaDAO demuna_FichaDAO;

    @Override
    public Integer generarIdFicha() {
        return demuna_FichaDAO.generarIdFicha();
    }

    @Override
    public void guardarFicha(Demuna_FichaEntity ficha) {
        demuna_FichaDAO.guardarFicha(ficha);
    }

    @Override
    public List<Demuna_FichaEntity> buscarFichaByCodigoUnico(String cod_unico) {
        return demuna_FichaDAO.buscarFichaByCodigoUnico(cod_unico);
    }

    @Override
    public Integer generarIdFichaS2() {
        return demuna_FichaDAO.generarIdFichaS2();
    }

    @Override
    public void guardarFichaS2(Demuna_Ficha_S2Entity fichaS2) {
        demuna_FichaDAO.guardarFichaS2(fichaS2);
    }

    @Override
    public List<Demuna_FichaEntity> listarFichas(String usuario_usu, String codi_depe_tde) {
        return demuna_FichaDAO.listarFichas(usuario_usu, codi_depe_tde);
    }

    @Override
    public Integer generarIdFichaS3() {
        return demuna_FichaDAO.generarIdFichaS3();
    }

    @Override
    public void guardarFichaS3(Demuna_Ficha_S3Entity fichaS3) {
        demuna_FichaDAO.guardarFichaS3(fichaS3);
    }

    @Override
    public Integer generarIdFichaS4() {
        return demuna_FichaDAO.generarIdFichaS4();
    }

    @Override
    public void guardarFichaS4(Demuna_Ficha_S4Entity fichaS4) {
        demuna_FichaDAO.guardarFichaS4(fichaS4);
    }

    @Override
    public Integer generarIdFichaS5() {
        return demuna_FichaDAO.generarIdFichaS5();
    }

    @Override
    public void guardarFichaS5(Demuna_Ficha_S5Entity fichaS5) {
        demuna_FichaDAO.guardarFichaS5(fichaS5);
    }

    @Override
    public Integer generarIdFichaS6() {
        return demuna_FichaDAO.generarIdFichaS6();
    }

    @Override
    public void guardarFichaS6(Demuna_Ficha_S6Entity fichaS6) {
        demuna_FichaDAO.guardarFichaS6(fichaS6);
    }

    @Override
    public Integer generarIdFichaS7() {
        return demuna_FichaDAO.generarIdFichaS7();
    }

    @Override
    public void guardarFichaS7(Demuna_Ficha_S7Entity fichaS7) {
        demuna_FichaDAO.guardarFichaS7(fichaS7);
    }

    @Override
    public Integer generarIdFichaS8() {
        return demuna_FichaDAO.generarIdFichaS8();
    }

    @Override
    public void guardarFichaS8(Demuna_Ficha_S8Entity fichaS8) {
        demuna_FichaDAO.guardarFichaS8(fichaS8);
    }

    @Override
    public Integer generarIdFichaS9() {
        return demuna_FichaDAO.generarIdFichaS9();
    }

    @Override
    public void guardarFichaS9(Demuna_Ficha_S9Entity fichaS9) {
        demuna_FichaDAO.guardarFichaS9(fichaS9);
    }

    @Override
    public Integer generarIdFichaS10() {
        return demuna_FichaDAO.generarIdFichaS10();
    }

    @Override
    public void guardarFichaS10(Demuna_Ficha_S10Entity fichaS10) {
        demuna_FichaDAO.guardarFichaS10(fichaS10);
    }

    @Override
    public Integer generarIdFichaS11() {
        return demuna_FichaDAO.generarIdFichaS11();
    }

    @Override
    public void guardarFichaS11(Demuna_Ficha_S11Entity fichaS11) {
        demuna_FichaDAO.guardarFichaS11(fichaS11);
    }

    @Override
    public Demuna_FichaEntity getFichaByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S2Entity getFichaS2ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS2ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S3Entity getFichaS3ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS3ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S4Entity getFichaS4ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS4ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S5Entity getFichaS5ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS5ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S6Entity getFichaS6ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS6ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S7Entity getFichaS7ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS7ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S8Entity getFichaS8ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS8ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S9Entity getFichaS9ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS9ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S10Entity getFichaS10ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS10ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_Ficha_S11Entity getFichaS11ByIdFicha(Integer id_ficha) {
        return demuna_FichaDAO.getFichaS11ByIdFicha(id_ficha);
    }

    @Override
    public Demuna_EstablecimientosEntity buscarByCodEESS(String cod_unico) {
        return demuna_FichaDAO.buscarByCodEESS(cod_unico);
    }

    @Override
    public List<XubigeoEntity> findAllDepartamento() {
        return demuna_FichaDAO.findAllDepartamento();
    }

    @Override
    public List<XubigeoEntity> findAllProvincia(String coddpto) {
        return demuna_FichaDAO.findAllProvincia(coddpto);
    }

//    @Override
//    public List<Demuna_EstablecimientosEntity> findUniqueDistrito(String coddptox, String codprovx, String coddistx) {
//        return demuna_FichaDAO.findUniqueDistrito(coddptox, codprovx, coddistx);
//    }
    @Override
    public List<XubigeoEntity> findAllDistrito(String coddpto, String codprov) {
        return demuna_FichaDAO.findAllDistrito(coddpto, codprov);
    }

//    @Override
//    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(String ubigeo) {
//        return demuna_FichaDAO.findMunicipalidadesByDepartamento(ubigeo);
//    }
    @Override
    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(String coddptox, String codprovx) {
        return demuna_FichaDAO.findMunicipalidadesByDepartamento(coddptox, codprovx);
    }

    @Override
    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(String coddptox, String codprovx, String coddistx) {
        return demuna_FichaDAO.findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(coddptox, codprovx, coddistx);
    }

    @Override
    public List<String> listarRegiones() {
        return demuna_FichaDAO.listarRegiones();
    }

    @Override
    public XubigeoEntity findDptoByNomb(String departamento) {
        return demuna_FichaDAO.findDptoByNomb(departamento);
    }

    @Override
    public List<GepCuadroComparativoDTO> listarCuadroRegistro() {
        return demuna_FichaDAO.listarCuadroRegistro();
    }
//

    @Override
    public GepCuadroComparativoDTO listarTotalCuadroRegistro() {
        return demuna_FichaDAO.listarTotalCuadroRegistro();
    }

    @Override
    public List<GepCuadroComparativoDTO> listarCuadroRegistro2() {
        return demuna_FichaDAO.listarCuadroRegistro2();
    }

    @Override
    public XubigeoEntity findProvByNomb(String coddpto, String provincia) {
        return demuna_FichaDAO.findProvByNomb(coddpto, provincia);
    }

    @Override
    public XubigeoEntity findDistByNomb(String coddpto, String codprov, String distrito) {
        return demuna_FichaDAO.findDistByNomb(coddpto, codprov, distrito);
    }

//    @Override
//    public List<ParametroDTO> listarDependenciaEESS() {
//        return demuna_FichaDAO.listarDependenciaEESS();
//    }
//
//    @Override
//    public List<ParametroDTO> listarCategoriaEESS() {
//        return demuna_FichaDAO.listarCategoriaEESS();
//    }
//
    @Override
    public List<Demuna_EstablecimientosEntity> listarEM() {
        return demuna_FichaDAO.listarEM();
    }

    @Override
    public List<Demuna_FichaEntity> listarSeguimientoFichas(String codi_depa_dpt, String estado) {
        return demuna_FichaDAO.listarSeguimientoFichas(codi_depa_dpt, estado);
    }

    ////////////ARCHIVOS////////////
    @Override
    public Integer generarIdArchivo() {
        return demuna_FichaDAO.generarIdArchivo();
    }

    @Override
    public void guardarArchivo(Demuna_ArchivoEntity archivo) {
        demuna_FichaDAO.guardarArchivo(archivo);
    }

    @Override
    public List<Demuna_ArchivoEntity> listarArchivos(Integer id_ficha, String nom_campo, String id_seccion, String cod_unico) {
        return demuna_FichaDAO.listarArchivos(id_ficha, nom_campo, id_seccion, cod_unico);
    }

    @Override
    public Demuna_ArchivoEntity getArchivoById(Integer id_archivo, Integer id_ficha, String cod_unico) {
        return demuna_FichaDAO.getArchivoById(id_archivo, id_ficha,cod_unico);
    }

    @Override
    public void eliminarArchivoById(Demuna_ArchivoPk id) {
        demuna_FichaDAO.eliminarArchivoById(id);
    }

    @Override
    public void validarParcial(Demuna_Ficha_S11Entity fichaS11Entity) {
        fichaS11Entity.setUsu_valida("usuarioValidacion");
        // fichaS11Entity.setUsu_va_actualiza("usuarioActualizacionValidacion");
        fichaS11Entity.setFch_valida(new Date());
        //  fichaS11Entity.setFch_va_actualiza(new Date());

        //  demuna_Ficha_S11Repository.save(fichaS11Entity); 
//        demuna_Ficha_S11Repository.saveWithoutIdFichaUpdate(fichaS11Entity);
    }

    /* Seccion S2 P5*/
//    @Override
//    public Integer generarIdFichaS2P5() {
//        return demuna_FichaDAO.generarIdFichaS2P5();
//    }
//
//    @Override
//    public Salud_Ficha_S2_P5Entity getFichaS2P5ByIdFicha(Integer id_ficha, Integer id_ficha_s2_esp) {
//        return demuna_FichaDAO.getFichaS2P5ByIdFicha(id_ficha, id_ficha_s2_esp);
//    }
//
//    @Override
//    public void guardarFichaS2P5(Salud_Ficha_S2_P5Entity fichaS2P5) {
//        demuna_FichaDAO.guardarFichaS2P5(fichaS2P5);
//    }
//
//    @Override
//    public void borrarFichaS2P5(Integer id_ficha) {
//        demuna_FichaDAO.borrarFichaS2P5(id_ficha);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_P5Entity> listarFichaEspecialidades(Integer id_ficha, String tipo) {
//        return demuna_FichaDAO.listarFichaEspecialidades(id_ficha, tipo);
//    }

    /* Fin Seccion S2 P5*/
 /* Especialidades Seccion 2*/
//    @Override
//    public String buscarTipoFichaEstablecimiento(String cod_unico) {
//        return demuna_FichaDAO.buscarTipoFichaEstablecimiento(cod_unico);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNeurologicas(String tipo_especialidad) {
//        return demuna_FichaDAO.listarEspecialidadesNeurologicas(tipo_especialidad);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesIncor(String tipo_especialidad) {
//        return demuna_FichaDAO.listarEspecialidadesIncor(tipo_especialidad);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNinio(String tipo_especialidad) {
//        return demuna_FichaDAO.listarEspecialidadesNinio(tipo_especialidad);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNeoplasicas(String tipo_especialidad) {
//        return demuna_FichaDAO.listarEspecialidadesNeoplasicas(tipo_especialidad);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesOftalmologicas(String tipo_especialidad) {
//        return demuna_FichaDAO.listarEspecialidadesOftalmologicas(tipo_especialidad);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesNoguchi(String tipo_especialidad) {
//        return salud_FichaDAO.listarEspecialidadesNoguchi(tipo_especialidad);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesMaternidad(String tipo_especialidad) {
//        return salud_FichaDAO.listarEspecialidadesMaternidad(tipo_especialidad);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesRebagliati(String tipo_especialidad) {
//        return salud_FichaDAO.listarEspecialidadesRebagliati(tipo_especialidad);
//    }
//
//    @Override
//    public List<Salud_Ficha_S2_EspecialidadEntity> listarEspecialidadesRehabilitacion(String tipo_especialidad) {
//        return salud_FichaDAO.listarEspecialidadesRehabilitacion(tipo_especialidad);
//    }
//    @Override
//    public List<Demuna_FichaEntity> listarFichasByCodUnico(String cod_unico) {
//        return demuna_FichaDAO.listarFichasByCodUnico(cod_unico);
//    }
//
//    @Override
//    public List<Demuna_FichaEntity> listarFichasByCodUnico2() {
//        return demuna_FichaDAO.listarFichasByCodUnico2();
//    }
    @Override
    public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnico(String cod_unico) {
        return demuna_FichaDAO.buscarFichaByComisionadoCodigoUnico(cod_unico);
    }

    @Override
    public List<Demuna_FichaEntity> listarFichasByComisionado(String usuario_usu) {
        return demuna_FichaDAO.listarFichasByComisionado(usuario_usu);
    }

    @Override
    public Demuna_FichaEntity validarSecX(Integer id_ficha, Integer id_ficha_x, String sec_x, String usu_valida) {
        return demuna_FichaDAO.validarSecX(id_ficha, id_ficha_x, sec_x, usu_valida);
    }

    @Override
    public Demuna_FichaEntity getFichaByCodigoUnico(String cod_unico) {
        return demuna_FichaDAO.getFichaByCodigoUnico(cod_unico);
    }

}
