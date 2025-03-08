package br.com.sistemaParoquial.service.impl;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.sistemaParoquial.dto.PadreDTO;
import br.com.sistemaParoquial.entities.Padre;
import br.com.sistemaParoquial.mapper.DozerMapper;
import br.com.sistemaParoquial.repository.PadreRepository;
import br.com.sistemaParoquial.service.PadreService;

@Service
public class PadreServiceImpl implements PadreService{
	
	@Autowired
	PadreRepository repository;

	@Override
	@Transactional
	public PadreDTO salvarPadre(PadreDTO padre) throws Exception {
		
		String msg = validacao(padre);
		
		if (!msg.isEmpty()) throw new Exception(msg);

		var pessoaConvert = DozerMapper.parseObject(padre, Padre.class);
		
		var dto =  DozerMapper.parseObject(repository.save(pessoaConvert), PadreDTO.class);
		
		return dto;
		
	}
	
	private String validacao(PadreDTO pessoa) {
		String msg = "";
		if (pessoa.getNome() == null  || pessoa.getNome().isEmpty()){
			msg += "Campo NOME obrigatório não foi preenchido \n";
		}
		if (pessoa.getCpf() == null || pessoa.getCpf().isEmpty()) {
			msg += "Campo CPF obrigatório não foi preenchido \n";
		}
		if (pessoa.getDataNascimento() == null) {
			msg += "Campo DATA NASCIMENTO obrigatório não foi preenchido \n";
		}
		if (pessoa.getCelular() == null || pessoa.getCelular().isEmpty()) {
			msg += "Campo CELULAR obrigatório não foi preenchido \n";
		} else {
			if(pessoa.getCelular() != null && pessoa.getCelular().matches("^\\+?[1-9]\\d{1,14}$")) {
				msg += "Celular inválido";
			}
		}
		return msg;
	}
	
}
