import React, { Component } from "react";

export class Formulario extends Component {
  render() {
    return (
      <section>
        <form>
          <input
            type="text"
            placeholder="Título"
            className="form-cadastro_input"
          />
          <textarea
            placeholder="Escreva sua nota..."
            className="form-cadastro_input"
          ></textarea>
          <button className="form-cadastro_input form-cadastro_submit">
            Criar Nota
          </button>
        </form>
      </section>
    );
  }
}

export default Formulario;
