package com.dp.gestiondemuna.dao.impl;

import com.dp.gestiondemuna.dao.UsuarioDAO;
import com.dp.gestiondemuna.entity.Demuna_EstablecimientosEntity;
import com.dp.gestiondemuna.entity.UsuarioEntity;
import com.dp.gestiondemuna.repository.Demuna_EstablecimientosRepository;
import com.dp.gestiondemuna.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UsuarioDAOImpl implements UsuarioDAO {

    @Autowired
    UsuarioRepository usuarioRepository;

     @Autowired
    Demuna_EstablecimientosRepository demuna_EstablecimientosRepository;
     
     
    @Override
    public UsuarioEntity buscarUsuario(String username) {
        return usuarioRepository.buscarUsuario(username.trim().toUpperCase());
    }
    
    @Override
    public Demuna_EstablecimientosEntity buscarAutoridad(String username) {
        return demuna_EstablecimientosRepository.buscarAutoridad(username.trim().toUpperCase());
    }

    @Override
    public UsuarioEntity getUsuario(String usuario_usu) {

        return usuarioRepository.getUsuario(usuario_usu.trim().toUpperCase());
    }

    
   
}
