package br.com.sistemaParoquial.dto;

import java.io.Serializable;
import java.time.LocalDate;

import org.springframework.hateoas.RepresentationModel;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PadreDTO extends RepresentationModel<PadreDTO> implements Serializable{

	private static final long serialVersionUID = 4827833935403216028L;
	
	private String nome;
	
	private String cpf;
	
	private LocalDate dataNascimento;
	
	private String celular;
	
	private String email;
	
}
