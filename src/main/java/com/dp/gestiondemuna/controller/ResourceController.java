package com.dp.gestiondemuna.controller;

import com.dp.gestiondemuna.entity.Demuna_ArchivoEntity;
import com.dp.gestiondemuna.entity.Demuna_ArchivoPk;
import com.dp.gestiondemuna.entity.Demuna_FichaEntity;
import com.dp.gestiondemuna.entity.Seg_usuario_rolesEntity;
import com.dp.gestiondemuna.entity.UsuarioEntity;
import com.dp.gestiondemuna.service.Demuna_FichaService;
import com.dp.gestiondemuna.service.UsuarioService;
import com.dp.gestiondemuna.service.VariableSistemaLocalService;
import com.dp.gestiondemuna.util.Constantes;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.NumberFormat;
import java.text.ParsePosition;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

@Controller
public class ResourceController {

    Logger logger = LoggerFactory.getLogger(ResourceController.class);

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private VariableSistemaLocalService variableSistemaLocalService;

    @Autowired
    private Demuna_FichaService demuna_FichaService;

    //@PostMapping({"/", "/login"}) 
    @RequestMapping(value = {"/", "/login"}, method = {RequestMethod.GET, RequestMethod.POST})
    public String loginEndpoint() {
        return "/login";
    }

    @GetMapping(value = "/logout")
    public String logoutOff(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "redirect:/login";
    }

//    @GetMapping(value = "/error")
//    public String loginError(ModelMap model) {
//        return "login";
//    }
    @GetMapping(value = "/403")
    public String Deny(ModelMap model) {
        return "403";
    }

    @GetMapping(value = "/406")
    public String Deny_406(ModelMap model) {
        return "pages-error-406";
    }

    @GetMapping("/home")
    public RedirectView home(HttpSession httpSession, Model model, RedirectAttributes attributes) {
        Demuna_FichaEntity ficha = null;

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        String username = authentication.getName();
        String url = "";
        String rol_usuario = "";
        String rol_especialista = "";

        String tipo_usuario = (String) httpSession.getAttribute("session_tipo_usuario");
        String cod_unico = (String) httpSession.getAttribute("session_cod_unico");

        if (tipo_usuario.equals("A")) {//usuario de la dp

            rol_usuario = Constantes.ROL_COMISIONADO;

            ficha = demuna_FichaService.getFichaByCodigoUnico(cod_unico.trim());
        } else if (tipo_usuario.equals("B")) {//usuario externo
            rol_usuario = Constantes.ROL_DIRECTOR;

            ficha = demuna_FichaService.getFichaByCodigoUnico(username.trim());

        } else if (tipo_usuario.equals("C")) {//especialista de la dp
            System.out.println("tipo_usuario: " + tipo_usuario);
            UsuarioEntity usuariox = usuarioService.buscarUsuario(username.trim().toUpperCase());

            for (Seg_usuario_rolesEntity seg_usuario_rolesEntity : usuariox.getSeg_usuario_rolesentity()) {

                if (seg_usuario_rolesEntity.getSeg_rolesentity().getName_rol().trim().toUpperCase().equals("ROLE_DEMUNA_FICHA_ESPECIALISTA")) {
                    System.out.println("ok");
                    rol_especialista = Constantes.ROL_ESPECIALISTA;
                    rol_usuario = Constantes.ROL_COMISIONADO;
                    break;
                }
            }
        }

        if (tipo_usuario.equals("C") && rol_especialista.equals(Constantes.ROL_ESPECIALISTA)) {
            url = "/demuna/usuario/ficha/listarFichas";
        } else if (tipo_usuario.equals("C") && rol_especialista.equals("")) {
            url = "/403";
        } else {
            if (ficha != null && ficha.getId_ficha() != null) {

                attributes.addAttribute("id_ficha", ficha.getId_ficha());
                url = "/demuna/usuario/ficha/editarFichas";

            } else {
                attributes.addAttribute("cod_unico", tipo_usuario.equals("A") ? cod_unico.trim() : tipo_usuario.equals("B") ? username.trim() : "");
                url = "/demuna/usuario/ficha/insertarFichas";
            }
        }

        httpSession.setAttribute("rol_usuario", rol_usuario);
        httpSession.setAttribute("rol_especialista", rol_especialista);

        RedirectView redirectView = new RedirectView();
        redirectView.setContextRelative(true);
        redirectView.setUrl(url);

        return redirectView;

//
//        if (isNumerico(username.trim())) {
//
//            httpSession.setAttribute("rol_usuario", Constantes.ROL_DIRECTOR);
//            httpSession.setAttribute("rol_especialista", "");
//
//            Demuna_FichaEntity demuna_ficha = demuna_FichaService.buscarFichaByComisionadoCodigoUnico(username.trim());
//
//            if (demuna_ficha != null && demuna_ficha.getId_ficha() != null) {
//                model.addAttribute("flag_modal", "S");
//                return "redirect:/demuna/usuario/ficha/editarFichas?id_ficha=" + demuna_ficha.getId_ficha();
//            } else {
//                System.out.println("llego aqui insertarFichas");
//                return "redirect:/demuna/usuario/ficha/insertarFichas?cod_unico=" + username.trim();
//
//            }
////            if(demuna_ficha!=null &&  demuna_ficha.getId_ficha()!=null){
////                model.addAttribute("flag_modal", "S");
////                
////                
////               return "redirect:/demuna/usuario/ficha/editarFichasAutoridad?id_ficha="+demuna_ficha.getId_ficha();
////                
////              
////                return "home";
////            }
////        else{
////                return "redirect:/demuna/usuario/ficha/insertarFichas";
////            
////            }
//
//        } else {
//            System.out.println("ow");
//            String codi_depe_tde = variableSistemaLocalService.dependencia_fisica_personal(username.trim().toUpperCase());
//
//            if (Constantes.ESPECIALISTAS.contains(username.trim().toUpperCase())) {
//
//                httpSession.setAttribute("rol_especialista", Constantes.ROL_ESPECIALISTA);
//            } else {
//                httpSession.setAttribute("rol_especialista", "");
//            }
//
//            httpSession.setAttribute("rol_usuario", Constantes.ROL_COMISIONADO);
//
//            return "redirect:/demuna/usuario/ficha/listarFichas";
//        }
//        return "/home";
    }

