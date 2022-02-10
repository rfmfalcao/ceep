import "./App.css";
import React, { Component } from "react";
import { ListaDeNotas } from "./components/ListaDeNotas";
import { Formulario } from "./components/Formulardio";

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
