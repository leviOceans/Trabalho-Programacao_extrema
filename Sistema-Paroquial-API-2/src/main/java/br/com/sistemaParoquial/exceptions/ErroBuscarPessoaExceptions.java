package br.com.sistemaParoquial.exceptions;

public class ErroBuscarPessoaExceptions extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ErroBuscarPessoaExceptions() {
		super("Nenhuma pessoa encontrada para os parâmetros informados!");
	}	
	
	public ErroBuscarPessoaExceptions(String ex) {
		super(ex);
	}
	
}
