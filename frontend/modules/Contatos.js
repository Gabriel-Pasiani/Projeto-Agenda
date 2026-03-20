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
    const nomeInput = el.querySelector('input[name="nome"]');
    const emailInput = el.querySelector('input[name="email"]');
    const telefoneInput = el.querySelector('input[name="telefone"]');

    let erro = false;

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();

    console.log("Telefone digitado:", telefone);
    console.log("Tamanho:", telefone.length);

    // valida nome
    if (!nome) {
      this.criaErroNome("Nome é obrigatório");
      erro = true;
    } else {
      this.limpaErro(document.getElementById("erro-msg-nome"));
    }

    // email ou telefone existe ?
    if (!email && !telefone) {
      this.criaErroTelEmail("Informe email ou telefone");
      erro = true;
    } else {
      this.limpaErro(document.getElementById("erro-msg-tel-email"));
    }

    // valida email
    if (email) {
      if (!validator.isEmail(email)) {
        this.criaErroEmail("Email inválido");
        erro = true;
      } else {
        this.limpaErro(document.getElementById("erro-msg-email"));
      }
    } else {
      this.limpaErro(document.getElementById("erro-msg-email"));
    }

    // valida telefone
    if (telefone) {
      if (telefone.length > 17) {
        this.criaErroTelefone("Telefone muito grande");
        erro = true;
      } else {
        this.limpaErro(document.getElementById("erro-msg-telefone"));
      }
    } else {
      this.limpaErro(document.getElementById("erro-msg-telefone"));
    }

    if (!erro) el.submit();
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

  criaErroEmail(msg) {
    const erroDiv = document.createElement("p");
    erroDiv.innerHTML += msg;
    erroDiv.className = "alert alert-danger";
    erroDiv.id = "erro-msg-email";

    const apaga = document.getElementById("erro-msg-email");
    this.criaDiv(apaga, erroDiv);
  }

  criaErroTelefone(msg) {
    const erroDiv = document.createElement("p");
    erroDiv.innerHTML += msg;
    erroDiv.className = "alert alert-danger";
    erroDiv.id = "erro-msg-telefone";

    const apaga = document.getElementById("erro-msg-telefone");
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
