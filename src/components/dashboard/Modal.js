import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Ingresar from '../Ingresar'

export default function ResponsiveDialog(props) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 /*  const useStyles = makeStyles((a) => ({
    
    fab: {
      margin: a.spacing(1),
      position: 'absolute',
      bottom: 10,
      right: 'calc(50vw-28px)',
    },
    extendedIcon: {
      marginRight: a.spacing(1),
    },
  }));
  
  const classes = useStyles();
 */
  /* const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
      position: 'absolute',
      bottom: 10,
      right: 'calc( 50vw - 28px )'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  })); */

  return (
    <div>


      <Fab color="primary" onClick={handleClickOpen} aria-label="add" style={{position: 'absolute', bottom: 10,  right: 'calc( 50vw - 28px )'}} >
        <AddIcon />
      </Fab>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"Ingrese el egreso/ingreso deseado"}</DialogTitle>
        <DialogContent>
          <Ingresar />
        </DialogContent>
        <DialogActions>
          <Button className='cancelar' autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
