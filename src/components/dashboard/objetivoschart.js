import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';





const Objetivos = (props) => {
    let categorias = props.categorias;
    let categoriasinfo = props.item;

    const cate = (e) => {

        if (e === 'Propiedad') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Propiedad');
            sueldo.forEach((e) =>
                numero = e.monto + numero,
            )
            return numero;
        }
        if (e === 'Noche') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Noche');
            sueldo.forEach((e) =>
                numero = e.monto + numero,
            )
            return numero;
        }
        if (e === 'Estudio') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Estudio');
            sueldo.forEach((e) =>
                numero = e.monto + numero,
            )
            return numero;
        }
        if (e === 'Facturas') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Facturas');
            sueldo.forEach((e) =>
                numero = e.monto + numero,

            )
            return numero;
        }
        if (e === 'Turismo') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Turismo');
            sueldo.forEach((e) =>
                numero = e.monto + numero,

            )
            return numero;
        }
        if (e === 'Salud') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Salud');
            sueldo.forEach((e) =>
                numero = e.monto + numero,

            )
            return numero;
        }
        if (e === 'Deporte') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Deporte');
            sueldo.forEach((e) =>
                numero = e.monto + numero,

            )
            return numero;
        }
        if (e === 'Ocio') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Ocio');
            sueldo.forEach((e) =>
                numero = e.monto + numero,

            )
            return numero;
        }

        if (e === 'Comida') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Comida');
            sueldo.forEach((e) =>
                numero = e.monto + numero,

            )
            return numero;
        }
        if (e === 'Transporte') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Transporte');
            sueldo.forEach((e) =>
                numero = e.monto + numero,

            )
            return numero;
        }
        if (e === 'Otros') {
            let numero = 0;
            let sueldo = categoriasinfo.filter(e => e.categoria === 'Otros');
            sueldo.forEach((e) =>
                numero = e.monto + numero,

            )
            return numero;
        }

    }


    let prueba = categorias.map(({ categoria, objetivo }) =>
        ({
            name: categoria, Objetivo: objetivo, Gastos: cate(categoria), amt: 2400,
        })
    );
    let datafiltred = prueba.filter(e => e.Gastos > 0)
    const data = datafiltred;



    return (
        <ResponsiveContainer className='container1'>
            <BarChart
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Gastos" fill="#8884d8" />
                <Bar dataKey="Objetivo" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>

    );

}




export default Objetivos;