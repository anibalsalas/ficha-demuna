package com.dp.gestiondemuna.dao.impl;

import com.dp.gestiondemuna.dao.Demuna_FichaDAO;
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
import com.dp.gestiondemuna.repository.Demuna_ArchivoRepository;
import com.dp.gestiondemuna.repository.Demuna_EstablecimientosRepository;
import com.dp.gestiondemuna.repository.Demuna_FichaRepository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S10Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S11Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S2Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S3Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S4Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S5Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S6Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S7Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S8Repository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S9Repository;
import com.dp.gestiondemuna.repository.Xubigeo_Repository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class Demuna_FichaDAOImpl implements Demuna_FichaDAO {
    
    @Autowired
    Demuna_FichaRepository demuna_FichaRepository;
    
    @Autowired
    Demuna_Ficha_S2Repository demuna_Ficha_S2Repository;
    
    @Autowired
    Demuna_Ficha_S3Repository demuna_Ficha_S3Repository;
    
    @Autowired
    Demuna_Ficha_S4Repository demuna_Ficha_S4Repository;
    
    @Autowired
    Demuna_Ficha_S5Repository demuna_Ficha_S5Repository;
    
    @Autowired
    Demuna_Ficha_S6Repository demuna_Ficha_S6Repository;
    
    @Autowired
    Demuna_Ficha_S7Repository demuna_Ficha_S7Repository;
    
    @Autowired
    Demuna_Ficha_S8Repository demuna_Ficha_S8Repository;
    
    @Autowired
    Demuna_Ficha_S9Repository demuna_Ficha_S9Repository;
    
    @Autowired
    Demuna_Ficha_S10Repository demuna_Ficha_S10Repository;
    
    @Autowired
    Demuna_Ficha_S11Repository demuna_Ficha_S11Repository;
    
    @Autowired
    Demuna_ArchivoRepository demuna_ArchivoRepository;
    
    @Autowired
    Demuna_EstablecimientosRepository demuna_stablecimientosRepository;
    
    @Autowired
    Xubigeo_Repository xubigeo_Repository;
    
    public Demuna_FichaDAOImpl() {
    }
    
    @Override
    public List<Demuna_FichaEntity> listarFichas(String usuario_usu, String codi_depe_tde) {
        return demuna_FichaRepository.listarFichas(usuario_usu, codi_depe_tde);
    }
    
    @Override
    public Integer generarIdFicha() {
        return demuna_FichaRepository.generarIdFicha();
    }
    
    @Override
    public void guardarFicha(Demuna_FichaEntity ficha) {
        demuna_FichaRepository.save(ficha);
    }
    
    @Override
    public List<Demuna_FichaEntity> buscarFichaByCodigoUnico(String cod_unico) {
        return demuna_FichaRepository.buscarFichaByCodigoUnico(cod_unico);
    }
    
    @Override
    public Integer generarIdFichaS2() {
        return demuna_Ficha_S2Repository.generarIdFichaS2();
    }
    
    @Override
    public void guardarFichaS2(Demuna_Ficha_S2Entity fichaS2) {
        demuna_Ficha_S2Repository.save(fichaS2);
    }
    
    @Override
    public Integer generarIdFichaS3() {
        return demuna_Ficha_S3Repository.generarIdFichaS3();
    }
    
    @Override
    public void guardarFichaS3(Demuna_Ficha_S3Entity fichaS3) {
        demuna_Ficha_S3Repository.save(fichaS3);
    }
    
    @Override
    public Integer generarIdFichaS4() {
        return demuna_Ficha_S4Repository.generarIdFichaS4();
    }
    
    @Override
    public void guardarFichaS4(Demuna_Ficha_S4Entity fichaS4) {
        demuna_Ficha_S4Repository.save(fichaS4);
    }
    
    @Override
    public Integer generarIdFichaS5() {
        return demuna_Ficha_S5Repository.generarIdFichaS5();
    }
    
    @Override
    public void guardarFichaS5(Demuna_Ficha_S5Entity fichaS5) {
        demuna_Ficha_S5Repository.save(fichaS5);
    }
    
    @Override
    public Integer generarIdFichaS6() {
        return demuna_Ficha_S6Repository.generarIdFichaS6();
    }
    
    @Override
    public void guardarFichaS6(Demuna_Ficha_S6Entity fichaS6) {
        demuna_Ficha_S6Repository.save(fichaS6);
    }
    
    @Override
    public Integer generarIdFichaS7() {
        return demuna_Ficha_S7Repository.generarIdFichaS7();
    }
    
    @Override
    public void guardarFichaS7(Demuna_Ficha_S7Entity fichaS7) {
        demuna_Ficha_S7Repository.save(fichaS7);
    }
    
    @Override
    public Integer generarIdFichaS8() {
        return demuna_Ficha_S8Repository.generarIdFichaS8();
    }
    
    @Override
    public void guardarFichaS8(Demuna_Ficha_S8Entity fichaS8) {
        demuna_Ficha_S8Repository.save(fichaS8);
    }
    
    @Override
    public Integer generarIdFichaS9() {
        return demuna_Ficha_S9Repository.generarIdFichaS9();
    }
    
    @Override
    public void guardarFichaS9(Demuna_Ficha_S9Entity fichaS9) {
        demuna_Ficha_S9Repository.save(fichaS9);
    }
    
    @Override
    public Integer generarIdFichaS10() {
        return demuna_Ficha_S10Repository.generarIdFichaS10();
    }
    
    @Override
    public void guardarFichaS10(Demuna_Ficha_S10Entity fichaS10) {
        demuna_Ficha_S10Repository.save(fichaS10);
    }
    
    @Override
    public Integer generarIdFichaS11() {
        return demuna_Ficha_S11Repository.generarIdFichaS11();
    }
    
    @Override
    public void guardarFichaS11(Demuna_Ficha_S11Entity fichaS11) {
        demuna_Ficha_S11Repository.save(fichaS11);
    }
    
    @Override
    public List<Demuna_FichaEntity> listarSeguimientoFichas(String codi_depa_dpt, String estado) {
        return demuna_FichaRepository.listarSeguimientoFichas(codi_depa_dpt, estado);
    }
    
    @Override
    public Demuna_FichaEntity getFichaByIdFicha(Integer id_ficha) {
        return demuna_FichaRepository.getFichaByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S2Entity getFichaS2ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S2Repository.getFichaS2ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S3Entity getFichaS3ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S3Repository.getFichaS3ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S4Entity getFichaS4ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S4Repository.getFichaS4ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S5Entity getFichaS5ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S5Repository.getFichaS5ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S6Entity getFichaS6ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S6Repository.getFichaS6ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S7Entity getFichaS7ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S7Repository.getFichaS7ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S8Entity getFichaS8ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S8Repository.getFichaS8ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S9Entity getFichaS9ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S9Repository.getFichaS9ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S10Entity getFichaS10ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S10Repository.getFichaS10ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_Ficha_S11Entity getFichaS11ByIdFicha(Integer id_ficha) {
        return demuna_Ficha_S11Repository.getFichaS11ByIdFicha(id_ficha);
    }
    
    @Override
    public Demuna_EstablecimientosEntity buscarByCodEESS(String cod_unico) {
        return demuna_stablecimientosRepository.buscarByCodEESS(cod_unico.trim());
    }
    
    @Override
    public List<XubigeoEntity> findAllDepartamento() {
        return xubigeo_Repository.findAllDepartamento();
    }
    
    @Override
    public List<XubigeoEntity> findAllProvincia(String coddpto) {
        return xubigeo_Repository.findAllProvincia(coddpto);
    }
    
    @Override
    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamento(String coddptox, String codprovx) {
        return xubigeo_Repository.findMunicipalidadesByDepartamento(coddptox, codprovx);
    }
    
    @Override
    public List<Demuna_EstablecimientosEntity> findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(String coddptox, String codprovx, String coddistx) {
        return xubigeo_Repository.findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(coddptox, codprovx, coddistx);
    }

//    @Override
//    public List<Demuna_EstablecimientosEntity> findUniqueDistrito(String coddptox, String codprovx, String coddistx) {
//        return xubigeo_Repository.findUniqueDistrito(coddptox, codprovx, coddistx);
//    }
    @Override
    public List<XubigeoEntity> findAllDistrito(String coddpto, String codprov) {
        return xubigeo_Repository.findAllDistrito(coddpto, codprov);
    }
    
    @Override
    public XubigeoEntity findDptoByNomb(String departamento) {
        return xubigeo_Repository.findDptoByNomb(departamento);
    }
    
    @Override
    public XubigeoEntity findProvByNomb(String coddpto, String provincia) {
        return xubigeo_Repository.findProvByNomb(coddpto, provincia);
    }
    
    @Override
    public XubigeoEntity findDistByNomb(String coddpto, String codprov, String distrito) {
        return xubigeo_Repository.findDistByNomb(coddpto, codprov, distrito);
    }
    
    @Override
    public List<String> listarRegiones() {
        return demuna_FichaRepository.listarRegiones();
    }

//    @Override
//    public List<ParametroDTO> listarDependenciaEESS() {
//        return listaDependenciaEESS;
//    }
//
//    @Override
//    public List<ParametroDTO> listarCategoriaEESS() {
//        return listaCategoriaEESS;
//    }
    @Override
    public List<Demuna_EstablecimientosEntity> listarEM() {
        return demuna_stablecimientosRepository.listarEM();
    }
    
    @Override
    public List<GepCuadroComparativoDTO> listarCuadroRegistro() {
        
        List<GepCuadroComparativoDTO> listaCuadro = new ArrayList<>();
        GepCuadroComparativoDTO cuadro = null;
        List<Object[]> resultado = demuna_FichaRepository.listarCuadroRegistro2();
        Double porcent = 0.0;
        System.out.println("id_ficha" + resultado);
        for (Object[] obj : resultado) {
            cuadro = new GepCuadroComparativoDTO();
            
            cuadro.setRegion(obj[0].toString());
            cuadro.setComi_comp(Integer.valueOf(obj[1].toString()));
            cuadro.setComi_incom(Integer.valueOf(obj[2].toString()));
            cuadro.setDir_comp(Integer.valueOf(obj[3].toString()));
            cuadro.setDir_incom(Integer.valueOf(obj[4].toString()));
            cuadro.setTot_comi_dir(Integer.valueOf(obj[5].toString()));
            cuadro.setTot_cole(Integer.valueOf(obj[6].toString()));

//            porcent = (double) cuadro.getTot_comi_dir() / cuadro.getTot_cole();//porcentaje sobre el total de registro (completas e incompletas)
            porcent = (double) cuadro.getDir_comp() / cuadro.getTot_cole();//porcentaje sobre el total de registros completas

            cuadro.setProcent_total(porcent);
            
            listaCuadro.add(cuadro);
        }
        
        return listaCuadro;
        
    }
//

    @Override
    public GepCuadroComparativoDTO listarTotalCuadroRegistro() {
        
        GepCuadroComparativoDTO totalCuadro = new GepCuadroComparativoDTO();
        Object[] obj = demuna_FichaRepository.obtenerTotalCuadroRegistro();
        Double porcent = 0.0;
        System.out.println("op");
        if (obj != null) {
            try {
                
                totalCuadro.setComi_comp(Integer.valueOf(String.valueOf(obj[0].toString())));
                
                totalCuadro.setComi_incom(Integer.valueOf(obj[1].toString()));
                
                totalCuadro.setDir_comp(Integer.valueOf(obj[2].toString()));
                
                totalCuadro.setDir_incom(Integer.valueOf(obj[3].toString()));
                
                totalCuadro.setTot_comi_dir(Integer.valueOf(obj[4].toString()));
                
                totalCuadro.setTot_cole(Integer.valueOf(obj[5].toString()));
                
                porcent = (double) totalCuadro.getTot_comi_dir() / totalCuadro.getTot_cole();
                
                totalCuadro.setProcent_total(porcent);
                
            } catch (Exception e) {
                e.printStackTrace();
            }
            
        }
        
        return totalCuadro;
    }
    
    @Override
    public List<GepCuadroComparativoDTO> listarCuadroRegistro2() {
        
        List<GepCuadroComparativoDTO> listaCuadro = new ArrayList<>();
        GepCuadroComparativoDTO cuadro = null;
        List<Object[]> resultado = demuna_FichaRepository.listarCuadroRegistro3();
        Double porcent = 0.0;
        
        for (Object[] obj : resultado) {
            cuadro = new GepCuadroComparativoDTO();
            
            cuadro.setRegion(obj[0].toString());
            cuadro.setCant_comi(Integer.valueOf(obj[1].toString()));
            cuadro.setComi_comp(Integer.valueOf(obj[2].toString()));
            cuadro.setComi_incom(Integer.valueOf(obj[3].toString()));
            cuadro.setTotal_comi(Integer.valueOf(obj[4].toString()));
            cuadro.setDir_comp(Integer.valueOf(obj[5].toString()));
            cuadro.setDir_incom(Integer.valueOf(obj[6].toString()));
            cuadro.setTotal_dir(Integer.valueOf(obj[7].toString()));
            cuadro.setTotal_general(Integer.valueOf(obj[8].toString()));
            cuadro.setTot_cole(Integer.valueOf(obj[9].toString()));

//            porcent = (double) cuadro.getTot_comi_dir() / cuadro.getTot_cole();//porcentaje sobre el total de registro (completas e incompletas)
            porcent = (double) cuadro.getTotal_general() / cuadro.getTot_cole();//porcentaje sobre el total de registros completas

            cuadro.setProcent_total(porcent);
            
            listaCuadro.add(cuadro);
        }
        
        return listaCuadro;
    }
//    @Override
//    public String buscarTipoFichaEstablecimiento(String cod_unico) {
//        return demuna_stablecimientosRepository.buscarTipoFichaEstablecimiento(cod_unico);
//    }

    /* Seccion S2 P5 */
//    @Override
//    public Integer generarIdFichaS2P5() {
//        return demuna_ficha_s2_p5Repository.generarIdFichaS2P5();
//    }
//    @Override
//    public Demuna_Ficha_S2_P5Entity getFichaS2P5ByIdFicha(Integer id_ficha, Integer id_ficha_s2_esp) {
//        return demuna_ficha_s2_p5Repository.getFichaS2P5ByIdFicha(id_ficha, id_ficha_s2_esp);
//    }
//
//    @Override
//    public void guardarFichaS2P5(Demuna_Ficha_S2_P5Entity fichaS2P5) {
//        demuna_ficha_s2_p5Repository.save(fichaS2P5);
//    }
//    @Override
//    public void borrarFichaS2P5(Integer id_ficha) {
//        demuna_ficha_s2_p5Repository.borrarFichaS2P5(id_ficha);
//    }
//    @Override
//    public List<Demuna_Ficha_S2_P5Entity> listarFichaEspecialidades(Integer id_ficha, String tipo) {
//        List<Demuna_Ficha_S2_P5Entity> retorno = new ArrayList<>();
//        List<Object[]> listaObjeto = null;
//        Demuna_Ficha_S2_P5Entity s2_p5 = null;
//        listaObjeto = demuna_ficha_s2_p5Repository.listarFichaEspecialidades(id_ficha, tipo);
//
//        for (Object[] objeto : listaObjeto) {
//            s2_p5 = new Demuna_Ficha_S2_P5Entity();
//            BigDecimal obj0 = (BigDecimal) objeto[0];
//            BigDecimal obj1 = (BigDecimal) objeto[1];
//            BigDecimal obj2 = (BigDecimal) objeto[2];
//
//            s2_p5.setId_ficha_s2_p5(obj0.toBigInteger().intValueExact());
//            s2_p5.setId_ficha(obj1.toBigInteger().intValueExact());
//            s2_p5.setId_ficha_s2_esp(obj2.toBigInteger().intValueExact());
//            if (objeto[3] != null) {
//                s2_p5.setP2_5_aplica(objeto[3].toString());
//            }
//            if (objeto[4] != null) {
//                BigDecimal obj4 = (BigDecimal) objeto[4];
//                s2_p5.setP2_5_total(obj4.toBigInteger().intValueExact());
//
//            }
//            if (objeto[5] != null) {
//                BigDecimal obj5 = (BigDecimal) objeto[5];
//                s2_p5.setP2_5_m(obj5.toBigInteger().intValueExact());
//            }
//            if (objeto[6] != null) {
//                BigDecimal obj6 = (BigDecimal) objeto[6];
//                s2_p5.setP2_5_f(obj6.toBigInteger().intValueExact());
//            }
//            if (objeto[7] != null) {
//                BigDecimal obj7 = (BigDecimal) objeto[7];
//                s2_p5.setP2_5_nombrado(obj7.toBigInteger().intValueExact());
//            }
//            if (objeto[8] != null) {
//                BigDecimal obj8 = (BigDecimal) objeto[8];
//                s2_p5.setP2_5_destacado(obj8.toBigInteger().intValueExact());
//            }
//            if (objeto[9] != null) {
//                BigDecimal obj9 = (BigDecimal) objeto[9];
//                s2_p5.setP2_5_cas_temp(obj9.toBigInteger().intValueExact());
//            }
//            if (objeto[10] != null) {
//                BigDecimal obj10 = (BigDecimal) objeto[10];
//                s2_p5.setP2_5_cas_inde(obj10.toBigInteger().intValueExact());
//            }
//            if (objeto[11] != null) {
//                BigDecimal obj11 = (BigDecimal) objeto[11];
//                s2_p5.setP2_5_residente(obj11.toBigInteger().intValueExact());
//            }
//            if (objeto[12] != null) {
//                BigDecimal obj12 = (BigDecimal) objeto[12];
//                s2_p5.setP2_5_interno(obj12.toBigInteger().intValueExact());
//            }
//            if (objeto[13] != null) {
//                BigDecimal obj13 = (BigDecimal) objeto[13];
//                s2_p5.setP2_5_serums(obj13.toBigInteger().intValueExact());
//            }
//            if (objeto[14] != null) {
//                BigDecimal obj14 = (BigDecimal) objeto[14];
//                s2_p5.setP2_5_locacion(obj14.toBigInteger().intValueExact());
//            }
//            if (objeto[15] != null) {
//                BigDecimal obj15 = (BigDecimal) objeto[15];
//                s2_p5.setP2_5_licencia(obj15.toBigInteger().intValueExact());
//            }
//            if (objeto[16] != null) {
//                BigDecimal obj16 = (BigDecimal) objeto[16];
//                s2_p5.setP2_5_destacado_otro(obj16.toBigInteger().intValueExact());
//            }
//            if (objeto[17] != null) {
//                BigDecimal obj17 = (BigDecimal) objeto[17];
//                s2_p5.setP2_5_necesita(obj17.toBigInteger().intValueExact());
//            }
//            if (objeto[18] != null) {
//                BigDecimal obj18 = (BigDecimal) objeto[18];
//                s2_p5.setP2_5_cexterna(obj18.toBigInteger().intValueExact());
//            }
//            if (objeto[19] != null) {
//                BigDecimal obj19 = (BigDecimal) objeto[19];
//                s2_p5.setP2_5_hospitalizacion(obj19.toBigInteger().intValueExact());
//            }
//            if (objeto[20] != null) {
//                BigDecimal obj20 = (BigDecimal) objeto[20];
//                s2_p5.setP2_5_cirugia(obj20.toBigInteger().intValueExact());
//            }
//            if (objeto[21] != null) {
//                BigDecimal obj21 = (BigDecimal) objeto[21];
//                s2_p5.setP2_5_emergencia(obj21.toBigInteger().intValueExact());
//            }
//            if (objeto[22] != null) {
//                BigDecimal obj22 = (BigDecimal) objeto[22];
//                s2_p5.setP2_5_investigacion(obj22.toBigInteger().intValueExact());
//            }
//            if (objeto[23] != null) {
//                BigDecimal obj23 = (BigDecimal) objeto[23];
//                s2_p5.setP2_5_docencia(obj23.toBigInteger().intValueExact());
//            }
//            if (objeto[24] != null) {
//                BigDecimal obj24 = (BigDecimal) objeto[24];
//                s2_p5.setP2_5_teletrabajo(obj24.toBigInteger().intValueExact());
//            }
//            if (objeto[25] != null) {
//
//                s2_p5.setP2_5_nombre_otro((String) objeto[25]);
//            } else {
//                s2_p5.setP2_5_nombre_otro("");
//            }
//
//            if (objeto[6] != null) {
//                BigDecimal obj6 = (BigDecimal) objeto[6];
//                s2_p5.setP2_5_f(obj6.toBigInteger().intValueExact());
//            }
//
//            if (s2_p5.getId_ficha_s2_esp() == 125 || s2_p5.getId_ficha_s2_esp() == 126
//                    || s2_p5.getId_ficha_s2_esp() == 127 || s2_p5.getId_ficha_s2_esp() == 128) {
//
//                s2_p5.setNombre_especialidad("Otro - " + s2_p5.getP2_5_nombre_otro());
//            } else {
//                s2_p5.setNombre_especialidad((String) objeto[26]);
//
//            }
//
//            s2_p5.setTipo_especialidad(objeto[27].toString());
//
//            s2_p5.setUsu_registro((String) objeto[28]);
//
//            retorno.add(s2_p5);
//        }
//        return retorno;
//    }

    /* Fin Seccion S2 P5*/
 /* Especialidades Seccion 2*/
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesNeurologicas(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesNeurologicas(tipo_especialidad);
//    }
//
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesIncor(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesIncor(tipo_especialidad);
//    }
//
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesNinio(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesNinio(tipo_especialidad);
//    }
//
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesNeoplasicas(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesNeoplasicas(tipo_especialidad);
//    }
//
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesOftalmologicas(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesOftalmologicas(tipo_especialidad);
//    }
//
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesNoguchi(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesNoguchi(tipo_especialidad);
//    }
//
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesMaternidad(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesMaternidad(tipo_especialidad);
//    }
//
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesRebagliati(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesRebagliati(tipo_especialidad);
//    }
//
//    @Override
//    public List<Demuna_Ficha_S2_EspecialidadEntity> listarEspecialidadesRehabilitacion(String tipo_especialidad) {
//        return demuna_ficha_s2_especialidadRepository.listarEspecialidadesRehabilitacion(tipo_especialidad);
//    }
    @Override
    public List<Demuna_FichaEntity> listarFichasByCodUnico(String cod_unico) {
        return demuna_FichaRepository.listarFichasByCodUnico(cod_unico);
    }
    
    @Override
    public List<Demuna_FichaEntity> listarFichasByCodUnico2() {
        return demuna_FichaRepository.listarFichasByCodUnico2();
    }
    
    @Override
    public Demuna_FichaEntity buscarFichaByComisionadoCodigoUnico(String cod_unico) {
        return demuna_FichaRepository.buscarFichaByComisionadoCodigoUnico(cod_unico);
    }

    /////////ARCHIVOS/////////////////////
    @Override
    public Integer generarIdArchivo() {
        return demuna_ArchivoRepository.generarIdArchivo();
    }
    
    @Override
    public void guardarArchivo(Demuna_ArchivoEntity archivo) {
        demuna_ArchivoRepository.save(archivo);
    }
    
    @Override
    public List<Demuna_ArchivoEntity> listarArchivos(Integer id_ficha, String nom_campo, String id_seccion, String cod_unico) {
        return demuna_ArchivoRepository.listarArchivos(id_ficha, nom_campo, id_seccion,   cod_unico);
    }
    
    @Override
    public Demuna_ArchivoEntity getArchivoById(Integer id_archivo, Integer id_ficha, String cod_unico) {
        return demuna_ArchivoRepository.getArchivoById(id_archivo, id_ficha, cod_unico);
    }
    
    @Override
    public void eliminarArchivoById(Demuna_ArchivoPk id) {
        demuna_ArchivoRepository.deleteById(id);
    }
    
    @Override
    public List<Demuna_FichaEntity> listarFichasByComisionado(String usuario_usu) {
        return demuna_FichaRepository.listarFichasByComisionado(usuario_usu.trim());
    }
    
    @Override
    public Demuna_FichaEntity validarSecX(Integer id_ficha, Integer id_ficha_x, String sec_x, String usu_valida) {
        
        Demuna_FichaEntity ficha = new Demuna_FichaEntity();
        Demuna_Ficha_S2Entity demuna_ficha_s2 = null;
        Demuna_Ficha_S3Entity demuna_ficha_s3 = null;
        Demuna_Ficha_S4Entity demuna_ficha_s4 = null;
        Demuna_Ficha_S5Entity demuna_ficha_s5 = null;
        Demuna_Ficha_S6Entity demuna_ficha_s6 = null;
        Demuna_Ficha_S7Entity demuna_ficha_s7 = null;
        Demuna_Ficha_S8Entity demuna_ficha_s8 = null;
        Demuna_Ficha_S9Entity demuna_ficha_s9 = null;
        Demuna_Ficha_S10Entity demuna_ficha_s10 = null;
        Demuna_Ficha_S11Entity demuna_ficha_s11 = null;
        
        try {
            switch (sec_x) {
                case "sec_1":
                    demuna_FichaRepository.validarSec1(id_ficha, usu_valida);
                    ficha.setEstado_s1("1");
                    break;
                case "sec_2":
                    demuna_Ficha_S2Repository.validarSec2(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s2 = new Demuna_Ficha_S2Entity();
                    demuna_ficha_s2.setEstado_s2("1");
                    break;
                case "sec_3":
                    demuna_Ficha_S3Repository.validarSec3(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s3 = new Demuna_Ficha_S3Entity();
                    demuna_ficha_s3.setEstado_s3("1");
                    break;
                case "sec_4":
                    demuna_Ficha_S4Repository.validarSec4(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s4 = new Demuna_Ficha_S4Entity();
                    demuna_ficha_s4.setEstado_s4("1");
                    break;
                case "sec_5":
                    demuna_Ficha_S5Repository.validarSec5(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s5 = new Demuna_Ficha_S5Entity();
                    demuna_ficha_s5.setEstado_s5("1");
                    break;
                case "sec_6":
                    demuna_Ficha_S6Repository.validarSec6(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s6 = new Demuna_Ficha_S6Entity();
                    demuna_ficha_s6.setEstado_s6("1");
                    break;
                case "sec_7":
                    demuna_Ficha_S7Repository.validarSec7(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s7 = new Demuna_Ficha_S7Entity();
                    demuna_ficha_s7.setEstado_s7("1");
                    break;
                case "sec_8":
                    demuna_Ficha_S8Repository.validarSec8(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s8 = new Demuna_Ficha_S8Entity();
                    demuna_ficha_s8.setEstado_s8("1");
                    break;
                case "sec_9":
                    demuna_Ficha_S9Repository.validarSec9(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s9 = new Demuna_Ficha_S9Entity();
                    demuna_ficha_s9.setEstado_s9("1");
                    break;
                case "sec_10":
                    demuna_Ficha_S10Repository.validarSec10(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s10 = new Demuna_Ficha_S10Entity();
                    demuna_ficha_s10.setEstado_s10("1");
                    break;
                case "sec_11":
                    demuna_Ficha_S11Repository.validarSec11(id_ficha, id_ficha_x, usu_valida);
                    
                    demuna_ficha_s11 = new Demuna_Ficha_S11Entity();
                    demuna_ficha_s11.setEstado_s11("1");
                    break;
            }
            
            ficha.setDemuna_ficha_s2(demuna_ficha_s2);
            ficha.setDemuna_ficha_s3(demuna_ficha_s3);
            ficha.setDemuna_ficha_s4(demuna_ficha_s4);
            ficha.setDemuna_ficha_s5(demuna_ficha_s5);
            ficha.setDemuna_ficha_s6(demuna_ficha_s6);
            ficha.setDemuna_ficha_s7(demuna_ficha_s7);
            ficha.setDemuna_ficha_s8(demuna_ficha_s8);
            ficha.setDemuna_ficha_s9(demuna_ficha_s9);
            ficha.setDemuna_ficha_s10(demuna_ficha_s10);
            ficha.setDemuna_ficha_s11(demuna_ficha_s11);
            
            Integer sumOfStates = demuna_FichaRepository.findSumOfStatesByFichaId(id_ficha);
            String estado = "";
           
            if (sumOfStates != null) {
               // Demuna_FichaEntity ficha = demuna_FichaRepository.getFichaByIdFicha(id_ficha);
             
                if (sumOfStates < 11 ) {
                    estado = "1";
                    
                } else if (sumOfStates == 11 ) {
                    estado = "2";
                }
         
                demuna_FichaRepository.validarFicha(estado, usu_valida, id_ficha);
                
                ficha.setEstado(estado);
            }
            
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return ficha;
    }
    
    @Override
    public Demuna_FichaEntity getFichaByCodigoUnico(String cod_unico) {
        return demuna_FichaRepository.getFichaByCodigoUnico(cod_unico.trim());
    }
    
}
