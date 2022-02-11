import React, { Component } from "react";
import CardNota from "../CardNota/CardNota";
import "./estilo.css"

export class ListaDeNotas extends Component {
  render() {
    return (
      <section>
        <ul className ="lista-notas">
          {Array.of("Trabalho", "Anotações", "Estudos").map((categoria, index) => {
            return (
              <li className = "lista-notas_item" key={index}>
                <div>{categoria}</div>
                <CardNota />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
