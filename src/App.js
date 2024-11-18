
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import TextBox from './components/TextBox';
import Alert1 from './components/Alert1';

function App() {

  const [style, setStyle] = useState('light');
  const [alert, setAlert] = useState(null);

  const handleAlert = (type, message) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  const handleStyle = () => {
    if (style === 'light') {
      setStyle('dark')
      document.body.classList.add('bg-secondary')
      document.title = 'Text Editor - DarkMode'
    } else {
      setStyle('light')
      document.body.classList.remove('bg-secondary')
      document.title = 'Text Editor - LightMode'
    }
  }


  return (
    <>
      <Navbar menuComp1="Conatct" menuComp2="FAQ" style={style} handleStyle={handleStyle} />
      <Alert1 alert={alert} />
      <TextBox style={style} handleAlert={handleAlert} />
    </>
  );
}

export default App;
