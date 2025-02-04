package com.dp.gestiondemuna.repository;

import com.dp.gestiondemuna.entity.Matm_personaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
@Transactional(readOnly = true)
public interface Matm_persona_Repository extends JpaRepository<Matm_personaEntity, String> {
}
