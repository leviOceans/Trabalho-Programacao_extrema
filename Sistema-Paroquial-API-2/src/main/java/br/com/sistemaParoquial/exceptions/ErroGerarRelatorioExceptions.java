package br.com.sistemaParoquial.exceptions;

public class ErroGerarRelatorioExceptions extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ErroGerarRelatorioExceptions() {
		super("Ocorreu algum erro na geração do relatório!");
	}	
	
	public ErroGerarRelatorioExceptions(String ex) {
		super(ex);
	}
	
}
