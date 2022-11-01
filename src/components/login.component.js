import React, { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import '../style/estilos.css';
import { Container, Row, Col } from 'react-bootstrap'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));



const Login = (props) => {
    let url = 'https://node-myexpenses.vercel.app';

    const classes = useStyles();
    const usuario = useRef(null);
    const pass = useRef(null);
    const [inicio, setInicio] = useState(true);
    const [opens, setOpens] = React.useState(false);
    const [noencontrado, setNoen] = React.useState(false);
    const [usuarioa, setUsuarioa] = useState(false);
    const [passa, setPassa] = useState(false);
    let history = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpens(false);
        setNoen(false);
        setPassa(false);
        setUsuarioa(false);
    };


    const acceder = e => {

        let unUsuario = {
            user: usuario.current.value,
            pass: pass.current.value
        }

        fetch(`${url}/usuario`, {
            method: 'POST',
            body: JSON.stringify(unUsuario),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(r => r.json())
            .then(res => {
                console.log(res)
                if (unUsuario.user === '') {
                    setUsuarioa(true);
                } else if (unUsuario.pass === '') {
                    setPassa(true);
                } else if (res !== null) {
                    if (res.lenght === 0) {
                        setInicio(false);
                    }
                    else {
                        history(
                            {
                                pathname: "/dash",
                                state: res.nombre,
                            });
                        //console.log(res);
                    }
                } else {
                    setNoen(true);
                }
            })
        //history.push("/home");

    }
    const Notificacion = () => {
        if (props.location.state === 'true') {
            setOpens(true);
        }
    }
    useEffect(() => {
        /* Notificacion(); */
        console.log('asd')
    }, [])


    return (
        <div>
            <div className={classes.root}>
                <Snackbar open={usuarioa} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning">
                        Ingrese un nombre de usuario.
                    </Alert>
                </Snackbar>
                <Snackbar open={passa} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning">
                        Ingrese una password.
                    </Alert>
                </Snackbar>
                <Snackbar open={opens} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Usuario registrado correctamente!
                    </Alert>
                </Snackbar>
                <Snackbar open={noencontrado} autoHideDuration={3000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning">
                        Usuario o password incorrectos
                    </Alert>
                </Snackbar>
            </div>
            <Container className='center-block'>
                <Row>
                    <Col lg={3}></Col>
                    <Col>
                        <div className='innerr'>
                            <form>
                                <h3>Log in</h3>
                                <div className="form-group">
                                    <label>Usuario</label>
                                    <input type="text" ref={usuario} className="form-control" placeholder="Enter user" />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" ref={pass} className="form-control" placeholder="Enter password" />
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-dark btn-lg btn-block" onClick={acceder}>Sign in</button>
                                <p className="forgot-password text-right">
                                    <Link to='/sign-up'>Registrarse</Link>
                                </p>
                            </form>
                        </div>
                    </Col>
                    <Col lg={3}></Col>
                </Row>
            </Container>
        </div>
    );

}



export default Login;
