import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(fecha, monto) {
  return { fecha, monto };
}


const fechas = (e) => {
  let date = new Date(e);
  let mes = date.getMonth();
  
  return (
   mes
  )
}

const dia = (e) => {
  let date = new Date(e);
  let dia = date.getDate();

  
  return (
   dia
  )
}

function Chart(props) {
  let datos = props.fechas;
  let date2 = new Date();
  let mesnow = date2.getMonth();
  const prueba =  datos.filter(e => fechas(e.fecha) === mesnow);
const pruebafilter = prueba.filter(e => e.tipo === 'egreso');
  
  //console.log(fechas(datos.fecha) );

 const data = pruebafilter.map(({  monto, fecha}) =>
  createData( dia(fecha), monto)
)  


  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Tablas de egresos/Dias</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="fecha" stroke={theme.palette.text.secondary}>
          </XAxis>
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Egresos($)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="monto" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}


export default Chart