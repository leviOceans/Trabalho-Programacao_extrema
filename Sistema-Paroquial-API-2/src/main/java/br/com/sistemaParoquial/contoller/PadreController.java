package br.com.sistemaParoquial.contoller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sistemaParoquial.dto.PadreDTO;
import br.com.sistemaParoquial.exceptions.RequiredObjectIsNullException;
import br.com.sistemaParoquial.service.PadreService;

@RestController
@RequestMapping("/api/padre")
public class PadreController {
	
	@Autowired
	PadreService padreService;
	
	@PostMapping
	public ResponseEntity<?> salvarPessoa(@RequestBody PadreDTO dto) throws Exception{
		
		try {
			return ResponseEntity.ok(padreService.salvarPadre(dto));
		}catch(RequiredObjectIsNullException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
			
		}
	}
	
}
