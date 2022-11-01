import React, { useRef, useState, useEffect } from 'react'
import { Row, Col, Form, Button, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
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




const Modificar = (props) => {
    let id = props.value;
    let url = 'https://node-myexpenses.vercel.app';

    const monto = useRef(null);
    const detalle = useRef(null);

    const [value, setValue] = useState('Otros');
    const handleChange = val => setValue(val);
    const [valuemon, setValuemon] = useState('UYU');
    const handleChangeMoneda = valm => setValuemon(valm);
    const [valuetipo, setValueTipo] = useState('egreso');
    const handleChangeTipo = valt => setValueTipo(valt);
    const [objeto, setObjeto] = useState([]);
    const [startDate, setDate] = useState('');

    const CargarMod = () => {

        fetch(`${url}/${id}`, {
        }).then(r => r.json())
            .then(res => {
                setObjeto(res);
                setValue(res.categoria);
                setValuemon(res.moneda);
                setValueTipo(res.tipo);
                setDate(new Date(res.fecha));
            })
    }


    const Datee = (e) => {
        setDate(e);
    }


    useEffect(() => {
        CargarMod();
    }, [])
    const modificar = () => {

        let modificacion = {
            detalle: detalle.current.value,
            categoria: value,
            moneda: valuemon,
            monto: monto.current.value,
            tipo: valuetipo,
            fecha: startDate
        };



        fetch(`${url}/${id}`, {
            method: "PUT",
            body: JSON.stringify(modificacion),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(r => r.json())
            .then(usuario => {
                window.location.reload(false);
            })
    }
    return (
        <div>
                <Form.Group >
                    <Form.Label>Detalle</Form.Label>
                    <Form.Control ref={detalle} required type="text" placeholder={objeto.detalle} />
                </Form.Group>
                <Form.Label>Seleccione una categoria</Form.Label>

                <Row>
                    <Col></Col>
                    <Col>
                        <ToggleButtonGroup
                            name="value"
                            type="radio"
                            value={value}
                            onChange={handleChange}
                        >
                            <ToggleButton className='btn-light' value='Propiedad'><HomeIcon /><span className='aclaracion'>Propiedad</span></ToggleButton>
                            <ToggleButton className='btn-light' value='Estudio'><MenuBookIcon /><span className='aclaracion'>Estudio</span></ToggleButton>
                            <ToggleButton className='btn-light' value='Comida'><FastfoodIcon /><span className='aclaracion'>Comida</span></ToggleButton>

                        </ToggleButtonGroup>
                        <ToggleButtonGroup
                            name="value"
                            type="radio"
                            value={value}
                            onChange={handleChange}
                        >
                            <ToggleButton className='btn-light' value='Turismo'><FlightTakeoffIcon /><span className='aclaracion'>Turismo</span></ToggleButton>
                            <ToggleButton className='btn-light' value='Noche'><Brightness3Icon /><span className='aclaracion'>Noche</span></ToggleButton>
                            <ToggleButton className='btn-light' value='Facturas'><CreditCardIcon /><span className='aclaracion'>Facturas</span></ToggleButton>
                        </ToggleButtonGroup>

                        <ToggleButtonGroup
                            name="value"
                            type="radio"
                            value={value}
                            onChange={handleChange}
                        >

                        </ToggleButtonGroup>

                        <ToggleButtonGroup
                            name="value"
                            type="radio"
                            value={value}
                            onChange={handleChange}
                        >
                            <ToggleButton className='btn-light' value='Salud'><LocalHospitalIcon /><span className='aclaracion'>Salud</span></ToggleButton>
                            <ToggleButton className='btn-light' value='Deporte'><SportsSoccerIcon /><span className='aclaracion'>Deporte</span></ToggleButton>
                            <ToggleButton className='btn-light' value='Transporte'><LocalTaxiIcon /><span className='aclaracion'>Transporte</span></ToggleButton>

                        </ToggleButtonGroup>
                        <ToggleButtonGroup
                            name="value"
                            type="radio"
                            value={value}
                            onChange={handleChange}
                        >
                            <ToggleButton className='btn-light' value='Ocio'><MusicNoteIcon /><span className='aclaracion'>Ocio.</span></ToggleButton>
                            <ToggleButton className='btn-light' value='Sueldo'><MonetizationOnIcon /><span className='aclaracion'>Sueldo</span></ToggleButton>
                            <ToggleButton className='btn-light' value='Otros'><ImportExportIcon /><span className='aclaracion'>Otros</span></ToggleButton>

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
                            name="value"
                            type="radio"
                            value={valuemon}
                            onChange={handleChangeMoneda}
                        >
                            <ToggleButton className='btn-light' value='UYU'><span className='aclaracion'>UYU</span></ToggleButton>
                            <ToggleButton className='btn-light' value='U$D'><span className='aclaracion'>U$D</span></ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Form.Group controlId="Monto">
                    <Form.Label>Monto</Form.Label>
                    <Form.Control ref={monto} required type='number' placeholder={objeto.monto} />

                </Form.Group>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <ToggleButtonGroup
                            name="value"
                            type="radio"
                            value={valuetipo}
                            onChange={handleChangeTipo}
                        >
                            <ToggleButton className='btn-light' value='egreso'><span className='aclaracion'>Egreso</span></ToggleButton>
                            <ToggleButton className='btn-light' value='ingreso'><span className='aclaracion'>Ingreso</span></ToggleButton>
                        </ToggleButtonGroup>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col >
                        {/* <input onChange={ver} ref={fecha} type='date'></input> */}
                        <Form.Group controlId="Monto">
                            <Form.Label>Fecha</Form.Label>
                            <DatePicker className='fecha' dateFormat="MMMM d, yyyy" selected={startDate} onChange={Datee} />
                        </Form.Group>
                    </Col>
                    <Col></Col>

                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Button className='enviar' variant="outline-primary" onClick={modificar} type="button" >
                            Modificar
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
    depositado: state.depositado
});


export default connect(mapStateToProps)(Modificar)
