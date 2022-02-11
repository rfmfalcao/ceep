import React, { Component } from "react";
import "./estilo.css"

class CardNota extends Component {
  state = {};
  render() {
    return (
      <section>
        <header className="card-nota">
          <h3>Título</h3>
        </header>
        <p>Escreva sua nota</p>
      </section>
    );
  }
}

export default CardNota;
