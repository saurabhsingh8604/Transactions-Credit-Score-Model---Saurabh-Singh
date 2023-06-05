import './App.css';
import { Router, Link } from "react-router-dom";
import AppRoute from "./routes";
import styled from 'styled-components';

function App(props) {
  return (
    <div className="App" style={{ fontFamily: "Nunito", }}>
   
      {/* <AppRoute basePath={basePath} args={args}/> */}
      <AppRoute />
     {/* </Router> */}
    </div>
 
  );
}

export default App;
