import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';



export const numberFormat = value =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "UYU"
  }).format(value);




function Deposits(props) {
  
  let ingreso = props.depositos;
  let ingresosfiltro = ingreso.filter(e => e.tipo === 'ingreso');
  let suma = 0;
  ingresosfiltro.forEach((monto) =>
    suma = monto.monto + suma
  )

  return (
    <React.Fragment>
      <Title>Ingresos</Title>
      <Typography component="span" variant="h4">
                <p> {
          numberFormat(suma)
        }</p>
      </Typography>
      {/* <Typography color="textSecondary" className={classes.depositContext}>
        -10% que el mes anterior.
      </Typography> */}
    </React.Fragment>
  );
}



export default Deposits