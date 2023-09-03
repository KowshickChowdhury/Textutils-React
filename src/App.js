import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showALert  = (message, type)=>{
        setAlert({
          msg : message,
          type : type,
        })
  }
  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#021942';
      showALert("Dark mode is enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showALert("Light mode is enabled","Success");
    }
  }

  return (
    <>
    <Navbar title='TextUtils' abouttext='About' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <TextForm heading="Enter the text to analyze below" mode={mode} />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
