import Alert from 'react-bootstrap/Alert';

const Alerta = ({ alert }) => {
    return (
        <>
            <Alert variant={alert.color}>{alert.message}</Alert>
        </>
    )
}

export default Alerta;
