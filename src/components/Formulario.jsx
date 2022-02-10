import React, { Component } from "react";

export class Formulario extends Component {
  render() {
    return (
      <section>
        <form>
          <input type="text" placeholder="Título" />
          <textarea placeholder="Escreva sua nota..."></textarea>
          <button>Criar Nota</button>
        </form>
      </section>
    );
  }
}

export default Formulario;
