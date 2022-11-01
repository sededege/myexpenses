import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./store/store";
import React from 'react';
import './style/estilos.css'
function App() {

  

  console.log('asd');
  return (
    <Provider store={store}>
      <Router>
        <div className="outer">
          <div className="inner">
            <Routes>
              <Route exact path='/' element={<Login/>} />
              <Route path="/sign-in" element={<Login/>} />
              <Route path="/sign-up" element={<SignUp/>} />
              <Route path="/dash" element={<Dashboard/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
