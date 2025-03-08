package br.com.sistemaParoquial.entities;

import java.time.LocalDate;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="padre", schema = "paroquial")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Padre {
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable = false)
	private String nome;
	
	@Column(nullable = false)
	private String cpf;
	
	@Column(name="data_nascimento", nullable = false)
	private LocalDate dataNascimento;
	
	@Column(nullable = false)
	private String celular;
	
	@Column(nullable = true)
	private String email;
	
}
