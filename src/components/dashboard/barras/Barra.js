import React from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip } from 'recharts';

const Barra = (props) => {
	let categorias = props.categorias;
	let categoriasinfo = props.item;

	const gasto = (e) => {
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

	const color = (e) => {
		if (e === 'Propiedad') {
			return '#8884d8';
		}
		if (e === 'Noche') {

			return '#83a6ed'
		}
		if (e === 'Estudio') {

			return '#82ca9d';
		}
		if (e === 'Facturas') {

			return "#8dd1e1";
		}
		if (e === 'Turismo') {

			return "#a4de6c";
		}
		if (e === 'Salud') {

			return "#d0ed57";
		}
		if (e === 'Deporte') {

			return "#ffc658";
		}
		if (e === 'Ocio') {

			return '#b285d2';
		}

		if (e === 'Comida') {

			return '#f67f6b';
		}
		if (e === 'Transporte') {

			return '#f66b82';
		}
		if (e === 'Otros') {

			return '#666';
		}

	}
	let prueba = categorias.map(({ categoria }) =>
		({
			"name": categoria, "$": gasto(categoria), "fill": color(categoria),
		})
	);
	let datafiltred = prueba.filter(e => e.$ > 0)
	const data = datafiltred;

	{
		return (
			<div>
				<RadialBarChart
					width={500}
					height={250}
					innerRadius="10%"
					outerRadius="100%"
					data={data}
					startAngle={360}
					endAngle={0}
				>
					<RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='$' />
					<Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
					<Tooltip />
				</RadialBarChart>
			</div>
		);
	}
}

export default Barra;
