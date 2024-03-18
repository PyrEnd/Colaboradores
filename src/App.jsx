import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import { BaseColaboradores } from './assets/BaseColaboradores.js';
import Listado from './componentes/Listado.jsx';
import Formulario from './componentes/Formulario.jsx';
import Alerta from './componentes/Alerta.jsx';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Buscador from './componentes/Buscador.jsx';

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState({ message: "", color: "" });
  const [search, setSearch] = useState("");
  const filteredColaboradores = colaboradores.filter((colaborador) => {
    if (
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return colaborador;
    }
  });

  return <>
    <Container>
      <Row>
        <Col md={6} >
          <Buscador search={search} setSearch={setSearch} />
        </Col>
      </Row>
      <Row>
      <Col md={9}>
            <Listado colaboradores={filteredColaboradores} />
          </Col>

        <Col md={3} >
          <Formulario setAlert={setAlert} colaboradores={colaboradores} setColaboradores={setColaboradores} />
          {
            alert.message !== "" &&
            <Alerta alert={alert} />
          }

        </Col>

      </Row>
    </Container>
  </>;
}

export default App;
