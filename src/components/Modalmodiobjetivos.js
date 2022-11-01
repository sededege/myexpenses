import React, { useState, useRef, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import { Form, Button } from 'react-bootstrap'


export default function Modalmodi(props) {
  let url = 'https://node-myexpenses.vercel.app';

  let id = props.value;
  const propiedad = useRef(null);
  const [objetivo, setObjetivo] = useState('');
  const [cat, setCat] = useState('');

  const CargarMod = () => {
    fetch(`${url}/obj/${id}`, {
    }).then(r => r.json())
      .then(res => {
        setObjetivo(res.objetivo);
        setCat(res.categoria)
      })
  }
  const modificar = () => {

    let modificacion = {
      objetivo: propiedad.current.value,
    };



    // console.log(idboton);
    fetch(`${url}/obj/${id}`, {
      method: "PUT",
      body: JSON.stringify(modificacion),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(r => r.json())
      .then(usuario => {

      })
  }

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };


  useEffect(() => {
    CargarMod();
  },)
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>

      <IconButton
        className='remove-btn'
        color='inherit'
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Modificar"}</DialogTitle>
        <DialogContent>
          <Form.Group controlId="Propiedad">
            <Form.Label>{cat}</Form.Label>
            <Form.Control ref={propiedad} onChange={modificar} type='number' placeholder={objetivo} />
          </Form.Group>
        </DialogContent>
        <DialogActions>
          <Button className='cancelar' autoFocus onClick={handleClose} color="primary">
            Aceptar
          </Button>
          {/*  <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
