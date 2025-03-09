import { InputMask } from "primereact/inputmask";
import { Toast } from "primereact/toast";
import React, { useRef, useState } from "react";
import PadreService from "../../Services/padreService";
import Card1 from "../Card";
import FormGroup from "../FormGroup";
import * as S from "./style";

function FormularioPadre() {

  const [nome, setNome] = useState();
  const [cpf, setCpf] = useState();
  const [dataNascimentoOriginal, setDataNascimentoOriginal] = useState();
  const [email, setEmail] = useState();
  const [celular, setCelular] = useState();

  const toast = useRef(null);

  const service = new PadreService();
  
  function limpar(){
    setNome("");
    setCpf(null);
    setEmail("");
    setCelular(null);
    setDataNascimentoOriginal(null);
  }

  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); 

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    function calcularDigito(cpfParcial) {
        let soma = 0;
        let peso = cpfParcial.length + 1;

        for (let num of cpfParcial) {
            soma += parseInt(num) * peso--;
        }

        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    }

    let digito1 = calcularDigito(cpf.slice(0, 9));
    let digito2 = calcularDigito(cpf.slice(0, 9) + digito1);

    return cpf === cpf.slice(0, 9) + digito1 + digito2;
}

  async function salvar(e) {
    e.preventDefault();

    if(!validarCPF(cpf)){
      toast.current.show({
        severity: "warn",
        summary: "Alerta!",
        detail: "CPF inválido!",
        life: 3000,
      });

      return;
    }

    let dataNascimento = null;

    if (dataNascimentoOriginal) {
      if (!dataNascimentoOriginal.includes("_")) {
        dataNascimento = convertData(dataNascimentoOriginal);
      }
    }

    const data = {
      nome,
      cpf,
      dataNascimento,
      email,
      celular,
    };

    await service
      .salvar(data)
      .then((response) => {

        toast.current.show({
          severity: "info",
          summary: "Sucesso!",
          detail: "Registro salvo com sucesso.",
          life: 3000,
        });

        //limpar();
      })
      .catch((error) => {
        toast.current.show({
          severity: "error",
          summary: "Erro",
          detail: error.response.data.message,
          life: 5000,
        });
      })
  }

  function convertData(data) {
    var dia = data.split("-")[0];
    var mes = data.split("-")[1];
    var ano = data.split("-")[2];

    return ano + "-" + ("0" + mes).slice(-2) + "-" + ("0" + dia).slice(-2);
  }

  return (
    <S.FormularioPadreStyle>
      <form onSubmit={salvar}>
        <Card1 title={"Cadastro de Padre"}>
          <Toast ref={toast} />
          <div className="row">
            {/*método que será chamado sempre que o valor de redirect for mudado
                      o navigate séra chamado e encaminhado para a rota passada. */}
            {/* {this.state.redirect && <Navigate to="/login" replace={true} />} */}
            <div className="">
              <div className="bs-component">
                <div className="row">
                  <div className="col-sm-8">
                    <FormGroup label="Nome: *" htmlFor="inputNome">
                      <input
                        type="text"
                        id="inputNome"
                        name="nome"
                        className="form-control"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </FormGroup>
                  </div>
                  <div className="col-sm-4">
                    <FormGroup
                      label="CPF: *"
                      htmlFor="inputCpf"
                      className="input-cpf"
                    >
                      <InputMask
                        className="form-control"
                        id="inputCpf"
                        mask="999.999.999-99"
                        value={cpf}
                        placeholder="999.999.999-99"
                        autoClear={false}
                        onChange={(e) => setCpf(e.value)}
                      ></InputMask>
                    </FormGroup>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <FormGroup
                      label="Data de Nascimento: *"
                      htmlFor="inputDataNascimento"
                    >
                      <InputMask
                        className="form-control"
                        id="inputDataNascimento"
                        mask="99-99-9999"
                        value={dataNascimentoOriginal}
                        placeholder="99/99/9999"
                        autoClear={false}
                        onChange={(e) => setDataNascimentoOriginal(e.value)}
                      ></InputMask>
                    </FormGroup>
                  </div>
                  <div className="col-sm-6">
                    <FormGroup label="Celular: *" htmlFor="inputCelular">
                      <InputMask
                        className="form-control"
                        id="inputCelular"
                        mask="(99) 99999-9999"
                        value={celular}
                        autoClear={false}
                        placeholder="(99) 99999-9999"
                        onChange={(e) => setCelular(e.value)}
                      ></InputMask>
                    </FormGroup>
                  </div>
                </div>

                <div className="row">
                 

                  <div className="col-sm-12">
                    <FormGroup label="Email: " htmlFor="inputEmail">
                      <input
                        type="text"
                        id="inputEmail"
                        name="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                  </div>
                </div>
      
                <button
                  onClick={salvar}
                  type="submit"
                  className="btn btn-success"
                >
                  <i className="pi pi-save" /> Salvar
                </button>
                {/* <Link to="/login"> */}
                <button
                  type="button"
                  className="btn btn-danger"
                
                >
                  <i className="pi pi-times" /> Cancelar
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </Card1>
      </form>
    </S.FormularioPadreStyle>
  );
}

export default FormularioPadre;