    @GetMapping("/authorized")
    public @ResponseBody
    String authorized() {
        String usuario_usu, des_sigla = "";
        UsuarioEntity usuario = new UsuarioEntity();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated() == true && !authentication.getPrincipal().toString().trim().toUpperCase().equals("ANONYMOUSUSER")) {
            usuario_usu = authentication.getPrincipal().toString().toUpperCase().trim();
            usuario = usuarioService.buscarUsuario(usuario_usu);
            if (usuario != null && usuario.getDependencia() != null) {
                des_sigla = usuario.getDependencia().getDes_sigla();
            }
        }
        return des_sigla;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*AGREGADO */
//    @PostMapping("/cargarArchivo")
//    public String cargarArchivo(Model model, @RequestParam("id_ficha") Integer id_ficha, @RequestParam("id_detalle") Integer id_detalle, @RequestParam("seccion") String seccion, @RequestParam("campo") String campo, @RequestParam("retorno") String retorno, @RequestParam("archivos") MultipartFile[] archivos) throws IOException {
//        Demuna_ArchivoEntity archivo = null;
//        Integer id_archivo = 0;
//        String extension = null;
//        String archivo_renombrado = null;
//        String ruta_archivo = null;
//        Date fecha_hora = null;
//        String usuario_usu = null;
//        List<Demuna_ArchivoEntity> listaArchivo = null;
//        try {
//            if (archivos != null && archivos.length > 0) {
//                for (MultipartFile file : archivos) {
//                    archivo = new Demuna_ArchivoEntity();
//                    id_archivo = demuna_FichaService.generarIdArchivo();
//                    extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf('.'));
//                    archivo_renombrado = id_archivo + extension;
//                    if (file.isEmpty()) {
//                        continue;
//                    }
//                    File directory = new File(Constantes.DIRECTORIOARCHIVO + seccion);
//                    if (!directory.exists()) {
//                        directory.mkdirs();
//                    }
//                    ruta_archivo = seccion + "/" + archivo_renombrado;
//                    archivo.setId(new Demuna_ArchivoPk(id_archivo, id_ficha));
//                    archivo.setNom_campo(campo);
//                    archivo.setNom_archivo(Constantes.DIRECTORIOARCHIVO + ruta_archivo);
//                    archivo.setFch_archivo(fecha_hora);
//                    archivo.setUsr_archivo(usuario_usu);
//                    archivo.setDes_archivo(file.getOriginalFilename());
//                    archivo.setId_seccion(seccion);
//                    archivo.setId_detalle(id_detalle);
//                    file.transferTo(new File(ruta_archivo));
//                    demuna_FichaService.guardarArchivo(archivo);
//                }
//            }
//            listaArchivo = demuna_FichaService.listarArchivos(id_ficha, campo, seccion);
//        } catch (IOException e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//        model.addAttribute("listaArchivo", listaArchivo);
//        return "gestiondemuna/usuario/" + retorno;
//    }
//
//    @PostMapping("/eliminarArchivo")
//    public String eliminarArchivo(Model model, @RequestParam("id_archivo") Integer id_archivo, @RequestParam("id_ficha") Integer id_ficha, @RequestParam("id_detalle") Integer id_detalle, @RequestParam("seccion") String seccion, @RequestParam("campo") String campo, @RequestParam("retorno") String retorno) {
//        List<Demuna_ArchivoEntity> listaArchivo = null;
//        try {
//            if (id_archivo != null && id_archivo > 0) {
//                Demuna_ArchivoEntity archivo = demuna_FichaService.getArchivoById(id_archivo, id_ficha);
//                demuna_FichaService.eliminarArchivoById(archivo.getId());
//                Path fileToDeletePath = Paths.get(archivo.getNom_archivo());
//                Files.delete(fileToDeletePath);
//            }
//            listaArchivo = demuna_FichaService.listarArchivos(id_ficha, campo, seccion);
//        } catch (Exception e) {
//            logger.error("Error: " + e.getMessage());
//            e.printStackTrace();
//        }
//        model.addAttribute("listaArchivo", listaArchivo);
//        return "gestionepsas/usuario/" + retorno;
//    }

    @GetMapping("/descargarArchivo")
    public void descargarArchivo(@RequestParam("id_archivo") Integer id_archivo, @RequestParam("id_ficha") Integer id_ficha,@RequestParam("cod_unico") String cod_unico, HttpServletResponse response) throws IOException {
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

    public static boolean isNumerico(String s) {
        ParsePosition pos = new ParsePosition(0);
        NumberFormat.getInstance().parse(s, pos);
        return s.length() == pos.getIndex();
    }
}
