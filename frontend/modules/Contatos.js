import validator from "validator";

const divPai = document.querySelector(".messages");

export default class Contatos {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;
    const nomeImput = el.querySelector('input[name="nome"]');
    const emailImput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');
    let erro = false;

    if (emailImput.value.length <= 0 && telefoneInput.value.length <= 0) {
      this.criaErroTelEmail(
        "Pelo menos um campo deve ser enviado: Email ou Telefone",
      );
      erro = true;
    } else {
      this.limpaErro(document.getElementById("erro-msg-tel-email"));
    }

    if (telefoneInput.value.length <= 0) {
      if (
        emailImput.value.length <= 0 &&
        !validator.isEmail(emailImput.value)
      ) {
        this.criaErroEmail("Email invalido");
        erro = true;
      } else {
        this.limpaErro(document.getElementById("erro-msg-email"));
      }
    } else {
      this.limpaErro(document.getElementById("erro-msg-email"));
    }

    if (nomeImput.value.length <= 0) {
      this.criaErroNome("Nome é um campo obrigatorio");
      erro = true;
    } else {
      this.limpaErro(document.getElementById("erro-msg-nome"));
    }
    if (!erro) el.submit();
  }

  criaErroEmail(msg) {
    const erroDiv = document.createElement("p");
    erroDiv.innerHTML += msg;
    erroDiv.className = "alert alert-danger";
    erroDiv.id = "erro-msg-email";

    const apaga = document.getElementById("erro-msg-email");
    this.criaDiv(apaga, erroDiv);
  }

  criaErroNome(msg) {
    const erroDiv = document.createElement("p");
    erroDiv.innerHTML += msg;
    erroDiv.className = "alert alert-danger";
    erroDiv.id = "erro-msg-nome";

    const apaga = document.getElementById("erro-msg-nome");
    this.criaDiv(apaga, erroDiv);
  }

  criaErroTelEmail(msg) {
    const erroDiv = document.createElement("p");
    erroDiv.innerHTML += msg;
    erroDiv.className = "alert alert-danger";
    erroDiv.id = "erro-msg-tel-email";

    const apaga = document.getElementById("erro-msg-tel-email");
    this.criaDiv(apaga, erroDiv);
  }

  criaDiv(apaga, erroDiv) {
    if (apaga) {
      apaga.remove();
    }
    divPai.appendChild(erroDiv);
  }

  limpaErro(id) {
    if (id) {
      id.remove();
    }
  }
}
