package com.dp.gestiondemuna.service;

import com.dp.gestiondemuna.entity.AnexosEntity;
import com.dp.gestiondemuna.entity.Sid_Ubigeo_DptoEntity;
import com.dp.gestiondemuna.entity.Sid_Ubigeo_DstroEntity;
import com.dp.gestiondemuna.entity.Sid_Ubigeo_ProvEntity;
import com.dp.gestiondemuna.entity.TdependenciasEntity;
import com.dp.gestiondemuna.entity.UsuarioEntity;
import java.sql.Timestamp;
import java.util.List;

public interface VariableSistemaLocalService {

    public Timestamp getFecha_hora_sistema();

    public UsuarioEntity getUsuario(String usuario_usu);

    public AnexosEntity getAnexo(String codi_empl_per);

    public List<TdependenciasEntity> getDropdown_dependencias_general();

    public String dependencia_fisica_personal(String usuario_usu);

    public TdependenciasEntity getDependencia(String codi_depe_tde);

    public List<Sid_Ubigeo_DptoEntity> listarDepartamento();

    public List<Sid_Ubigeo_ProvEntity> listarProvincias(String c_coddpto);

    public List<Sid_Ubigeo_DstroEntity> listarDistritos(String c_coddpto, String c_codprov);
    
    public String esJefeOficina(String usuario_usu);
    
    public List<TdependenciasEntity> listarODsMODs();
    
    public boolean enviar_correo(String[] addresses, String subject, String mensaje);

}
