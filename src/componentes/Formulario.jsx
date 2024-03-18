import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Formulario = ({ colaboradores, setColaboradores, setAlert }) => {
    const [nuevoColaborador, setNuevoColaborador] = useState({
        id: "",
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: ""
    });

    const cambioEnvioFormulario = (e) => {
        e.preventDefault();
        const colaborador_id = {...nuevoColaborador, id: Date.now()}

        if(
            colaborador_id.nombre.trim() == ''  ||
            colaborador_id.correo.trim() == ''  ||
            colaborador_id.edad.trim() == ''    ||
            colaborador_id.cargo.trim() == ''   ||
            colaborador_id.telefono.trim() == ''
         ){
            setAlert({message: "¡Completa todos los campos!", color: "danger"})
        }else{
            setColaboradores([...colaboradores, colaborador_id]);
            setAlert({message: "¡Usuario agregado con éxito!", color: "success"})
        }

    }

    const cambioNuevoColaborador = (e) => {
        setNuevoColaborador({
            ...nuevoColaborador,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <Form onSubmit={cambioEnvioFormulario}>
                <h5>Agrega colaborador</h5>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Control
                        type="text"
                        placeholder="Nombre del colaborador"
                        name="nombre"
                        onChange={cambioNuevoColaborador}
                        value={nuevoColaborador.nombre}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Email del colaborador"
                        name="correo"
                        onChange={cambioNuevoColaborador}
                        value={nuevoColaborador.correo}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEdad">
                    <Form.Control
                        type="number"
                        placeholder="Edad del colaborador"
                        name="edad"
                        onChange={cambioNuevoColaborador}
                        value={nuevoColaborador.edad}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCargo">
                    <Form.Control
                        type="text"
                        placeholder="Cargo del colaborador"
                        name="cargo"
                        onChange={cambioNuevoColaborador}
                        value={nuevoColaborador.cargo}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTelefono">
                    <Form.Control
                        type="number"
                        placeholder="Teléfono del colaborador"
                        name="telefono"
                        onChange={cambioNuevoColaborador}
                        value={nuevoColaborador.telefono}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Agregar colaborador
                </Button>
            </Form>
        </>
    );
}

export default Formulario;
