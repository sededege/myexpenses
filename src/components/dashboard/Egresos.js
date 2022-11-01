import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';




export const numberFormat = value =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "UYU"
  }).format(value);


const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export let numero;
function Egreso(props) {
  numero = 0;

  let ingreso = props.egresos;
  let ingresosfiltro = ingreso.filter(e => e.tipo === 'egreso');
  ingresosfiltro.forEach((e) =>
    numero = e.monto + numero,
  )



  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Gastos</Title>
      <Typography component="span" variant="h4">
        <p> {
          numberFormat(numero)
        }</p>
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>

    </React.Fragment>
  );
}



export default Egreso