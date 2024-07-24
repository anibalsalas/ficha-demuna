package com.dp.gestiondemuna.service;

import com.dp.gestiondemuna.entity.Demuna_EstablecimientosEntity;
import com.dp.gestiondemuna.entity.UsuarioEntity;

public interface UsuarioService {

    public UsuarioEntity buscarUsuario(String username);

   public Demuna_EstablecimientosEntity buscarAutoridad(String username);
}


