import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';




const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

let numeroing;
let numeroegr;

export const numberFormat = value =>
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "UYU"
}).format(value);
function Balance(props) {

  let ingreso = props.balance;
//console.log(ingreso);
  
    numeroing = 0;
  let ingresosfiltro = ingreso.filter(e => e.tipo === 'ingreso');
  ingresosfiltro.map((monto) =>
   numeroing= monto.monto + numeroing
  )



  
    numeroegr = 0;
    //console.log(e.monto.monto);
    let egresosfiltro = ingreso.filter(e => e.tipo === 'egreso');
    egresosfiltro.map((monto) =>
    numeroegr= monto.monto + numeroegr,
    )
   

  

 

  

let balance = 0;
balance = numeroing - numeroegr;



  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="span" variant="h4">
      <p> {
        numberFormat(balance)
        }</p>      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
      </Typography>
    </React.Fragment>
  );
}



export default Balance