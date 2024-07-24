package com.dp.gestiondemuna.controller;

import com.dp.gestiondemuna.dto.GepCuadroComparativoDTO;
import com.dp.gestiondemuna.dto.ParametroDTO;
import com.dp.gestiondemuna.entity.Demuna_ArchivoEntity;
import com.dp.gestiondemuna.entity.Demuna_ArchivoPk;
import com.dp.gestiondemuna.entity.Demuna_EstablecimientosEntity;
import com.dp.gestiondemuna.entity.Demuna_FichaEntity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S10Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S11Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S2Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S3Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S4Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S4_P4Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S4_P4PKEntity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S5Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S6Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S7Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S8Entity;
import com.dp.gestiondemuna.entity.Demuna_Ficha_S9Entity;
import com.dp.gestiondemuna.entity.Matm_personaEntity;
import com.dp.gestiondemuna.entity.XubigeoEntity;
import com.dp.gestiondemuna.entity.XubigeoEntityPk;
import com.dp.gestiondemuna.repository.Demuna_FichaRepository;
import com.dp.gestiondemuna.repository.Demuna_Ficha_S4_P4Repository;
import com.dp.gestiondemuna.service.Demuna_FichaService;
import com.dp.gestiondemuna.service.VariableSistemaLocalService;
import com.dp.gestiondemuna.repository.Matm_persona_Repository;
import com.dp.gestiondemuna.service.VariableSistemaService;
import com.dp.gestiondemuna.util.Constantes;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import java.util.Locale;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Level;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.service.spi.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author asalas
 */
@Controller
public class FichasController {

    private static final Logger logger = LogManager.getLogger(FichasController.class);

    @Autowired
    VariableSistemaLocalService variableSistemaLocalService;

    @Autowired
    VariableSistemaService variableSistemaService;

    @Autowired
    Demuna_FichaService demuna_FichaService;
    //Christian 
    @Autowired
    Demuna_Ficha_S4_P4Repository demuna_ficha_s4_p4repository;
    //Fin Christian

    @Autowired
    Demuna_FichaRepository demuna_ficharepository;
//    @Autowired
//    UsuarioService usuarioService;
    @Autowired
    private Matm_persona_Repository matm_persona_repository;

    private static final List<ParametroDTO> listaPreguntas = new ArrayList<>();

    public FichasController() {

        listaPreguntas.add(new ParametroDTO("P2_4", "2.4. ¿La Demuna tiene plan de trabajo del presente año? (Acreditar con documento)"));
        listaPreguntas.add(new ParametroDTO("P3_2", "3.2. Señale el número de ambientes internos de la Demuna (Acreditar con foto)"));
        listaPreguntas.add(new ParametroDTO("P3_3", "3.3. ¿La Demuna está ubicada en un espacio de fácil acceso (visible, que facilite su ubicación) de la sede municipal? (Acreditar con foto)"));
        listaPreguntas.add(new ParametroDTO("P3_4", "3.4. ¿Cuenta con señaléticas en lenguas originarias o indígenas para la atención de ciudadanos/as de comunidades y/o localidades indígenas? (Acreditar con foto)"));
        listaPreguntas.add(new ParametroDTO("P6_3_1_2", "6.3.1.2. Si cuenta con registro de casos de riesgo de desprotección familiar, ¿se ha incorporado las variables de pertenencia étnica y lengua materna? Incluir (Acreditar con documento)"));
        listaPreguntas.add(new ParametroDTO("P6_3_1_3", "6.3.1.3. Si cuenta con registro de casos de riesgo de desprotección familiar, ¿se ha incorporado la variable migrante o nacionalidad? (Acreditar con documento)"));
        listaPreguntas.add(new ParametroDTO("P10_2", "10.2. ¿El CCONNA fue creado formalmente mediante ordenanza o resolución de alcaldía? (Acreditar con norma respectiva)"));
        listaPreguntas.add(new ParametroDTO("P11_6", "11.6. ¿La Demuna cuenta con un directorio de instituciones aliadas para facilitar la coordinación en situaciones de emergencia o desastres? (Acreditar con documento)"));

    }

