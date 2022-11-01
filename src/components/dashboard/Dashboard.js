import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Egreso from './Egresos'
import Balance from './Balance'
import { connect } from 'react-redux';
import ResponsiveDialog from './Modal'
import Title from './Title';
import PersonIcon from '@material-ui/icons/Person';
import Objetivos from './objetivoschart'
import DatePicker from "react-datepicker";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EnhancedTable from './Datagrid'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ObjetivosModal from './objetivosmodal';
import Barra from './barras/Barra'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        MyExpenses by Sebastián González
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fab: {
    margin: theme.spacing(1),
    position: 'absolute',
    bottom: 10,
    right: 'calc( 50vw - 28px )'
  },
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 180,
  },
  barra: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: 370,
  },

}));




const Dashboard = (props) => {
  let url = 'https://node-myexpenses.vercel.app';


  let datos = props.item;
  let d = new Date();
  let dt = d.toISOString();
  function sumarDias(fecha, dias) {
    fecha.setDate(fecha.getDate() + dias);
    return fecha;
  }
  let prueba = sumarDias(d, -15);



  const [fechaend, setFechaEnd] = useState(dt);
  const [fechastart, setFechaStart] = useState(null);
  const [startDate, setDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  const [ingresado, setIngresado] = useState(false);
  const [modificado, setModificado] = useState(false);
  const [eliminado, setEliminado] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIngresado(false);
    setEliminado(false);
    setModificado(false)
  };

  const unasem = () => {
    let e = new Date();
    function sumarDias(fecha, dias) {
      fecha.setDate(fecha.getDate() + dias);
      return fecha;
    }
    let semana = sumarDias(e, -7);
    setDate(semana);
    setEndDate(new Date());
    setFechaStart(semana.toISOString());
    setFechaEnd(new Date().toISOString())

  }


  const dossem = () => {
    let e = new Date();

    function sumarDias(fecha, dias) {
      fecha.setDate(fecha.getDate() + dias);
      return fecha;
    }
    let semana = sumarDias(e, -14);
    setDate(semana);
    setEndDate(new Date());
    setFechaStart(semana.toISOString());
    setFechaEnd(new Date().toISOString())

  }
  const unmes = () => {
    let e = new Date();

    function sumarDias(fecha, dias) {
      fecha.setDate(fecha.getDate() + dias);
      return fecha;
    }
    let semana = sumarDias(e, -28);
    setDate(semana);
    setEndDate(new Date());
    setFechaStart(semana.toISOString());
    setFechaEnd(new Date().toISOString())

  }
  const Fechas = (e) => {
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let date = new Date(e);
    let dia = date.getDate();
    let mes = date.getMonth();
    let anio = date.getFullYear();
    return (
      <span>{dia} de {meses[mes]} del {anio}</span>
    )
  }

  const onChange = dates => {
    const [start, end] = dates;
    setDate(start);
    setEndDate(end);
    setFechaStart(start.toISOString());

    if (end !== null) {
      setFechaEnd(end.toISOString());
    }


  };





  const Cargar = () => {
    fetch(`${url}/datos`, {
    }).then(r => r.json())
      .then(res => {
        props.dispatch({
          type: 'GET_ITEMS',
          payload: res
        })
      })
    //setFechaStart(restardias);
    setFechaStart(prueba.toISOString());
    setDate(prueba);

  }
  const Cargarcat = () => {
    fetch(`${url}/categorias`, {
    }).then(r => r.json())
      .then(res => {
        console.log(res)
        props.dispatch({
          type: 'GET_CATS',
          payload: res
        })
      })


  }

  useEffect(() => {
    Cargar();
    Cargarcat();
  }, [])

  let filtradosend = datos.filter(e => e.fecha <= fechaend);
  let filtrados = filtradosend.filter(e => e.fecha >= fechastart);





  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div className={classes.root}>
      <Snackbar open={ingresado} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="succes">
          Dato ingresado con éxito
        </Alert>
      </Snackbar>
      <Snackbar open={eliminado} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Dato eliminado con éxito.
        </Alert>
      </Snackbar>
      <Snackbar open={modificado} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="succes">
          Dato modificado con éxito.
        </Alert>
      </Snackbar>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            MyExpenses
          </Typography>




          <IconButton color="inherit">
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <ObjetivosModal />
        <Divider />
        <List>
          <ListSubheader inset>Estadisticas</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText onClick={unasem} primary="Hace 1 semana" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText onClick={dossem} primary="Hace 2 semanas" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText onClick={unmes} primary="Hace 1 mes" />
          </ListItem>

        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container className={classes.container}>
          <Grid className='float' container spacing={3}>
            <Grid item xs={12} md={12} lg={12}>
              <Typography color="textSecondary" className={classes.depositContext}>
                Datos desde el {Fechas(startDate)} al {Fechas(endDate)}
              </Typography></Grid>
            <Grid item xs={12} md={12} lg={3}>

              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                className='fecha'
                dateFormat="MMMM d, yyyy"
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>

                <Deposits depositos={filtrados} />

              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Egreso egresos={filtrados} />
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Balance balance={filtrados} />
              </Paper>
            </Grid>

            <Grid className='float' item xs={12} md={12} lg={6}>
              <Paper className={classes.barra}>
                <Chart fechas={filtrados} />
              </Paper>
            </Grid>
            <Grid className='float' item xs={12} md={12} lg={6}>
              <Paper className={classes.barra}>
                <Title>Categorias</Title>
                <Barra item={filtrados} categorias={props.categorias} />
              </Paper>
            </Grid>
            {/* Recent Orders */}

            {/* Chadart */}

            <Grid item xs={12} lg={12}>
              <Paper className={classes.paper}>
                <Objetivos categorias={props.categorias} item={filtrados} />
              </Paper>
            </Grid>

            <Grid item xs={12} lg={12}>
              <Paper className={classes.paper}>
                <EnhancedTable />
              </Paper>
            </Grid>

            {/* 
            <Grid className='floatrelative' item xs={12} md={3} lg={3}>
              <Paper className='ingresar'>
                <Ingresar />
              </Paper>
            </Grid> */}

          </Grid>

          <ResponsiveDialog />
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}


const mapStateToProps = (state) => ({
  item: state.items,
  montofijo: state.montofijo,
  categorias: state.categorias
});

export default connect(mapStateToProps)(Dashboard);
