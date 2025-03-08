import ApiService from "./Api";

class PadreService extends ApiService{
    constructor(){
        super("/api/padre")
    }

    salvar(usuario){
        return this.post("", usuario) 
    }

    buscar(filtroPessoa){
        let url = `/`;

        return this.getParametros(url, {params: {
            nome: filtroPessoa.nome,
            cpf: filtroPessoa.cpf,
            dataInicio: filtroPessoa.dataInicioFormatada,
            dataFim: filtroPessoa.dataFimFormatada,
            page: filtroPessoa.pagina,
            userId: filtroPessoa.userId
        }});
    }

    findById(idPessoa){
        let url = `/${idPessoa}`;

        return this.get(url);
    }

    gerarRelatorio(pessoa){
        let url = `/sdpa/${pessoa.id}`;
        return this.gerarRelatorioGet(url);
    }

    gerarRelatorioGps(pessoa){
        let url = `/gps/${pessoa.id}`;
        return this.gerarRelatorioGet(url);
    }

    gerarRelatorioSeguro(pessoa){
        let url = `/seguroEspecial/${pessoa.id}`;
        return this.gerarRelatorioSeguroEspecial(url);
    }

    gerarRelatorioFlpp(pessoa){
        let url = `/flpp/${pessoa.id}`;
        return this.gerarRelatorioGet(url);
    }

    gerarRelatorioProcuracao(pessoa){
        let url = `/procuracao/${pessoa.id}`;
        return this.gerarRelatorioGet(url);
    }
    gerarRelatorioContrato(pessoa, tipo){
        let url = `/contrato/${pessoa.id}/${tipo}`;
        return this.gerarRelatorioGet(url);
    }

    gerarRelatorioNormativo(pessoa, tipo){
        let url = `/instrucaoNormativa/${pessoa.id}/${tipo}`;
        return this.gerarRelatorioGet(url);
    }

    gerarRelatorioNormativoEvanir(pessoa){
        let url = `/instrucaoNormativaEvanir/${pessoa.id}`;
        return this.gerarRelatorioGet(url);
    }

    gerarRelatorioContratoEvanir(pessoa){
        let url = `/contratoEvanir/${pessoa.id}`;
        return this.gerarRelatorioGet(url);
    }

    gerarRelatorioResidenciaRogo(pessoa){
        let url = `/declaracaoResidenciaRogo/${pessoa.id}`;
        return this.gerarRelatorioGet(url);
    }

    gerarRelatorioGeral(){
        let url = `/relatorioGeral`;
        return this.gerarRelatorioGet(url);
    }

}

export default PadreService