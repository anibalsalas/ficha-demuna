package com.dp.gestiondemuna.dao;

import com.dp.gestiondemuna.entity.Demuna_EstablecimientosEntity;
import com.dp.gestiondemuna.entity.UsuarioEntity;

public interface UsuarioDAO {
    
    public Demuna_EstablecimientosEntity buscarAutoridad(String username);
       
    public UsuarioEntity buscarUsuario(String username);

    public UsuarioEntity getUsuario(String usuario_usu);

}
