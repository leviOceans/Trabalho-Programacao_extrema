package br.com.sistemaParoquial.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sistemaParoquial.entities.Padre;

public interface PadreRepository  extends JpaRepository<Padre, Long>{
	
}
