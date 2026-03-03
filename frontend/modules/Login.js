import validator from "validator";

const divPai = document.querySelector(".messages");

export default class Login {
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
    const emailImput = el.querySelector('input[name="email"]');
    const passwordImput = el.querySelector('input[name="password"]');
    let erro = false;

    if (!validator.isEmail(emailImput.value)) {
      this.criaErroEmail("Email invalido");
      erro = true;
    } else {
      this.limpaErro(document.getElementById("erro-msg-email"));
    }

    if (passwordImput.value.length < 3 || passwordImput.value.length > 10) {
      this.criaErroSenha("A senha precisa conter de 3 a 10 caracteres");
      erro = true;
    } else {
      this.limpaErro(document.getElementById("erro-msg-senha"));
    }

    if (!erro) el.submit();
  }

  criaErroEmail(msg) {
    const erroDiv = document.createElement("p");
    erroDiv.innerHTML += msg;
    erroDiv.className = "alert alert-danger";
    erroDiv.id = "erro-msg-email";

    const apaga = document.getElementById("erro-msg-email");

    if (apaga) {
      apaga.remove();
    }

    divPai.appendChild(erroDiv);
  }

  criaErroSenha(msg) {
    const erroDiv = document.createElement("p");
    erroDiv.innerHTML += msg;
    erroDiv.className = "alert alert-danger";
    erroDiv.id = "erro-msg-senha";

    const apaga = document.getElementById("erro-msg-senha");

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
