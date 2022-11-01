import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import ModificarObjetivos from '../ModificarObjetivos';


export default function ObjetivosModal(props) {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles(theme => ({

        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }));

    return (
        <div>
            <ListItem onClick={handleClickOpen} button>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Objetivos" />
            </ListItem>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Establecer objetivos"}</DialogTitle>
                <DialogContent>
                    <ModificarObjetivos />
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
