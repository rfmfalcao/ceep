import React, { Component } from "react";
import CardNota from "./CardNota";

export class ListaDeNotas extends Component {
  render() {
    return (
      <section>
        <ul>
          <li>
            <CardNota />
          </li>
        </ul>
        <ul>
          <li>
            <CardNota />
          </li>
        </ul>
        <ul>
          <li>
            <CardNota />
          </li>
        </ul>
      </section>
    );
  }
}

export default ListaDeNotas;
