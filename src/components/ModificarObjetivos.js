import React from 'react'
import { connect } from 'react-redux';
import {  Table } from 'react-bootstrap'
import Modalmodi from './Modalmodiobjetivos';

const ModificarObjetivos = (props) => {
  
   
    let objeto = props.categorias
    
    return (
        <div>
          
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Categoria</th>
                        <th>Objetivo</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        objeto.map((obj, i) => (
                            <tr key={i}>
                                <td>{obj.categoria}</td>
                                <td>{obj.objetivo}</td>
                                <td><Modalmodi value={obj._id}/></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    categorias: state.categorias,
});


export default connect(mapStateToProps)(ModificarObjetivos)