    @RequestMapping("/demuna/usuario/ficha/listarFichas")
    public String listarFichas(Model model, HttpSession httpSession) {

        List<Demuna_FichaEntity> listaFichasDemuna = null;
        String usuario_usu = "";

        try {

            usuario_usu = variableSistemaService.userID().trim().toUpperCase();
            listaFichasDemuna = demuna_FichaService.listarFichasByComisionado(usuario_usu);

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaFichasDemuna", listaFichasDemuna);

        return "gestiondemuna/usuario/ListaFicha";
    }

    @RequestMapping("/demuna/usuario/ficha/insertarFichas")
    public String insertarFichas(Model model, @RequestParam(name = "cod_unico", required = false) String cod_unico, Demuna_FichaEntity ficha, HttpSession httpSession) {
        String usuario_usu = (String) httpSession.getAttribute("rol_usuario");
        String codi_depe_tde = "";
        // String c_tipo_entidad = "";
System.out.println("ID de ficha recibido: " + ficha.getId_ficha());

        List<XubigeoEntity> listaDepartamento = new ArrayList<>();
        List<XubigeoEntity> listaProvincia = new ArrayList<>();
        List<Demuna_EstablecimientosEntity> listarEM = null;
        System.out.println("Valor de cod_unico recibido en insertarFichas: " + cod_unico);

        /**
         * Inicio Oswaldo
         */
        String tipo_usuario = (String) httpSession.getAttribute("session_tipo_usuario");
        Demuna_EstablecimientosEntity establecimiento = demuna_FichaService.buscarByCodEESS(cod_unico.trim());

        if (tipo_usuario.equals("A")) {//usuario dp
            usuario_usu = variableSistemaService.userID().trim().toUpperCase();
            codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu);
            ficha.setTxt_desc_depe_tde(variableSistemaLocalService.getDependencia(codi_depe_tde).getDesc_depe_tde());
            ficha.setTxt_comisionado(variableSistemaLocalService.getUsuario(usuario_usu).getNomb_cort_usu());
            ficha.setFch_supervision(variableSistemaLocalService.getFecha_hora_sistema());

            ficha.setDepartamento_demuna(establecimiento.getDes_departament() != null ? establecimiento.getDes_departament().trim() : null);
            ficha.setProvincia_demuna(establecimiento.getDes_provincia() != null ? establecimiento.getDes_provincia().trim() : null);
            ficha.setDistrito_demuna(establecimiento.getDes_distrito() != null ? establecimiento.getDes_distrito().trim() : null);
            ficha.setNom_entidad(establecimiento.getNom_entidad() != null ? establecimiento.getNom_entidad().trim() : null);

            ficha.setCodi_depa_dpt(establecimiento.getCoddptox() != null ? establecimiento.getCoddptox().trim() : null);
            ficha.setCodi_prov_tpr(establecimiento.getCodprovx() != null ? establecimiento.getCodprovx().trim() : null);
            ficha.setCodi_dist_tdi(establecimiento.getCoddistx() != null ? establecimiento.getCoddistx().trim() : null);

            listarEM = demuna_FichaService.listarEM();
        }

        // Buscar el establecimiento por el código único
        // Demuna_EstablecimientosEntity establecimiento = demuna_FichaService.buscarByCodEESS(cod_unico.trim());
        // Verificar si se encontró el establecimiento
        if (establecimiento != null && establecimiento.getId_sestablecmnt() != null) {
            System.out.println("El establecimiento se encontró y su id_sestablecmnt es válido.");
            // Obtener los valores necesarios del establecimiento y asignarlos a las variables

            ficha.setCod_unico(establecimiento.getCod_unico() != null ? establecimiento.getCod_unico().trim() : null);

            ficha.setTitular_entidad(establecimiento.getNom_autoridad() != null ? establecimiento.getNom_autoridad().trim() : null);
            ficha.setNom_entidad(establecimiento.getNom_entidad() != null ? establecimiento.getNom_entidad().trim() : null);
            ficha.setC_tipo_entidad(establecimiento.getC_tipo_entidad() != null ? establecimiento.getC_tipo_entidad().trim() : null);
//            ficha.setNum_celular(establecimiento.getTelefono() != null ? establecimiento.getTelefono().trim() : null);
//            ficha.setCorreo_demuna(establecimiento.getCorreo() != null ? establecimiento.getCorreo().trim() : null);
            ficha.setDepartamento_demuna(establecimiento.getDes_departament() != null ? establecimiento.getDes_departament().trim() : null);
            ficha.setProvincia_demuna(establecimiento.getDes_provincia() != null ? establecimiento.getDes_provincia().trim() : null);
            ficha.setDistrito_demuna(establecimiento.getDes_distrito() != null ? establecimiento.getDes_distrito().trim() : null);
            ficha.setNdocumento(establecimiento.getNresolu() != null ? establecimiento.getNresolu().trim() : null);

            ficha.setDni_alcalde(establecimiento.getDni() != null ? establecimiento.getDni().trim() : null);
            ficha.setTelefono_alcalde(establecimiento.getTelefono() != null ? establecimiento.getTelefono().trim() : null);
            ficha.setCorreo_alcalde(establecimiento.getCorreo() != null ? establecimiento.getCorreo().trim() : null);
            // ficha.setDni_funcionario(establecimiento.getDni() != null ? establecimiento.getDni().trim() : null);

            ficha.setCodi_depa_dpt(establecimiento.getCoddptox() != null ? establecimiento.getCoddptox().trim() : null);
            ficha.setCodi_prov_tpr(establecimiento.getCodprovx() != null ? establecimiento.getCodprovx().trim() : null);
            ficha.setCodi_dist_tdi(establecimiento.getCoddistx() != null ? establecimiento.getCoddistx().trim() : null);

        }
        
       
        ficha.setFlag_validar("0");

        model.addAttribute("listaDepartamento", listaDepartamento);
        model.addAttribute("listaProvincia", listaProvincia);
        model.addAttribute("listarEM", listarEM);
        model.addAttribute("ficha", ficha);

       
        return "gestiondemuna/usuario/FormularioFichasDemuna";
    }

//    @RequestMapping("/demuna/ficha/formulario/ajaxBuscarProvincias")
//    public String ajaxBuscarProvincias(Model model, @RequestParam("codi_depa_dpt") String codi_depa_dpt) {
//
//        List<XubigeoEntity> listaProvincia = new ArrayList<>();
//
//        listaProvincia.add(new XubigeoEntity(new XubigeoEntityPk("", "", ""), "-- SELECCIONAR --"));
//
//        try {
//
//            listaProvincia.addAll(demuna_FichaService.findAllProvincia(codi_depa_dpt));
//
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//        System.out.println("provincia");
//        model.addAttribute("listaProvincia", listaProvincia);
//
//        return "gestiondemuna/usuario/FormularioFichasDemuna :: frac_provincia";
//    }
    @RequestMapping("/demuna/ficha/formulario/ajaxBuscarDistritos")
    public String ajaxBuscarDistritos(Model model, @RequestParam("codi_depa_dpt") String codi_depa_dpt, @RequestParam("codi_prov_tpr") String codi_prov_tpr) {

        List<XubigeoEntity> listaDistrito = new ArrayList<>();

        listaDistrito.add(new XubigeoEntity(new XubigeoEntityPk("", "", ""), "-- SELECCIONAR --"));

        try {

            listaDistrito.addAll(demuna_FichaService.findAllDistrito(codi_depa_dpt, codi_prov_tpr));

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaDistrito", listaDistrito);

        return "gestiondemuna/usuario/FormularioFichasDemuna :: frac_distrito";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxBuscarMunicipalidades")
    public String ajaxBuscarMunicipalidades(Model model, @RequestParam("codi_depa_dpt") String codi_depa_dpt,
            @RequestParam("codi_prov_tpr") String codi_prov_tpr,
            @RequestParam(value = "codi_dist_tdi", required = false) String codi_dist_tdi) {

        System.out.println("Código de departamento recibido: " + codi_depa_dpt);
        System.out.println("Código de provincia recibido: " + codi_prov_tpr);
        System.out.println("Código de distrito recibido: " + codi_dist_tdi);

        List<Demuna_EstablecimientosEntity> listaMunicipalidades = new ArrayList<>();

        listaMunicipalidades.add(new Demuna_EstablecimientosEntity(("--SELECCIONAR--"), "-- SELECCIONAR --"));
//listaMunicipalidades.add(new Demuna_EstablecimientosEntity("nom_entidad", "cod_unico", "nom_autoridad", "telefono", "correo", "nresolu", "coddistx", "-- SELECCIONAR --"));

//    try {
//        listaMunicipalidades.addAll(demuna_FichaService.findMunicipalidadesByDepartamento(codi_depa_dpt, codi_prov_tpr));
//        
//        System.out.println("Resultados de la consulta: " + listaMunicipalidades);
//    } catch (Exception e) {
//        logger.error("Error: " + e.getMessage());
//        e.printStackTrace();
//    }
        try {
            if (codi_dist_tdi == null || codi_dist_tdi.isEmpty()) {
                listaMunicipalidades.addAll(demuna_FichaService.findMunicipalidadesByDepartamento(codi_depa_dpt, codi_prov_tpr));
            } else {
                listaMunicipalidades.addAll(demuna_FichaService.findMunicipalidadesByDepartamentoAndProvinciaAndDistrito(codi_depa_dpt, codi_prov_tpr, codi_dist_tdi));
            }

            System.out.println("Resultados de la consulta: " + listaMunicipalidades);
        } catch (DataAccessException e) {
            logger.error("Error de acceso a datos: " + e.getMessage(), e);
            return "error";
        } catch (ServiceException e) {
            logger.error("Error en el servicio: " + e.getMessage(), e);
            return "error";
        } catch (Exception e) {
            logger.error("Error inesperado: " + e.getMessage(), e);
            return "error";
        }

        model.addAttribute("listaMunicipalidades", listaMunicipalidades);

        return "gestiondemuna/usuario/FormularioFichasDemuna :: frac_municipalidades";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxBuscarCodUnico")
    @ResponseBody
    public Map<String, Object> ajaxBuscarCodUnico(@RequestParam("cod_unico") String cod_unico) {
        Map<String, Object> response = new HashMap<>();
        System.out.println("Valor del cod_unico: " + cod_unico);
        try {
            // Verificar si el código único existe en la base de datos
            int count = demuna_ficharepository.existeCodUnico(cod_unico.trim());

            // Agregar el resultado a la respuesta
            boolean existe = count > 0;
            response.put("existe", existe);
            response.put("mensaje", existe ? "El código único ya existe" : "El código único no existe");
        } catch (Exception e) {
            // Manejar cualquier excepción y agregar un mensaje de error a la respuesta
            response.put("error", true);
            response.put("mensaje", "Ocurrió un error al buscar el código único: " + e.getMessage());
        }

        return response;
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxBuscarEESS")
    @ResponseBody
    public Map ajaxBuscarEESS(Model model,
            @RequestParam("cod_unico") String cod_unico) {

        Map<String, Object> elemento = new HashMap();

        XubigeoEntity departamento = null;
        XubigeoEntity provincia = null;
        XubigeoEntity distrito = null;
        String c_tipo_entidad = "";
        Integer id_sestablecmnt = null;
        String nom_alcalde = "";
        String titular_entidad = "";
        String nom_defensor = "";
        String num_celular = "";

        String departamento_demuna = "";
        String provincia_demuna = "";
        String distrito_demuna = "";
        String correo_demuna = "";
        String nom_entidad = "";
        String ndocumento = "";
        //  String tipo_ficha = "";
        // String tip_depe_eess = "";
        // String tip_eess = ""; //AGREGADO

        try {

            Demuna_EstablecimientosEntity establecimiento = demuna_FichaService.buscarByCodEESS(cod_unico.trim());

            if (establecimiento != null && establecimiento.getCod_unico() != null) {

                nom_alcalde = establecimiento.getNom_autoridad() != null ? establecimiento.getNom_autoridad().trim() : "";
                num_celular = establecimiento.getTelefono() != null ? establecimiento.getTelefono().trim() : "";
                correo_demuna = establecimiento.getCorreo() != null ? establecimiento.getCorreo().trim() : "";
                departamento_demuna = establecimiento.getDes_departament() != null ? establecimiento.getDes_departament().trim() : "";
                provincia_demuna = establecimiento.getDes_provincia() != null ? establecimiento.getDes_provincia().trim() : "";
                distrito_demuna = establecimiento.getDes_distrito() != null ? establecimiento.getDes_distrito().trim() : "";
                nom_entidad = establecimiento.getNom_entidad() != null ? establecimiento.getNom_entidad().trim() : "";
                ndocumento = establecimiento.getNresolu() != null ? establecimiento.getNresolu().trim() : "";
                c_tipo_entidad = establecimiento.getC_tipo_entidad() != null ? establecimiento.getC_tipo_entidad().trim() : "";
                id_sestablecmnt = establecimiento.getId_sestablecmnt();
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        elemento.put("id_sestablecmnt", id_sestablecmnt);
        elemento.put("nom_alcalde", nom_alcalde);
        elemento.put("num_celular", num_celular);
        elemento.put("correo_demuna", correo_demuna);
        elemento.put("departamento_demuna", departamento_demuna);
        elemento.put("provincia_demuna", provincia_demuna);
        elemento.put("distrito_demuna", distrito_demuna);
        elemento.put("nom_entidad", nom_entidad);
        elemento.put("ndocumento", ndocumento);
        elemento.put("c_tipo_entidad", c_tipo_entidad);
        return elemento;
    }

    /////////////////////////////////////////////////////////////////////
    @RequestMapping(value = "/demuna/usuario/ficha/guardarFicha", method = {RequestMethod.POST, RequestMethod.GET})
    public String guardarFicha(Model model, @ModelAttribute("ficha") Demuna_FichaEntity ficha, HttpSession httpSession) {
            System.out.println("ennn");
            
                System.out.println("ID de ficha recibido: " + ficha.getId_ficha());

System.out.println("Datos recibidos: " + ficha);
        List<XubigeoEntity> listaDepartamento = null;
        List<XubigeoEntity> listaProvincia = null;
        List<XubigeoEntity> listaDistrito = null;
        List<Demuna_EstablecimientosEntity> listaMunicipalidades = null;
        List<Demuna_EstablecimientosEntity> listarEM = null;
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();
        String usuario_usu = "";
        String codi_depe_tde = "";

        Date fecha_hora = null;
        String msg_modal = "";
        String txt_btn_guardado_parcial = "";
        boolean flag_duplicado = false;
        
  
    
        try {

            String rol_usuario = (String) httpSession.getAttribute("rol_usuario");
            txt_btn_guardado_parcial = ficha.getTxt_btn_guardado_parcial();

            System.out.println("J:" + ficha.getTxt_btn_guardado_parcial());
            System.out.println("h:" + txt_btn_guardado_parcial);

            if (ficha.getEstado() == null || ficha.getEstado().equals("I")) {

                if (!ficha.isFlag_guardado_parcial()) {

                    ficha.setEstado("C");
                }
            } else {
                ficha.setEstado("C");

            }

            usuario_usu = variableSistemaService.userID().trim().toUpperCase();
            fecha_hora = variableSistemaLocalService.getFecha_hora_sistema();
            if (rol_usuario.equals(Constantes.ROL_COMISIONADO)) {
                codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu.trim());
            }

            if (ficha.getCod_unico() != null) {
                ficha.setCod_unico(ficha.getCod_unico().trim());
            }

            if (ficha.isFlag_guardado_parcial()) {

                switch (ficha.getTxt_btn_guardado_parcial()) {
                    case "btn_guardar_sec_1":

                        if (ficha.getId_ficha() == null) {
                            //  if (ficha.getCod_unico() == null) {

                            List<Demuna_FichaEntity> listaDemunadAux = demuna_FichaService.buscarFichaByCodigoUnico(ficha.getCod_unico().trim());
                            System.out.println("Se encontraron " + listaDemunadAux.size() + " registros para el código único proporcionado.");

                            if (listaDemunadAux.isEmpty()) {
                                ficha.setId_ficha(demuna_FichaService.generarIdFicha());

                                ficha.setUsu_registro(usuario_usu);
                                ficha.setFch_registro(fecha_hora);
                                if (rol_usuario.equals(Constantes.ROL_COMISIONADO)) {
                                    ficha.setCodi_depe_tde(codi_depe_tde);
                                }
                                demuna_FichaService.guardarFicha(ficha);
                                //Crear las otras secciones
                                Demuna_Ficha_S2Entity demuna_ficha_s2 = new Demuna_Ficha_S2Entity();
                                Demuna_Ficha_S3Entity demuna_ficha_s3 = new Demuna_Ficha_S3Entity();
                                Demuna_Ficha_S4Entity demuna_ficha_s4 = new Demuna_Ficha_S4Entity();
                                Demuna_Ficha_S5Entity demuna_ficha_s5 = new Demuna_Ficha_S5Entity();
                                Demuna_Ficha_S6Entity demuna_ficha_s6 = new Demuna_Ficha_S6Entity();
                                Demuna_Ficha_S7Entity demuna_ficha_s7 = new Demuna_Ficha_S7Entity();
                                Demuna_Ficha_S8Entity demuna_ficha_s8 = new Demuna_Ficha_S8Entity();
                                Demuna_Ficha_S9Entity demuna_ficha_s9 = new Demuna_Ficha_S9Entity();
                                Demuna_Ficha_S10Entity demuna_ficha_s10 = new Demuna_Ficha_S10Entity();
                                Demuna_Ficha_S11Entity demuna_ficha_s11 = new Demuna_Ficha_S11Entity();

                                demuna_ficha_s2.setId_ficha_s2(ficha.getId_ficha());
                                demuna_ficha_s2.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s2.setUsu_registro(usuario_usu);
                                demuna_ficha_s2.setFch_registro(fecha_hora);

                                demuna_ficha_s3.setId_ficha_s3(ficha.getId_ficha());
                                demuna_ficha_s3.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s3.setUsu_registro(usuario_usu);
                                demuna_ficha_s3.setFch_registro(fecha_hora);

                                demuna_ficha_s4.setId_ficha_s4(ficha.getId_ficha());
                                demuna_ficha_s4.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s4.setUsu_registro(usuario_usu);
                                demuna_ficha_s4.setFch_registro(fecha_hora);

                                demuna_ficha_s5.setId_ficha_s5(ficha.getId_ficha());
                                demuna_ficha_s5.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s5.setUsu_registro(usuario_usu);
                                demuna_ficha_s5.setFch_registro(fecha_hora);

                                demuna_ficha_s6.setId_ficha_s6(ficha.getId_ficha());
                                demuna_ficha_s6.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s6.setUsu_registro(usuario_usu);
                                demuna_ficha_s6.setFch_registro(fecha_hora);

                                demuna_ficha_s7.setId_ficha_s7(ficha.getId_ficha());
                                demuna_ficha_s7.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s7.setUsu_registro(usuario_usu);
                                demuna_ficha_s7.setFch_registro(fecha_hora);

                                demuna_ficha_s8.setId_ficha_s8(ficha.getId_ficha());
                                demuna_ficha_s8.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s8.setUsu_registro(usuario_usu);
                                demuna_ficha_s8.setFch_registro(fecha_hora);

                                demuna_ficha_s9.setId_ficha_s9(ficha.getId_ficha());
                                demuna_ficha_s9.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s9.setUsu_registro(usuario_usu);
                                demuna_ficha_s9.setFch_registro(fecha_hora);

                                demuna_ficha_s10.setId_ficha_s10(ficha.getId_ficha());
                                demuna_ficha_s10.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s10.setUsu_registro(usuario_usu);
                                demuna_ficha_s10.setFch_registro(fecha_hora);

                                demuna_ficha_s11.setId_ficha_s11(ficha.getId_ficha());
                                demuna_ficha_s11.setId_ficha(ficha.getId_ficha());
                                demuna_ficha_s11.setUsu_registro(usuario_usu);
                                demuna_ficha_s11.setFch_registro(fecha_hora);

                                demuna_FichaService.guardarFichaS2(demuna_ficha_s2);
                                demuna_FichaService.guardarFichaS3(demuna_ficha_s3);
                                demuna_FichaService.guardarFichaS4(demuna_ficha_s4);
                                demuna_FichaService.guardarFichaS5(demuna_ficha_s5);
                                demuna_FichaService.guardarFichaS6(demuna_ficha_s6);
                                demuna_FichaService.guardarFichaS7(demuna_ficha_s7);
                                demuna_FichaService.guardarFichaS8(demuna_ficha_s8);
                                demuna_FichaService.guardarFichaS9(demuna_ficha_s9);
                                demuna_FichaService.guardarFichaS10(demuna_ficha_s10);
                                demuna_FichaService.guardarFichaS11(demuna_ficha_s11);

                            } else {
                                flag_duplicado = true;
                            }

                        } else {
                            ficha.setUsu_actualiza(usuario_usu);
                            ficha.setFch_actualiza(fecha_hora);
                            demuna_FichaService.guardarFicha(ficha);

                        }

                        break;
                    case "btn_guardar_sec_2":

                        if (ficha.getDemuna_ficha_s2().getId_ficha_s2() == null) {
                            System.out.println("entro aqui btn_guardar_sec_2: genera nuevo id_ficha" + ficha.getDemuna_ficha_s2().getId_ficha_s2());
                            ficha.getDemuna_ficha_s2().setId_ficha_s2(demuna_FichaService.generarIdFichaS2());
                            ficha.getDemuna_ficha_s2().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s2().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s2().setFch_registro(fecha_hora);

                        } else {
                            ficha.getDemuna_ficha_s2().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s2().setFch_actualiza(fecha_hora);
                            System.out.println("entro aqui btn_guardar_sec_2: actualiza nuevo id_ficha");
                        }

                        demuna_FichaService.guardarFichaS2(ficha.getDemuna_ficha_s2());

                        break;

                    case "btn_guardar_sec_3":
                        System.out.println("xxx");
                        if (ficha.getDemuna_ficha_s3().getId_ficha_s3() == null) {
                            System.out.println("eee");
                            ficha.getDemuna_ficha_s3().setId_ficha_s3(demuna_FichaService.generarIdFichaS3());
                            ficha.getDemuna_ficha_s3().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s3().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s3().setFch_registro(fecha_hora);
                            System.out.println("entro aqui btn_guardar_sec_3: genera nuevo id_ficha");
                        } else {
                            System.out.println("rrrr");
                            ficha.getDemuna_ficha_s3().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s3().setFch_actualiza(fecha_hora);
                            System.out.println("entro aqui btn_guardar_sec_3: actualiza nuevo id_ficha");
                        }

                        demuna_FichaService.guardarFichaS3(ficha.getDemuna_ficha_s3());

                        break;
                    case "btn_guardar_sec_4":
                        if (ficha.getDemuna_ficha_s4().getId_ficha_s4() == null) {

                            ficha.getDemuna_ficha_s4().setId_ficha_s4(demuna_FichaService.generarIdFichaS4());
                            ficha.getDemuna_ficha_s4().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s4().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s4().setFch_registro(fecha_hora);

                        } else {

                            ficha.getDemuna_ficha_s4().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s4().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS4(ficha.getDemuna_ficha_s4());
                        break;
                    case "btn_guardar_sec_5":
                        if (ficha.getDemuna_ficha_s5().getId_ficha_s5() == null) {

                            ficha.getDemuna_ficha_s5().setId_ficha_s5(demuna_FichaService.generarIdFichaS5());
                            ficha.getDemuna_ficha_s5().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s5().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s5().setFch_registro(fecha_hora);
                        } else {

                            ficha.getDemuna_ficha_s5().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s5().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS5(ficha.getDemuna_ficha_s5());
                        break;
                    case "btn_guardar_sec_6":
                        if (ficha.getDemuna_ficha_s6().getId_ficha_s6() == null) {

                            ficha.getDemuna_ficha_s6().setId_ficha_s6(demuna_FichaService.generarIdFichaS6());
                            ficha.getDemuna_ficha_s6().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s6().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s6().setFch_registro(fecha_hora);
                        } else {

                            ficha.getDemuna_ficha_s6().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s6().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS6(ficha.getDemuna_ficha_s6());
                        break;
                    case "btn_guardar_sec_7":
                        if (ficha.getDemuna_ficha_s7().getId_ficha_s7() == null) {

                            ficha.getDemuna_ficha_s7().setId_ficha_s7(demuna_FichaService.generarIdFichaS7());
                            ficha.getDemuna_ficha_s7().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s7().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s7().setFch_registro(fecha_hora);
                        } else {

                            ficha.getDemuna_ficha_s7().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s7().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS7(ficha.getDemuna_ficha_s7());
                        break;
                    case "btn_guardar_sec_8":
                        if (ficha.getDemuna_ficha_s8().getId_ficha_s8() == null) {

                            ficha.getDemuna_ficha_s8().setId_ficha_s8(demuna_FichaService.generarIdFichaS8());
                            ficha.getDemuna_ficha_s8().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s8().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s8().setFch_registro(fecha_hora);
                        } else {

                            ficha.getDemuna_ficha_s8().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s8().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS8(ficha.getDemuna_ficha_s8());
                        break;
                    case "btn_guardar_sec_9":
                        if (ficha.getDemuna_ficha_s9().getId_ficha_s9() == null) {

                            ficha.getDemuna_ficha_s9().setId_ficha_s9(demuna_FichaService.generarIdFichaS9());
                            ficha.getDemuna_ficha_s9().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s9().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s9().setFch_registro(fecha_hora);
                        } else {

                            ficha.getDemuna_ficha_s9().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s9().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS9(ficha.getDemuna_ficha_s9());
                        break;
                    case "btn_guardar_sec_10":

                        if (ficha.getDemuna_ficha_s10().getId_ficha_s10() == null) {

                            ficha.getDemuna_ficha_s10().setId_ficha_s10(demuna_FichaService.generarIdFichaS10());
                            ficha.getDemuna_ficha_s10().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s10().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s10().setFch_registro(fecha_hora);
                        } else {

                            ficha.getDemuna_ficha_s10().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s10().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS10(ficha.getDemuna_ficha_s10());

                        break;
                    case "btn_guardar_sec_11":
                        if (ficha.getDemuna_ficha_s11().getId_ficha_s11() == null) {

                            ficha.getDemuna_ficha_s11().setId_ficha_s11(demuna_FichaService.generarIdFichaS11());
                            ficha.getDemuna_ficha_s11().setId_ficha(ficha.getId_ficha());
                            ficha.getDemuna_ficha_s11().setUsu_registro(usuario_usu);
                            ficha.getDemuna_ficha_s11().setFch_registro(fecha_hora);
                        } else {

                            ficha.getDemuna_ficha_s11().setUsu_actualiza(usuario_usu);
                            ficha.getDemuna_ficha_s11().setFch_actualiza(fecha_hora);
                        }

                        demuna_FichaService.guardarFichaS11(ficha.getDemuna_ficha_s11());
                        break;

                    default:
                        throw new AssertionError();
                }

            } else {

                demuna_FichaService.guardarFicha(ficha);
                demuna_FichaService.guardarFichaS2(ficha.getDemuna_ficha_s2());
                demuna_FichaService.guardarFichaS3(ficha.getDemuna_ficha_s3());
                demuna_FichaService.guardarFichaS4(ficha.getDemuna_ficha_s4());
                demuna_FichaService.guardarFichaS5(ficha.getDemuna_ficha_s5());
                demuna_FichaService.guardarFichaS6(ficha.getDemuna_ficha_s6());
                demuna_FichaService.guardarFichaS7(ficha.getDemuna_ficha_s7());
                demuna_FichaService.guardarFichaS8(ficha.getDemuna_ficha_s8());
                demuna_FichaService.guardarFichaS9(ficha.getDemuna_ficha_s9());
                demuna_FichaService.guardarFichaS10(ficha.getDemuna_ficha_s10());
                demuna_FichaService.guardarFichaS11(ficha.getDemuna_ficha_s11());

            }

            listaDepartamento = demuna_FichaService.findAllDepartamento();
            listaProvincia = demuna_FichaService.findAllProvincia(ficha.getCodi_depa_dpt());
            listaMunicipalidades = demuna_FichaService.findMunicipalidadesByDepartamento(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
            listaDistrito = demuna_FichaService.findAllDistrito(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
            listarEM = demuna_FichaService.listarEM();

            if (flag_duplicado) {
                msg_modal = "La Demuna seleccionada ya se encuetra registrada. Por favor seleccionar otra entidad";
            } else {

                ficha = demuna_FichaService.getFichaByIdFicha(ficha.getId_ficha());

                ficha.setDemuna_ficha_s2(demuna_FichaService.getFichaS2ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s3(demuna_FichaService.getFichaS3ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s4(demuna_FichaService.getFichaS4ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s5(demuna_FichaService.getFichaS5ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s6(demuna_FichaService.getFichaS6ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s7(demuna_FichaService.getFichaS7ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s8(demuna_FichaService.getFichaS8ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s9(demuna_FichaService.getFichaS9ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s10(demuna_FichaService.getFichaS10ByIdFicha(ficha.getId_ficha()));
                ficha.setDemuna_ficha_s11(demuna_FichaService.getFichaS11ByIdFicha(ficha.getId_ficha()));

                if (ficha.getEstado().equals("I")) {
                    msg_modal = "Sus respuestas han sido registradas correctamente.";
                } else {
                    msg_modal = "Su ficha ha sido registrada correctamente.";
                }
            }

            ficha.setFlag_modal("S");
            ficha.setMsg_modal(msg_modal);
            ficha.setFlag_guardado_parcial(false);
            ficha.setTxt_btn_guardado_parcial(txt_btn_guardado_parcial);

        } catch (Exception e) {
            ficha.setFlag_modal("S");
            ficha.setMsg_modal("Muchas Gracias por su participación");
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        // if (ficha.getTxt_btn_guardado_parcial().equals("btn_guardar_sec_4")) {
        //CHRISTIAN
        // FIN CHRISTIAN                        
        //  }
        if (ficha.getDemuna_ficha_s4() != null) {
            ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_A(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(ficha.getId_ficha(), "A"));
            ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_B(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(ficha.getId_ficha(), "B"));
            ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_C(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(ficha.getId_ficha(), "C"));
            ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_D(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(ficha.getId_ficha(), "D"));
            ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_E(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(ficha.getId_ficha(), "E"));
        }

        //Fin christian
        if (ficha.getDemuna_ficha_s4() != null) {
            model.addAttribute("ficha_s4_p4_a", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_A());
            model.addAttribute("ficha_s4_p4_b", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_B());
            model.addAttribute("ficha_s4_p4_c", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_C());
            model.addAttribute("ficha_s4_p4_d", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_D());
            model.addAttribute("ficha_s4_p4_e", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_E());
        }

        model.addAttribute("ficha", ficha);
//        model.addAttribute("listarDependenciaEESS", listarDependenciaEESS);
//        model.addAttribute("listarCategoriaEESS", listarCategoriaEESS);
        model.addAttribute("listaMunicipalidades", listaMunicipalidades);
        model.addAttribute("listaDepartamento", listaDepartamento);
        model.addAttribute("listaProvincia", listaProvincia);
        model.addAttribute("listaDistrito", listaDistrito);
        model.addAttribute("listarEM", listarEM);

        model.addAttribute("listaS2_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S2_ARCH", "S2",ficha.getCod_unico()));
        model.addAttribute("listaS3_2_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S3_2_ARCH", "S3",ficha.getCod_unico()));
        model.addAttribute("listaS3_3_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S3_3_ARCH", "S3",ficha.getCod_unico()));
        model.addAttribute("listaS3_4_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S3_4_ARCH", "S3",ficha.getCod_unico()));

        model.addAttribute("listaS341_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S341_ARCH", "S3",ficha.getCod_unico()));
        model.addAttribute("listaS471_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S471_ARCH", "S4",ficha.getCod_unico()));

        model.addAttribute("listaS6312_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S6312_ARCH", "S6",ficha.getCod_unico()));

        model.addAttribute("listaS6313_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S6313_ARCH", "S6",ficha.getCod_unico()));

        model.addAttribute("listaS212_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S212_ARCH", "S2",ficha.getCod_unico()));
        model.addAttribute("listaS251_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S251_ARCH", "S2",ficha.getCod_unico()));
        model.addAttribute("listaS1_7_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S1_7_ARCH", "S1",ficha.getCod_unico()));

        model.addAttribute("listaS114_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S114_ARCH", "S11",ficha.getCod_unico()));
        model.addAttribute("listaS962_arch", demuna_FichaService.listarArchivos(ficha.getId_ficha(), "S962_ARCH", "S9",ficha.getCod_unico()));
        return "gestiondemuna/usuario/FormularioFichasDemuna";
    }

////////////////////////////////////////////////////////////////////////
//////////////////////////////EDITAR////////////////////////////////////
    @RequestMapping(value = "/demuna/usuario/ficha/editarFichas", method = {RequestMethod.POST, RequestMethod.GET})
    public String editarFicha(Model model, @RequestParam("id_ficha") Integer id_ficha, HttpSession httpSession) {

        String codi_depe_tde = "";
        System.out.print("id_ficha: " + id_ficha);
//        List<ParametroDTO> listarCategoriaEESS = null;
//        List<ParametroDTO> listarDependenciaEESS = null;
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<XubigeoEntity> listaDepartamento = null;
        List<XubigeoEntity> listaProvincia = null;
        List<XubigeoEntity> listaDistrito = null;
        List<Demuna_EstablecimientosEntity> listarEM = null;
        List<Demuna_EstablecimientosEntity> listaMunicipalidades = null;
        List<Demuna_ArchivoEntity> listaS2_arch = null;

        List<Demuna_ArchivoEntity> listaS1_7_arch = null;

        List<Demuna_ArchivoEntity> listaS3_2_arch = null;
        List<Demuna_ArchivoEntity> listaS3_3_arch = null;
        List<Demuna_ArchivoEntity> listaS3_4_arch = null;
        List<Demuna_ArchivoEntity> listaS341_arch = null;
        List<Demuna_ArchivoEntity> listaS471_arch = null;
        List<Demuna_ArchivoEntity> listaS6312_arch = null;
        List<Demuna_ArchivoEntity> listaS6313_arch = null;

        List<Demuna_ArchivoEntity> listaS212_arch = null;
        List<Demuna_ArchivoEntity> listaS251_arch = null;
        List<Demuna_ArchivoEntity> listaS114_arch = null;
        List<Demuna_ArchivoEntity> listaS962_arch = null;
        Demuna_FichaEntity ficha = null;

        try {
            ficha = demuna_FichaService.getFichaByIdFicha(id_ficha);
            String rol_usuario = (String) httpSession.getAttribute("rol_usuario");
            String usuario_usu = variableSistemaService.userID();

            System.out.println("rol_usuario: " + rol_usuario);
            if (ficha != null) {
                System.out.println("ficha: " + ficha);
                //  String codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(usuario_usu);
                if (rol_usuario.equals(Constantes.ROL_COMISIONADO)) {//Comisionado
                    ficha.setTxt_desc_depe_tde(variableSistemaLocalService.getDependencia(variableSistemaLocalService.dependencia_fisica_personal(usuario_usu)).getDesc_depe_tde());
                    ficha.setTxt_comisionado(variableSistemaLocalService.getUsuario(usuario_usu).getNomb_cort_usu());
                    ficha.setFch_supervision(variableSistemaLocalService.getFecha_hora_sistema());
                }

                System.out.println("ccccc: ");
                // ficha.setFch_supervision(Demuna_FichaEntity.getFch_supervision());
                //    ficha.setFch_supervision(Demuna_FichaEntity.getFch_supervision() != null ? Demuna_FichaEntity.getFch_supervision().trim() : null);
                //ficha = demuna_FichaService.getFichaByIdFicha(ficha.getId_ficha());

                // ficha = demuna_FichaService.getFichaByIdFicha(id_ficha);
                ficha.setDemuna_ficha_s2(demuna_FichaService.getFichaS2ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s3(demuna_FichaService.getFichaS3ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s4(demuna_FichaService.getFichaS4ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s5(demuna_FichaService.getFichaS5ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s6(demuna_FichaService.getFichaS6ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s7(demuna_FichaService.getFichaS7ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s8(demuna_FichaService.getFichaS8ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s9(demuna_FichaService.getFichaS9ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s10(demuna_FichaService.getFichaS10ByIdFicha(id_ficha));
                ficha.setDemuna_ficha_s11(demuna_FichaService.getFichaS11ByIdFicha(id_ficha));

//
                //CHRISTIAN
                ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_A(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "A"));
                ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_B(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "B"));
                ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_C(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "C"));
                ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_D(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "D"));
                ficha.getDemuna_ficha_s4().setListaDemunaFichaS4P4_E(demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "E"));
                // FIN CHRISTIAN

                //  ficha.setTipo_ficha(demuna_FichaService.buscarByCodEESS(ficha.getCod_unico()).getTipo_ficha()); //AGREGADO ccortez 20240409
//            listarDependenciaEESS = salud_FichaService.listarDependenciaEESS();
//            listarCategoriaEESS = salud_FichaService.listarCategoriaEESS();
                listaDepartamento = demuna_FichaService.findAllDepartamento();
                listaProvincia = demuna_FichaService.findAllProvincia(ficha.getCodi_depa_dpt());
                listaMunicipalidades = demuna_FichaService.findMunicipalidadesByDepartamento(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
                listaDistrito = demuna_FichaService.findAllDistrito(ficha.getCodi_depa_dpt(), ficha.getCodi_prov_tpr());
                listarEM = demuna_FichaService.listarEM();

                listaS1_7_arch = demuna_FichaService.listarArchivos(id_ficha, "S1_7_ARCH", "S1",ficha.getCod_unico());
                listaS2_arch = demuna_FichaService.listarArchivos(id_ficha, "S2_ARCH", "S2",ficha.getCod_unico());
                listaS3_2_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_2_ARCH", "S3",ficha.getCod_unico());
                listaS3_3_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_3_ARCH", "S3",ficha.getCod_unico());
                listaS3_4_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_4_ARCH", "S3",ficha.getCod_unico());
                listaS341_arch = demuna_FichaService.listarArchivos(id_ficha, "S341_ARCH", "S3",ficha.getCod_unico());
                listaS471_arch = demuna_FichaService.listarArchivos(id_ficha, "S471_ARCH", "S4",ficha.getCod_unico());
                listaS212_arch = demuna_FichaService.listarArchivos(id_ficha, "S212_ARCH", "S2",ficha.getCod_unico());
                listaS251_arch = demuna_FichaService.listarArchivos(id_ficha, "S251_ARCH", "S2",ficha.getCod_unico());
                listaS6312_arch = demuna_FichaService.listarArchivos(id_ficha, "S6312_ARCH", "S6",ficha.getCod_unico());
                listaS6313_arch = demuna_FichaService.listarArchivos(id_ficha, "S6313_ARCH", "S6",ficha.getCod_unico());
                listaS114_arch = demuna_FichaService.listarArchivos(id_ficha, "S114_ARCH", "S11",ficha.getCod_unico());
                listaS962_arch = demuna_FichaService.listarArchivos(id_ficha, "S962_ARCH", "S9",ficha.getCod_unico());
            }
//            }
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }
        if (ficha != null && ficha.getDemuna_ficha() != null) {

            //Christian
            model.addAttribute("ficha_s4_p4_a", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_A());
            model.addAttribute("ficha_s4_p4_b", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_B());
            model.addAttribute("ficha_s4_p4_c", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_C());
            model.addAttribute("ficha_s4_p4_d", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_D());
            model.addAttribute("ficha_s4_p4_e", ficha.getDemuna_ficha_s4().getListaDemunaFichaS4P4_E());
            //Fin christian
        }
        model.addAttribute("ficha", ficha);
//        model.addAttribute("listarDependenciaEESS", listarDependenciaEESS);
//        model.addAttribute("listarCategoriaEESS", listarCategoriaEESS);
        model.addAttribute("listaMunicipalidades", listaMunicipalidades);
        model.addAttribute("listaDepartamento", listaDepartamento);
        model.addAttribute("listaProvincia", listaProvincia);
        model.addAttribute("listaDistrito", listaDistrito);
        model.addAttribute("listarEM", listarEM);

        if (ficha != null && ficha.getDemuna_ficha() != null) {
            model.addAttribute("txt_desc_depe_tde", ficha.getDemuna_ficha().getTxt_desc_depe_tde());
            model.addAttribute("txt_comisionado", ficha.getDemuna_ficha().getTxt_comisionado());
            model.addAttribute("fch_supervision", ficha.getDemuna_ficha().getFch_supervision());
        }

        //  System.out.println("tamaño: " + listaS1_7_arch.size());
        model.addAttribute("listaS1_7_arch", listaS1_7_arch);

        // System.out.println("tamaño: " + listaS2_arch.size());
        model.addAttribute("listaS2_arch", listaS2_arch);

        //  System.out.println("tamaño: " + listaS3_2_arch.size());
        model.addAttribute("listaS3_2_arch", listaS3_2_arch);

        // System.out.println("tamaño: " + listaS3_3_arch.size());
        model.addAttribute("listaS3_3_arch", listaS3_3_arch);

        // System.out.println("tamaño: " + listaS3_4_arch.size());
        model.addAttribute("listaS3_4_arch", listaS3_4_arch);

        // System.out.println("tamaño: " + listaS341_arch.size());
        model.addAttribute("listaS341_arch", listaS341_arch);

        // System.out.println("tamaño: " + listaS471_arch.size());
        model.addAttribute("listaS471_arch", listaS471_arch);

        // System.out.println("tamaño: " + listaS6312_arch.size());
        model.addAttribute("listaS6312_arch", listaS6312_arch);

        // System.out.println("tamaño: " + listaS6313_arch.size());
        model.addAttribute("listaS6313_arch", listaS6313_arch);

        // System.out.println("tamaño: " + listaS212_arch.size());
        model.addAttribute("listaS212_arch", listaS212_arch);

        //  System.out.println("tamaño: " + listaS251_arch.size());
        model.addAttribute("listaS251_arch", listaS251_arch);

        model.addAttribute("listaS114_arch", listaS114_arch);

        model.addAttribute("listaS962_arch", listaS962_arch);
//        model.addAttribute("listarFichaEspAdministrativas", listarFichaEspAdministrativas);
//        model.addAttribute("listarFichaEspMedicas", listarFichaEspMedicas);
//        model.addAttribute("listarFichaEspOtrasProfesiones", listarFichaEspOtrasProfesiones);
//        model.addAttribute("listarFichaEspOtros", listarFichaEspOtros);

        return "gestiondemuna/usuario/FormularioFichasDemuna";
    }

    // ------------------------------------- CHRISTIAN
    @RequestMapping(value = {"/demuna/usuario/ficha/guardarCuadro"}, method = {RequestMethod.POST, RequestMethod.GET})
    public @ResponseBody
    String pageGuardarCuadro(HttpServletRequest request, Model model,
            @RequestParam("id_ficha") Integer id_ficha,
            @RequestParam("id_ficha_s4") Integer id_ficha_s4,
            @RequestParam("fch_registro") String fch_registro,
            @RequestParam("fch_actualiza") String fch_actualiza,
            @RequestParam("usu_registro") String usu_registro,
            @RequestParam("usu_actualiza") String usu_actualiza,
            @RequestParam("usu_valida") String usu_valida,
            @RequestParam("fch_valida") String fch_valida,
            @RequestParam("profesion") String profesion,
            @RequestParam("seleccion") String seleccion,
            @RequestParam("txt_otros") String txt_otros,
            @RequestParam("selecc_num") Integer selecc_num,
            @RequestParam(value = "anno", required = false, defaultValue = "0") Integer anno,
            @RequestParam(value = "meses", required = false, defaultValue = "0") Integer meses,
            @RequestParam("tc") Integer tc,
            @RequestParam("capa") String capa,
            @RequestParam(value = "p4_14_1_a", required = false, defaultValue = "X") String p4_14_1_a,
            @RequestParam(value = "p4_14_1_b", required = false, defaultValue = "X") String p4_14_1_b,
            @RequestParam(value = "p4_14_1_c", required = false, defaultValue = "X") String p4_14_1_c,
            @RequestParam(value = "p4_14_1_d", required = false, defaultValue = "X") String p4_14_1_d,
            @RequestParam(value = "p4_14_1_e", required = false, defaultValue = "X") String p4_14_1_e,
            @RequestParam(value = "p4_14_1_f", required = false, defaultValue = "X") String p4_14_1_f,
            @RequestParam(value = "p4_14_2_a", required = false, defaultValue = "X") String p4_14_2_a,
            @RequestParam(value = "p4_14_2_b", required = false, defaultValue = "X") String p4_14_2_b,
            @RequestParam(value = "p4_14_2_c", required = false, defaultValue = "X") String p4_14_2_c,
            @RequestParam(value = "p4_14_2_d", required = false, defaultValue = "X") String p4_14_2_d,
            @RequestParam(value = "p4_14_2_e", required = false, defaultValue = "X") String p4_14_2_e,
            @RequestParam("p4_14_2_e_otro") String p4_14_2_e_otro,
            @RequestParam("equipo") String equipo) {

        SimpleDateFormat formatterDate = new SimpleDateFormat("dd-MMM-yyyy", Locale.ENGLISH);
        SimpleDateFormat formatterTms = new SimpleDateFormat("dd-MMM-yyyy hh:mm:ss", Locale.ENGLISH);
        Demuna_Ficha_S4_P4Entity demuna_ficha_s4_p4Item = new Demuna_Ficha_S4_P4Entity();
        Integer s4_p4_selecc_num = 0;
        if (selecc_num == null) {
            s4_p4_selecc_num = 0;
        } else {
            s4_p4_selecc_num = selecc_num;
        }
        try {
            Date date1 = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss").parse(fch_registro.substring(0, 19));
            demuna_ficha_s4_p4Item.setFch_registro(date1);

            Date date2 = new SimpleDateFormat("dd/MM/yyyy").parse(fch_actualiza.substring(0, 9));
            demuna_ficha_s4_p4Item.setFch_actualiza(date2);

            Date date3 = new SimpleDateFormat("dd/MM/yyyy").parse(fch_valida.substring(0, 9));
            demuna_ficha_s4_p4Item.setFch_valida(date3);
        } catch (Exception e) {
            System.out.println("Error al convertir fecha:" + e.getMessage());
        }

        Demuna_Ficha_S4_P4PKEntity demuna_ficha_s4_p4pk = new Demuna_Ficha_S4_P4PKEntity();
        demuna_ficha_s4_p4pk.setId_ficha(id_ficha);
        demuna_ficha_s4_p4pk.setId_ficha_s4(id_ficha_s4);
        demuna_ficha_s4_p4pk.setId_secuencia(demuna_ficha_s4_p4repository.generarIdFichaS4P4(id_ficha_s4));
        demuna_ficha_s4_p4Item.setDemuna_ficha_s4_p4pk(demuna_ficha_s4_p4pk);
        demuna_ficha_s4_p4Item.setUsu_registro(request.getParameter("usu_registro"));

        demuna_ficha_s4_p4Item.setUsu_actualiza(request.getParameter("usu_actualiza"));

        demuna_ficha_s4_p4Item.setUsu_valida(request.getParameter("usu_valida"));

        demuna_ficha_s4_p4Item.setEstado(request.getParameter("estado"));
        demuna_ficha_s4_p4Item.setP4_profesion(request.getParameter("profesion"));
        demuna_ficha_s4_p4Item.setP4_seleccion(request.getParameter("seleccion"));
        demuna_ficha_s4_p4Item.setP4_txt_otros(request.getParameter("txt_otros"));
        demuna_ficha_s4_p4Item.setP4_capa(request.getParameter("capa"));
        demuna_ficha_s4_p4Item.setP4_equipo(request.getParameter("equipo"));
        demuna_ficha_s4_p4Item.setP4_selecc_num(s4_p4_selecc_num);
        demuna_ficha_s4_p4Item.setP4_anno(anno);
        demuna_ficha_s4_p4Item.setP4_meses(meses);
        demuna_ficha_s4_p4Item.setP4_tipo_contrato(tc);
        //extra

        demuna_ficha_s4_p4Item.setP4_14_1_a(p4_14_1_a);
        demuna_ficha_s4_p4Item.setP4_14_1_b(p4_14_1_b);
        demuna_ficha_s4_p4Item.setP4_14_1_c(p4_14_1_c);
        demuna_ficha_s4_p4Item.setP4_14_1_d(p4_14_1_d);
        demuna_ficha_s4_p4Item.setP4_14_1_e(p4_14_1_e);
        demuna_ficha_s4_p4Item.setP4_14_1_f(p4_14_1_f);

        demuna_ficha_s4_p4Item.setP4_14_2_a(p4_14_2_a);
        demuna_ficha_s4_p4Item.setP4_14_2_b(p4_14_2_b);
        demuna_ficha_s4_p4Item.setP4_14_2_c(p4_14_2_c);
        demuna_ficha_s4_p4Item.setP4_14_2_d(p4_14_2_d);

        demuna_ficha_s4_p4Item.setP4_14_2_e(p4_14_2_e);
        demuna_ficha_s4_p4Item.setP4_14_2_e_otro(p4_14_2_e_otro);
        demuna_ficha_s4_p4repository.save(demuna_ficha_s4_p4Item);
        return "ok";
    }

//    @RequestMapping(value = {"/demuna/usuario/ficha/cargaCuadro"}, method = {RequestMethod.POST, RequestMethod.GET})
//    public String pageCargaCuadro(HttpServletRequest request, Model model,
//            @RequestParam("id_ficha") Integer id_ficha,
//            @RequestParam("profesion") String profesion) {
//
//        switch (profesion) {
//            case "A":
//                model.addAttribute("ficha_s4_p4_a", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "A"));
//                return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_14";
//            case "B":
//                model.addAttribute("ficha_s4_p4_b", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "B"));
//                return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_20";
//            case "C":
//                model.addAttribute("ficha_s4_p4_c", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "C"));
//                return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_24";
//            case "D":
//                model.addAttribute("ficha_s4_p4_d", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "D"));
//                return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_29";
//            case "E":
//                model.addAttribute("ficha_s4_p4_e", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "E"));
//                return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_34";
//        }
//        return "ok";
//    }

    @RequestMapping(value = {"/demuna/usuario/ficha/cargaCuadro"}, method = {RequestMethod.POST, RequestMethod.GET})
public String pageCargaCuadro(HttpServletRequest request, Model model,
        @RequestParam("id_ficha") Integer id_ficha,
        @RequestParam("profesion") String profesion) {

    // Limpieza de atributos previos
    model.asMap().clear();
    
    // Añadir nuevo registro al modelo basado en la profesión
    switch (profesion) {
        case "A":
            model.addAttribute("ficha_s4_p4_a", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "A"));
            return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_14";
        case "B":
            model.addAttribute("ficha_s4_p4_b", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "B"));
            return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_20";
        case "C":
            model.addAttribute("ficha_s4_p4_c", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "C"));
            return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_24";
        case "D":
            model.addAttribute("ficha_s4_p4_d", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "D"));
            return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_29";
        case "E":
            model.addAttribute("ficha_s4_p4_e", demuna_ficha_s4_p4repository.getFichaS4_P4ByIdFicha(id_ficha, "E"));
            return "gestiondemuna/usuario/FormularioFichasDemuna :: cuadro_4_34";
    }
    return "ok";
}

    @RequestMapping(value = {"/demuna/usuario/ficha/eliminarRegistro"}, method = {RequestMethod.POST, RequestMethod.GET})
    public @ResponseBody
    String pageEliminarRegistro(HttpServletRequest request, Model model,
            @RequestParam("id_ficha") Integer id_ficha,
            @RequestParam("id_secuencia") Integer id_secuencia,
            @RequestParam("p4_profesion") String p4_profesion) {
        Demuna_Ficha_S4_P4PKEntity demuna_ficha_s4_p4pk = new Demuna_Ficha_S4_P4PKEntity();
        demuna_ficha_s4_p4pk.setId_ficha(id_ficha);
        demuna_ficha_s4_p4pk.setId_ficha_s4(id_ficha);
        demuna_ficha_s4_p4pk.setId_secuencia(id_secuencia);
        demuna_ficha_s4_p4repository.deleteById(demuna_ficha_s4_p4pk);
        return "ok";
    }
    // ---------------------------------FIN - CHRISTIAN

    @RequestMapping("/demuna/especialista/ficha/listarSupervisionFichas")
    public String listarSeguimientoFichas(Model model, HttpSession httpSession) {

        List<Demuna_FichaEntity> listaFichas = null;

        List<String> listaRegiones = null;
        List<GepCuadroComparativoDTO> listaCuadro = null;
        System.out.println("Entro");
        try {

            listaRegiones = demuna_FichaService.listarRegiones();

            // Llamada al método correcta del servicio para obtener la lista de fichas
            // listaFichas = demuna_FichaService.listarSeguimientoFichas("00", "I");
            listaFichas = demuna_FichaService.listarSeguimientoFichas("00", "00");
            //listaCuadro = gep_FichaService.listarCuadroRegistro();

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaCuadro", listaCuadro);
        model.addAttribute("listaRegiones", listaRegiones);
        model.addAttribute("listaFichas", listaFichas);

        return "gestiondemuna/especialista/ListaFichasSupervision";
    }

    @RequestMapping("/demuna/especialista/ficha/ajaxBuscarFichasSupervision")
    public String ajaxBuscarFichasSupervision(Model model,
            @RequestParam("codi_depa_dpt") String codi_depa_dpt,
            @RequestParam("estado") String estado) {
        System.out.println("listficha:");

        System.out.println("departamento recibido: " + codi_depa_dpt);
        System.out.println("Estado recibido: " + estado);

        List<Demuna_FichaEntity> listaFichas = null;

        try {

            listaFichas = demuna_FichaService.listarSeguimientoFichas(codi_depa_dpt, estado);

            System.out.println("listaficha:" + listaFichas);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaFichas", listaFichas);

        return "gestiondemuna/especialista/ListaFichasSupervision :: data_lista_fichas";
    }

//
    @RequestMapping("/demuna/especialista/ficha/listarMonitoreoFichas")
//    @PreAuthorize("hasRole('ROLE_ESPECIALISTA') ")
    public String listarMonitoreoFichas(Model model, HttpSession httpSession) {

        List<GepCuadroComparativoDTO> listaCuadro = null;
        GepCuadroComparativoDTO totalCuadro = null;

        double total_porcent = 0.0;
        int total_registro = 0;
        int total_colegio = 0;
        String txt_total_porcent = "";

        try {

            listaCuadro = demuna_FichaService.listarCuadroRegistro();

            totalCuadro = demuna_FichaService.listarTotalCuadroRegistro();

            for (GepCuadroComparativoDTO cuadro : listaCuadro) {
//                
                total_registro = total_registro + cuadro.getDir_comp();
                total_colegio = total_colegio + cuadro.getTot_cole();
            }

            if (listaCuadro.size() > 0) {
                total_porcent = (double) total_registro / total_colegio;
                total_porcent = total_porcent * 100;

//                DecimalFormat df = new DecimalFormat("#.##");
//                df.setRoundingMode(RoundingMode.DOWN);
//                txt_total_porcent = df.format(total_porcent) + " % ";
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaCuadro", listaCuadro);
        model.addAttribute("totalCuadro", totalCuadro);
        model.addAttribute("total_porcent", total_porcent);
        model.addAttribute("txt_total_porcent", txt_total_porcent);

        return "gestiondemuna/especialista/ListaFichasMonitoreo";
    }

    //////////////////////////////////////////////////////////////ADJUNTAR DOCUMENTOS///////////////////////////////////////////////////////////////////////////////////////////////////////
    public Demuna_ArchivoEntity guardarArchivo(MultipartFile archivo_file, Integer id_archivo, Integer id_ficha, String nom_campo, String id_seccion,  Integer id_detalle, String cod_unico) {

        Demuna_ArchivoEntity archivo = new Demuna_ArchivoEntity();
        System.out.println(" archivo ");
        String extension = null;
        String archivo_renombrado = null;
        String ruta_archivo = null;
        String usuario_usu = "";
        Date fecha_hora = null;

        usuario_usu = variableSistemaService.userID().trim().toUpperCase();
        fecha_hora = variableSistemaLocalService.getFecha_hora_sistema();

        if (id_archivo == null || id_archivo == 0) {
            id_archivo = demuna_FichaService.generarIdArchivo();
        }

        extension = archivo_file.getOriginalFilename().substring(archivo_file.getOriginalFilename().lastIndexOf('.'));
        archivo_renombrado = id_archivo + extension;

        // id_seccion = "S2";
        ruta_archivo = id_seccion + "/" + archivo_renombrado;

        System.out.println("ruta archivo: " + ruta_archivo);

        archivo.setId(new Demuna_ArchivoPk(id_archivo, id_ficha, cod_unico));
        archivo.setNom_campo(nom_campo);
        archivo.setNom_archivo(Constantes.DIRECTORIOARCHIVO + ruta_archivo);
        archivo.setFch_archivo(fecha_hora);
        archivo.setUsr_archivo(usuario_usu);
        archivo.setDes_archivo(archivo_file.getOriginalFilename());
        archivo.setId_seccion(id_seccion);
        archivo.setId_detalle(id_detalle);
        

        try {

            File directorio = new File(archivo.getNom_archivo());

            if (directorio.exists()) {
                Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
                Files.delete(fileToDeletePath);
            }

            archivo_file.transferTo(new File(ruta_archivo));
            demuna_FichaService.guardarArchivo(archivo);

        } catch (IOException ex) {
            java.util.logging.Logger.getLogger(FichasController.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IllegalStateException ex) {
            java.util.logging.Logger.getLogger(FichasController.class.getName()).log(Level.SEVERE, null, ex);
        }

        return archivo;
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxGuardarArchivoAdjunto")
public String ajaxGuardarArchivoAdjunto(Model model,
        @RequestParam(value = "id_archivo", required = false) Integer id_archivo,
        @RequestParam("id_ficha") Integer id_ficha,
        @RequestParam("cod_unico") String cod_unico,
        @RequestParam("id_input_file") String id_input_file,
        @RequestParam(value = "archivo_adjunto", required = false) MultipartFile[] archivo_adjunto) {
    
       System.out.println("Cod Unico: " + cod_unico);

    String usr_archivo = variableSistemaService.userID().trim().toUpperCase();
    String id_seccion = null;
    if ("s114_arch".equals(id_input_file)) {
        id_seccion = id_input_file.substring(0, 3).toUpperCase();
    } else {
        id_seccion = id_input_file.substring(0, 2).toUpperCase();
    }
    
    System.out.println("id_input_file: " + id_input_file);
    System.out.println("id_seccion: " + id_seccion);

    List<Demuna_ArchivoEntity> listaS1_7_arch = null;
    List<Demuna_ArchivoEntity> listaS2_arch = null;
    List<Demuna_ArchivoEntity> listaS3_2_arch = null;
    List<Demuna_ArchivoEntity> listaS3_3_arch = null;
    List<Demuna_ArchivoEntity> listaS3_4_arch = null;
    List<Demuna_ArchivoEntity> listaS341_arch = null;
    List<Demuna_ArchivoEntity> listaS212_arch = null;
    List<Demuna_ArchivoEntity> listaS251_arch = null;
    List<Demuna_ArchivoEntity> listaS471_arch = null;
    List<Demuna_ArchivoEntity> listaS6312_arch = null;
    List<Demuna_ArchivoEntity> listaS6313_arch = null;
    List<Demuna_ArchivoEntity> listaS114_arch = null;
    List<Demuna_ArchivoEntity> listaS962_arch = null;

    Demuna_ArchivoEntity archivox = null;
    Demuna_FichaEntity ficha = new Demuna_FichaEntity();
    Demuna_FichaEntity s1 = null;
    Demuna_Ficha_S2Entity s2 = null;
    Demuna_Ficha_S3Entity s3 = null;
    Demuna_Ficha_S4Entity s4 = null;
    Demuna_Ficha_S6Entity s6 = null;
    Demuna_Ficha_S11Entity s11 = null;
    Demuna_Ficha_S9Entity s9 = null;

    System.out.println("Demuna_FichaEntity" + s1);

    Integer id_archivox = 0;
    String errorMessage = null;

    try {
        if (archivo_adjunto != null && archivo_adjunto.length > 0) {
            for (MultipartFile archivo : archivo_adjunto) {
                if ("s3_2_arch".equalsIgnoreCase(id_input_file)) {
                    String originalFilename = archivo.getOriginalFilename();
                    if (originalFilename != null && !originalFilename.toLowerCase().matches(".*\\.(jpg|jpeg|png)$")) {
                        errorMessage = "Solo se aceptan archivos JPG, JPEG y PNG.";
                        continue;
                    }
                }

                if ("s3_3_arch".equalsIgnoreCase(id_input_file)) {
                    String originalFilename = archivo.getOriginalFilename();
                    if (originalFilename != null && !originalFilename.toLowerCase().matches(".*\\.(jpg|jpeg|png)$")) {
                        errorMessage = "Solo se aceptan archivos JPG, JPEG y PNG.";
                        continue;
                    }
                }

                if ("s3_4_arch".equalsIgnoreCase(id_input_file)) {
                    String originalFilename = archivo.getOriginalFilename();
                    if (originalFilename != null && !originalFilename.toLowerCase().matches(".*\\.(jpg|jpeg|png)$")) {
                        errorMessage = "Solo se aceptan archivos JPG, JPEG y PNG.";
                        continue;
                    }
                }

                if ("s341_arch".equalsIgnoreCase(id_input_file)) {
                    String originalFilename = archivo.getOriginalFilename();
                    if (originalFilename != null && !originalFilename.toLowerCase().matches(".*\\.(jpg|jpeg|png)$")) {
                        errorMessage = "Solo se aceptan archivos JPG, JPEG y PNG.";
                        continue;
                    }
                }

                archivox = guardarArchivo(archivo, id_archivo, id_ficha, id_input_file.toUpperCase(), id_seccion.toUpperCase(),null, cod_unico);
                if (archivox != null && archivox.getId().getId_archivo() != null) {
                    id_archivox = archivox.getId().getId_archivo();
                }
            }
        }

            switch (id_seccion) {
                case "S1":
                    System.out.println("case id_seccion: " + id_seccion);
                    s1 = new Demuna_FichaEntity();
                    System.out.println("case id_input_file: " + id_input_file);
                    switch (id_input_file) {
                        case "s1_7_arch":
                            listaS1_7_arch = demuna_FichaService.listarArchivos(id_ficha, "S1_7_ARCH", id_seccion, cod_unico);
                            s1.setS1_7_arch_id_archivo(listaS1_7_arch.size());
                            break;

                    }
                    s1.setId_ficha(id_ficha);
                    ficha.setDemuna_ficha(s1);
                    break;

                case "S2":
                    System.out.println("case id_seccion: " + id_seccion);
                    s2 = new Demuna_Ficha_S2Entity();
                    System.out.println("case id_input_file: " + id_input_file);
                    switch (id_input_file) {
                        case "s2_arch":
                            listaS2_arch = demuna_FichaService.listarArchivos(id_ficha, "S2_ARCH", id_seccion,cod_unico);
                            s2.setS2_arch_id_archivo(listaS2_arch.size());
                            break;
                        case "s212_arch":
                            listaS212_arch = demuna_FichaService.listarArchivos(id_ficha, "S212_ARCH", id_seccion,cod_unico);
                            s2.setS212_arch_id_archivo(listaS212_arch.size());
                            break;
                        case "s251_arch":
                            listaS251_arch = demuna_FichaService.listarArchivos(id_ficha, "S251_ARCH", id_seccion,cod_unico);
                            s2.setS251_arch_id_archivo(listaS251_arch.size());
                            break;
                    }
                    s2.setId_ficha(id_ficha);
                    ficha.setDemuna_ficha_s2(s2);
                    break;

                case "S3":
                    System.out.println("case id_seccion: " + id_seccion);
                    s3 = new Demuna_Ficha_S3Entity();
                    System.out.println("case id_input_file: " + id_input_file);
                    switch (id_input_file) {
                        case "s3_2_arch":
                            listaS3_2_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_2_ARCH", id_seccion,cod_unico);
                            s3.setS3_2_arch_id_archivo(listaS3_2_arch.size());
                            break;
                        case "s3_3_arch":
                            listaS3_3_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_3_ARCH", id_seccion,cod_unico);
                            s3.setS3_3_arch_id_archivo(listaS3_3_arch.size());
                            break;

                        case "s3_4_arch":
                            listaS3_4_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_4_ARCH", id_seccion,cod_unico);
                            s3.setS3_4_arch_id_archivo(listaS3_4_arch.size());
                            break;

                        case "s341_arch":
                            listaS341_arch = demuna_FichaService.listarArchivos(id_ficha, "S341_ARCH", id_seccion,cod_unico);
                            s3.setS341_arch_id_archivo(listaS341_arch.size());
                            System.out.println("case listaS341_arch: " + listaS341_arch);
                            break;
                    }
                    s3.setId_ficha(id_ficha);
                    ficha.setDemuna_ficha_s3(s3);
                    break;

                case "S4":
                    System.out.println("case id_seccion: " + id_seccion);
                    s4 = new Demuna_Ficha_S4Entity();
                    System.out.println("case id_input_file: " + id_input_file);
                    switch (id_input_file) {
                        case "s471_arch":
                            listaS471_arch = demuna_FichaService.listarArchivos(id_ficha, "S471_ARCH", id_seccion,cod_unico);
                            s4.setS471_arch_id_archivo(listaS471_arch.size());
                            System.out.println("case listaS471_arch: " + listaS471_arch);
                            break;

                    }
                    System.out.println("xyz");
                    s4.setId_ficha(id_ficha);
                    ficha.setDemuna_ficha_s4(s4);

                    System.out.println("xyzxxxxxxxxx");
                    break;
                case "S6":
                    System.out.println("case id_seccion: " + id_seccion);
                    s6 = new Demuna_Ficha_S6Entity();
                    System.out.println("case id_input_file: " + id_input_file);
                    switch (id_input_file) {
                        case "s6312_arch":
                            listaS6312_arch = demuna_FichaService.listarArchivos(id_ficha, "S6312_ARCH", id_seccion,cod_unico);
                            s6.setS6312_arch_id_archivo(listaS6312_arch.size());
                            System.out.println("case listaS6312_arch: " + listaS6312_arch);
                            break;
                        case "s6313_arch":
                            listaS6313_arch = demuna_FichaService.listarArchivos(id_ficha, "S6313_ARCH", id_seccion,cod_unico);
                            s6.setS6313_arch_id_archivo(listaS6313_arch.size());
                            System.out.println("case listaS6313_arch: " + listaS6313_arch);
                            break;

                    }
                    System.out.println("6");
                    s6.setId_ficha(id_ficha);
                    ficha.setDemuna_ficha_s6(s6);

                    System.out.println("xyzxxxxxxxxDDDDDx");
                    break;
                case "S9":
                    System.out.println("case id_seccion: " + id_seccion);
                    s9 = new Demuna_Ficha_S9Entity();
                    System.out.println("case id_input_file: " + id_input_file);
                    switch (id_input_file) {
                        case "s962_arch":
                            listaS962_arch = demuna_FichaService.listarArchivos(id_ficha, "S962_ARCH", id_seccion,cod_unico);
                            s9.setS962_arch_id_archivo(listaS962_arch.size());
                            break;

                    }
                    System.out.println("9");
                    s9.setId_ficha(id_ficha);
                    ficha.setDemuna_ficha_s9(s9);
                    break;
                case "S11":
                    System.out.println("case id_seccion: " + id_seccion);
                    s11 = new Demuna_Ficha_S11Entity();
                    System.out.println("case id_input_file: " + id_input_file);
                    switch (id_input_file) {
                        case "s114_arch":
                            listaS114_arch = demuna_FichaService.listarArchivos(id_ficha, "S114_ARCH", id_seccion,cod_unico);
                            s11.setS114_arch_id_archivo(listaS114_arch.size());
                            System.out.println("case listaS114_arch: " + listaS114_arch);
                            break;

                    }
                    System.out.println("11");
                    s11.setId_ficha(id_ficha);
                    ficha.setDemuna_ficha_s11(s11);

                    System.out.println("xyzxxxxxxxxDDDDDx");
                    break;
                default:
                    System.out.println("Sección no reconocida: " + id_seccion);
                    break;
            }

            model.addAttribute("ficha", ficha);
            model.addAttribute("listaS1_7_arch", listaS1_7_arch);
            model.addAttribute("listaS2_arch", listaS2_arch);
            model.addAttribute("listaS3_2_arch", listaS3_2_arch);
            model.addAttribute("listaS3_3_arch", listaS3_3_arch);
            model.addAttribute("listaS212_arch", listaS212_arch);
            model.addAttribute("listaS251_arch", listaS251_arch);
            model.addAttribute("listaS3_4_arch", listaS3_4_arch);
            model.addAttribute("listaS341_arch", listaS341_arch);
            model.addAttribute("listaS471_arch", listaS471_arch);
            model.addAttribute("listaS6312_arch", listaS6312_arch);
            model.addAttribute("listaS6313_arch", listaS6313_arch);
            model.addAttribute("listaS114_arch", listaS114_arch);
            model.addAttribute("listaS962_arch", listaS962_arch);
        } catch (IllegalArgumentException e) {
            errorMessage = e.getMessage();
            logger.error("Error al procesar el archivo: " + e.getMessage(), e);
        } catch (Exception e) {
            errorMessage = "Error al procesar el archivo.";
            logger.error("Error: " + e.getMessage(), e);
        }

        if (errorMessage != null) {
            model.addAttribute("errorMessage", errorMessage);
        }

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_" + id_input_file;
    }

    @RequestMapping("/demuna/ficha/formulario/descargarArchivo")
    public void descargarArchivo(@RequestParam("id_archivo") Integer id_archivo, @RequestParam("id_ficha") Integer id_ficha,@RequestParam("cod_unico") String cod_unico,
            HttpServletResponse response) throws IOException {

        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha, cod_unico);

            Path file = Paths.get(archivo.getNom_archivo());
            String content_type = Files.probeContentType(file);

            if (Files.exists(file)) {

                response.setContentType(content_type);

                response.addHeader("Content-Disposition", "attachment; filename=" + archivo.getDes_archivo().replaceAll("[^a-zA-Z0-9\\.\\-]", "_"));
                try {

                    Files.copy(file, response.getOutputStream());
                    response.getOutputStream().flush();

                } catch (IOException e) {
                    logger.info(e.getMessage());
                    e.printStackTrace();

                }
            } else {
                logger.info("archivo no encontrado");
            }
        } catch (Exception e) {
            logger.info("ERROR: " + e.getMessage());
            e.printStackTrace();
        }

    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec2")
    public String ajaxEliminarArchivoSec2(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {

        List<Demuna_ArchivoEntity> listaS2_arch = null;
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS2_arch = demuna_FichaService.listarArchivos(id_ficha, "S2_ARCH", "S2",cod_unico);

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS2_arch", listaS2_arch);
        System.out.println("listaS2_arch añadida al modelo con " + (listaS2_arch != null ? listaS2_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s2_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec114")
    public String ajaxEliminarArchivoSec114(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
            @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {

        List<Demuna_ArchivoEntity> listaS114_arch = null;
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS114_arch = demuna_FichaService.listarArchivos(id_ficha, "S114_ARCH", "S11",cod_unico);

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS114_arch", listaS114_arch);
        System.out.println("listaS114_arch añadida al modelo con " + (listaS114_arch != null ? listaS114_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s114_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec3")
    public String ajaxEliminarArchivoSec3(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();
        List<Demuna_ArchivoEntity> listaS3_2_arch = null;
        System.out.println("ajax3");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS3_2_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_2_ARCH", "S3", cod_unico);
            System.out.println("listaS3_2_arch" + listaS3_2_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS3_2_arch", listaS3_2_arch);

        System.out.println("listaS3_2_arch añadida al modelo con " + (listaS3_2_arch != null ? listaS3_2_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s3_2_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec3_3")
    public String ajaxEliminarArchivoSec3_3(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
              @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS3_3_arch = null;
        System.out.println("ajax3");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS3_3_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_3_ARCH", "S3",cod_unico);
            System.out.println("listaS3_3_arch" + listaS3_3_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS3_3_arch", listaS3_3_arch);

        System.out.println("listaS3_3_arch añadida al modelo con " + (listaS3_3_arch != null ? listaS3_3_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s3_3_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec3_4")
    public String ajaxEliminarArchivoSec3_4(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS3_4_arch = null;
        System.out.println("ajax34");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha, cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS3_4_arch = demuna_FichaService.listarArchivos(id_ficha, "S3_4_ARCH", "S3", cod_unico);
            System.out.println("listaS3_3_arch" + listaS3_4_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS3_4_arch", listaS3_4_arch);

        System.out.println("listaS3_4_arch añadida al modelo con " + (listaS3_4_arch != null ? listaS3_4_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s3_4_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec1_7")
    
    public String ajaxEliminarArchivoSec1_7(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS1_7_arch = null;
        System.out.println("ajax17");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha, cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS1_7_arch = demuna_FichaService.listarArchivos(id_ficha, "S1_7_ARCH", "S1", cod_unico);
            System.out.println("listaS1_7_arch" + listaS1_7_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS1_7_arch", listaS1_7_arch);

        System.out.println("listaS1_7_arch añadida al modelo con " + (listaS1_7_arch != null ? listaS1_7_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s1_7_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec341")
    public String ajaxEliminarArchivoSec341(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
            @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS341_arch = null;
        System.out.println("ajax341");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS341_arch = demuna_FichaService.listarArchivos(id_ficha, "S341_ARCH", "S3",cod_unico);
            System.out.println("listaS341_arch" + listaS341_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS341_arch", listaS341_arch);

        System.out.println("listaS3_4_arch añadida al modelo con " + (listaS341_arch != null ? listaS341_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s341_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec962")
    public String ajaxEliminarArchivoSec962(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS962_arch = null;
        System.out.println("ajax962");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS962_arch = demuna_FichaService.listarArchivos(id_ficha, "S962_ARCH", "S9",cod_unico);
            System.out.println("listaS962_arch" + listaS962_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS962_arch", listaS962_arch);

        System.out.println("listaS962_arch añadida al modelo con " + (listaS962_arch != null ? listaS962_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s962_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec471")
    public String ajaxEliminarArchivoSec471(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS471_arch = null;
        System.out.println("ajax471");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS471_arch = demuna_FichaService.listarArchivos(id_ficha, "S471_ARCH", "S4",cod_unico);
            System.out.println("listaS471_arch" + listaS471_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS471_arch", listaS471_arch);

        System.out.println("listaS3_4_arch añadida al modelo con " + (listaS471_arch != null ? listaS471_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s471_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec6312")
    public String ajaxEliminarArchivoSec6312(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS6312_arch = null;
        System.out.println("ajax6312");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS6312_arch = demuna_FichaService.listarArchivos(id_ficha, "S6312_ARCH", "S6",cod_unico);
            System.out.println("listaS6312_arch" + listaS6312_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS6312_arch", listaS6312_arch);

        System.out.println("listaS6312_arch añadida al modelo con " + (listaS6312_arch != null ? listaS6312_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s6312_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec6313")
    public String ajaxEliminarArchivoSec6313(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS6313_arch = null;
        System.out.println("ajax6313");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS6313_arch = demuna_FichaService.listarArchivos(id_ficha, "S6313_ARCH", "S6", cod_unico);
            System.out.println("listaS6313_arch" + listaS6313_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS6313_arch", listaS6313_arch);

        System.out.println("listaS6313_arch añadida al modelo con " + (listaS6313_arch != null ? listaS6313_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s6313_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec212")
    public String ajaxEliminarArchivoSec212(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS212_arch = null;
        System.out.println("ajax212");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS212_arch = demuna_FichaService.listarArchivos(id_ficha, "S212_ARCH", "S2",cod_unico);
            System.out.println("listaS212_arch" + listaS212_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS212_arch", listaS212_arch);

        System.out.println("listaS212_arch añadida al modelo con " + (listaS212_arch != null ? listaS212_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s212_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxEliminarProyectoSec251")
    public String ajaxEliminarArchivoSec251(Model model,
            @RequestParam("id_archivo") Integer id_archivo,
             @RequestParam("cod_unico") String cod_unico,
            @RequestParam("id_ficha") Integer id_ficha) {
String usr_archivo = variableSistemaService.userID().trim().toUpperCase();

        List<Demuna_ArchivoEntity> listaS251_arch = null;
        System.out.println("ajax251");
        try {

            Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha,cod_unico);

            demuna_FichaService.eliminarArchivoById(archivo.getId());

            Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
            Files.delete(fileToDeletePath);

            listaS251_arch = demuna_FichaService.listarArchivos(id_ficha, "S251_ARCH", "S2",cod_unico);
            System.out.println("listaS251_arch" + listaS251_arch);
        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        model.addAttribute("listaS251_arch", listaS251_arch);

        System.out.println("listaS251_arch añadida al modelo con " + (listaS251_arch != null ? listaS251_arch.size() : "0") + " elementos");

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_s251_arch";
    }

    @RequestMapping("/demuna/ficha/formulario/validarParcial")
    public String validarParcial(Model model, @RequestParam("id_ficha") Integer id_ficha,
            @RequestParam("id_sec_x") Integer id_sec_x,
            @RequestParam("sec_x") String sec_x) {

        System.out.println("id_ficha: " + id_ficha);
        System.out.println("id_sec_x: " + id_sec_x);
        System.out.println("sec_x: " + sec_x);

        Demuna_FichaEntity ficha = new Demuna_FichaEntity();

        String usuario_usu = variableSistemaService.userID().trim().toUpperCase();
        try {

            ficha = demuna_FichaService.validarSecX(id_ficha, id_sec_x, sec_x, usuario_usu);

        } catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("ficha", ficha);

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_" + sec_x + "_alert_validado";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxValidarFicha")
    public String ajaxValidarFicha(Model model,
            @RequestParam(value = "id_ficha", required = false) Integer id_ficha) {

        Demuna_FichaEntity ficha = null;

        try {

            ficha = demuna_FichaService.getFichaByIdFicha(id_ficha);

        } catch (Exception e) {
            e.printStackTrace();
        }

        model.addAttribute("ficha", ficha);

        return "gestiondemuna/usuario/FormularioFichasDemuna :: data_validar_ficha_demuna";
    }

    @RequestMapping("/demuna/ficha/formulario/ajaxBuscarByDNI")
    @ResponseBody
    public Map ajaxBuscarByDNI(Model model,
            @RequestParam("num_dni") String num_dni) {

        Map<String, Object> elemento = new HashMap();

        String nom_funcionario = "";

        String nombre = "";
        String ape_pat = "";
        String ape_mat = "";

        try {

            Optional<Matm_personaEntity> optionalEntity = matm_persona_repository.findById(num_dni.trim());

            if (optionalEntity.isPresent()) {

                Matm_personaEntity matm_personamodel = optionalEntity.get();

                nombre = matm_personamodel.getPrenom_inscrito() != null ? matm_personamodel.getPrenom_inscrito().trim().toUpperCase() : "";
                ape_pat = matm_personamodel.getAp_primer() != null ? matm_personamodel.getAp_primer().trim().toUpperCase() : "";
                ape_mat = matm_personamodel.getAp_segundo() != null ? matm_personamodel.getAp_segundo().trim().toUpperCase() : "";

                nom_funcionario = nombre + " " + ape_pat + " " + ape_mat;
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        elemento.put("nom_funcionario", nom_funcionario);

        return elemento;

    }

    @RequestMapping("/demuna/ficha/formulario/ajaxBuscarByDNIdefensor")
    @ResponseBody
    public Map ajaxBuscarByDNIdefensor(Model model,
            @RequestParam("num_dni") String num_dni) {

        Map<String, Object> elemento = new HashMap();

        String nom_defensor = "";

        String nombre = "";
        String ape_pat = "";
        String ape_mat = "";

        try {

            Optional<Matm_personaEntity> optionalEntity = matm_persona_repository.findById(num_dni.trim());

            if (optionalEntity.isPresent()) {

                Matm_personaEntity matm_personamodel = optionalEntity.get();

                nombre = matm_personamodel.getPrenom_inscrito() != null ? matm_personamodel.getPrenom_inscrito().trim().toUpperCase() : "";
                ape_pat = matm_personamodel.getAp_primer() != null ? matm_personamodel.getAp_primer().trim().toUpperCase() : "";
                ape_mat = matm_personamodel.getAp_segundo() != null ? matm_personamodel.getAp_segundo().trim().toUpperCase() : "";

                nom_defensor = nombre + " " + ape_pat + " " + ape_mat;
            }

        } catch (Exception e) {
            logger.error("Error: " + e.getMessage());
            e.printStackTrace();
        }

        elemento.put("nom_defensor", nom_defensor);

        return elemento;

    }
}
