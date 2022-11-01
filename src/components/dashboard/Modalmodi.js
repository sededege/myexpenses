import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Modificar from '../Modificar'
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";


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
          <Modificar value={props.value} />
        </DialogContent>
        <DialogActions>
          <Button className='cancelar' autoFocus onClick={handleClose} color="primary">
            Cancelar
          </Button>
          {/*  <Button onClick={handleClose} color="primary" autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
