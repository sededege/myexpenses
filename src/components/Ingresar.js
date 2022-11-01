import React, { useRef, useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import HomeIcon from '@material-ui/icons/Home';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Dashboard from './dashboard/Dashboard';
import { Link, useNavigate } from "react-router-dom";

const Ingresar = (props) => {
    let url = 'https://node-myexpenses.vercel.app';
    let history = useNavigate();





    const monto = useRef(null);
    const detalle = useRef(null);

    const [value, setValue] = useState('Otros');
    const handleChange = val => setValue(val);

    const [valuemon, setValuemon] = useState('UYU');
    const handleChangeMoneda = valm => setValuemon(valm);
    const [valuetipo, setValueTipo] = useState('egreso');
    const handleChangeTipo = valt => setValueTipo(valt);
    const [startDate, setDate] = useState(new Date());




    const Datee = (e) => {
        setDate(e);
        //setDate(e)
    }





    const ingresar = () => {

        let unDato = {
            detalle: detalle.current.value,
            categoria: value,
            moneda: valuemon,
            monto: monto.current.value,
            tipo: valuetipo,
            fecha: startDate
        };
        fetch(`${url}/insertarDato`, {
            method: "POST",
            body: JSON.stringify(unDato),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(usuario => {
                /*  window.location.reload(false); */
                fetch(`${url}/datos`, {
                }).then(r => r.json())
                    .then(res => {
                        props.dispatch({
                            type: 'GET_ITEMS',
                            payload: res
                        })
                    })


            })
    




    }
    return (
        <div>
            <Form.Group >
                <Form.Label>Detalle</Form.Label>
                <Form.Control ref={detalle} required type="text" placeholder="Ingresar detalle" />
            </Form.Group>
            <Form.Label>Seleccione una categoria</Form.Label>

            <Row>
                <Col></Col>
                <Col>


                    <ToggleButtonGroup
                        type="radio" name="caract" value={value} onChange={handleChange}
                    >
                        <ToggleButton id="tbg-radio-1" className='btn-light' value='Propiedad'><HomeIcon /><span className='aclaracion'>Propiedad</span></ToggleButton>
                        <ToggleButton id="tbg-radio-2" className='btn-light' value='Estudio'><MenuBookIcon /><span className='aclaracion'>Estudio</span></ToggleButton>
                        <ToggleButton id="tbg-radio-3" className='btn-light' value='Comida'><FastfoodIcon /><span className='aclaracion'>Comida</span></ToggleButton>

                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        name="caract"
                        type="radio"
                        value={value}
                        onChange={handleChange}
                    >
                        <ToggleButton id="tbg-radio-4" className='btn-light' value='Turismo'><FlightTakeoffIcon /><span className='aclaracion'>Turismo</span></ToggleButton>
                        <ToggleButton id="tbg-radio-5" className='btn-light' value='Noche'><Brightness3Icon /><span className='aclaracion'>Noche</span></ToggleButton>
                        <ToggleButton id="tbg-radio-6" className='btn-light' value='Facturas'><CreditCardIcon /><span className='aclaracion'>Facturas</span></ToggleButton>
                    </ToggleButtonGroup>


                    <ToggleButtonGroup
                        name="caract"
                        type="radio"
                        value={value}
                        onChange={handleChange}
                    >
                        <ToggleButton id="tbg-radio-7" className='btn-light' value='Salud'><LocalHospitalIcon /><span className='aclaracion'>Salud</span></ToggleButton>
                        <ToggleButton id="tbg-radio-8" className='btn-light' value='Deporte'><SportsSoccerIcon /><span className='aclaracion'>Deporte</span></ToggleButton>
                        <ToggleButton id="tbg-radio-9" className='btn-light' value='Transporte'><LocalTaxiIcon /><span className='aclaracion'>Transporte</span></ToggleButton>

                    </ToggleButtonGroup>
                    <ToggleButtonGroup
                        name="caract"
                        type="radio"
                        value={value}
                        onChange={handleChange}
                    >
                        <ToggleButton id="tbg-radio-10" className='btn-light' value='Ocio'><MusicNoteIcon /><span className='aclaracion'>Ocio.</span></ToggleButton>
                        <ToggleButton id="tbg-radio-11" className='btn-light' value='Sueldo'><MonetizationOnIcon /><span className='aclaracion'>Sueldo</span></ToggleButton>
                        <ToggleButton id="tbg-radio-12" className='btn-light' value='Otros'><ImportExportIcon /><span className='aclaracion'>Otros</span></ToggleButton>

                    </ToggleButtonGroup>
                </Col>
                <Col></Col>
            </Row>


            <Form.Group>
                <Form.Label>Moneda</Form.Label>
            </Form.Group>
            <Row>
                <Col>
                </Col>
                <Col>
                    <ToggleButtonGroup
                        name="moneda"
                        type="radio"
                        value={valuemon}
                        onChange={handleChangeMoneda}
                    >

                        <ToggleButton id="tbg-radio-13" className='btn-light' value='UYU'><span className='aclaracion'>UYU</span></ToggleButton>
                        <ToggleButton id="tbg-radio-14" className='btn-light' value='U$D'><span className='aclaracion'>U$D</span></ToggleButton>
                    </ToggleButtonGroup>
                </Col>
                <Col>
                </Col>
            </Row>

            <Form.Label>Tipo</Form.Label>

            <Row>
                <Col>
                </Col>
                <Col>
                    <ToggleButtonGroup
                        name="monto"
                        type="radio"
                        value={valuetipo}
                        onChange={handleChangeTipo}
                    >
                        <ToggleButton id="tbg-radio-15" className='btn-light' value='egreso'><span className='aclaracion'>Egreso</span></ToggleButton>
                        <ToggleButton id="tbg-radio-16" className='btn-light' value='ingreso'><span className='aclaracion'>Ingreso</span></ToggleButton>
                    </ToggleButtonGroup>
                </Col>
                <Col>
                </Col>
            </Row>
            <Form.Label>Fecha</Form.Label>
            <Row>
                <Col></Col>
                <Col >
                    {/* <input onChange={ver} ref={fecha} type='date'></input> */}
                    <Form.Group controlId="Monto">
                        <DatePicker className='fecha' dateFormat="MMMM d, yyyy" selected={startDate} onChange={Datee} />
                    </Form.Group>
                </Col>
                <Col></Col>

            </Row>
            <Form.Group controlId="Monto">
                <Form.Label>Monto</Form.Label>
                <Form.Control style={{ width: '50%', margin: '0 auto' }} ref={monto} required type='number' placeholder="Monto" />
            </Form.Group>
            <Row>
                <Col>
                </Col>
                <Col>
                    <Button className='enviar' onClick={ingresar} variant="outline-primary" type="submit">
                        Ingresar
                    </Button>
                </Col>
                <Col>
                </Col>
            </Row>



        </div>
    )
}

const mapStateToProps = (state) => ({
    item: state.items,
    depositado: state.depositado,
    categorias: state.categorias,
});


export default connect(mapStateToProps)(Ingresar)
