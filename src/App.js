import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert  = (message, type)=>{
        setAlert({
          msg : message,
          type : type,
        })
      setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#021942';
      showAlert("Dark mode is enabled", "success");
      document.title = ("TextUtils - Dark mode");
      // setInterval(() => {
      //   document.title = ("TextUtils is Amazing");
      // }, 2000);
      // setInterval(() => {
      //   document.title = ("Install TextUtils");
      // }, 1500);
    }
   

    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = ("TextUtils - Light mode");
      // setInterval(() => {
      //   document.title = ("TextUtils is Amazing");
      // }, 2000);
      // setInterval(() => {
      //   document.title = ("Install TextUtils");
      // }, 1500);
    }
  }

  return (
    <>
    <BrowserRouter>
    <Navbar title='TextUtils' abouttext='About'  mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
        <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}>
          </Route>
        </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
