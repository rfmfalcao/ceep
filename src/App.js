import "./App.css";
import React, { Component } from "react";
import { ListaDeNotas } from "./components/ListaDeNotas/ListaDeNotas";
import { Formulario } from "./Formulario/Formulario";

class App extends Component {
  render() {
    return (
      <section>
        <Formulario />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
