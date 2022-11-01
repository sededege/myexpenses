import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";

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




const SignUp = () => {
    let url = 'https://node-myexpenses.vercel.app';

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [nombrea, setNombrea] = useState(false);
    const [apellidoa, setApellidoa] = useState(false);
    const [usuarioa, setUsuarioa] = useState(false);
    const [passa, setPassa] = useState(false);



    const nombre = useRef(null);
    const apellido = useRef(null);
    const usuario = useRef(null);
    const password = useRef(null);
    let history = useNavigate();

    const agregarusuario = e => {
        let unUsuario = {
            nombre: nombre.current.value,
            apellido: apellido.current.value,
            usuario: usuario.current.value,
            password: password.current.value,

        };




        fetch(`${url}/usuariorepetido`, {
            method: 'POST',
            body: JSON.stringify(unUsuario),
            headers: {
                'Content-type': 'application/json'
            }
        }).then(r => r.json())
            .then(res => {
                if (res === null) {
                    if (unUsuario.nombre === '') {
                        setNombrea(true)
                    } else if (unUsuario.apellido === '') {
                        setApellidoa(true)
                    }
                    else if (unUsuario.usuario === '') {
                        setUsuarioa(true)
                    } else if (unUsuario.password === '') {
                        setPassa(true)
                    } else {
                        fetch(`${url}/insertarfijo`, {
                            method: "POST",
                            body: JSON.stringify(unUsuario),
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }).then(r => r.json())
                            .then(res => {

                                //setOpens(true);
                                history.push(
                                    {
                                        pathname: "/",
                                        state: 'true',
                                    });


                            });
                    }
                } else {
                    setOpen(true);
                }
            }
            );

    };



    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        setNombrea(false);
        setPassa(false);
        setApellidoa(false);
        setUsuarioa(false);
    };

    return (

        <div >
            <div className={classes.root}>

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error">
                        Usuario ya registrado en la base de datos.
                          </Alert>
                </Snackbar>
                <Snackbar open={nombrea} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning">
                        Ingrese un nombre.
                          </Alert>
                </Snackbar>
                <Snackbar open={apellidoa} autoHideDuration={2000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="warning">
                        Ingrese un apellido.
                          </Alert>
                </Snackbar>
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

            </div>
            <Container>
                <Row>
                    <Col lg={3}></Col>
                    <Col>
                        <form className='innerr'>
                            <h3>Register</h3>
                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" ref={nombre} className="form-control" placeholder="First name" required />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" ref={apellido} className="form-control" placeholder="Last name" required />
                            </div>

                            <div className="form-group">
                                <label>Usuario</label>
                                <input type="text" ref={usuario} className="form-control" placeholder="Enter user" required />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" ref={password} className="form-control" placeholder="Enter password" required />
                            </div>
                            <button type="button" onClick={agregarusuario} className="btn btn-dark btn-lg btn-block" >Register</button>
                            <p className="forgot-password text-right">
                                        <Link to='/sign-in'>Login</Link>
                                    </p>
                        </form>
                    </Col>
                    <Col lg={3}></Col>

                </Row>
            </Container>

        </div>
    );
}



export default SignUp;
