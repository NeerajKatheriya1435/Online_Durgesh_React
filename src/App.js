
import { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import TextBox from './components/TextBox';

function App() {

  const [style, setStyle] = useState('light');

  const handleStyle = () => {
    if (style === 'light') {
      setStyle('dark')
      document.body.classList.add('bg-secondary')
    } else {
      setStyle('light')
      document.body.classList.remove('bg-secondary')
    }
  }

  return (
    <>
      <Navbar menuComp1="Conatct" menuComp2="FAQ" style={style} handleStyle={handleStyle} />
      <TextBox style={style} />
    </>
  );
}

export default App;
