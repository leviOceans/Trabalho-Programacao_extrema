package br.com.sistemaParoquial.exceptions;

public class ErroSalvarArquivoExceptions extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ErroSalvarArquivoExceptions() {
		super("Path não encontrado!");
	}	
	
	public ErroSalvarArquivoExceptions(String ex) {
		super(ex);
	}
	
}
