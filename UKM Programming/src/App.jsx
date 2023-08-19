import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [angka1, setAngka1] = useState("null");
  const [angka2, setAngka2] = useState("null");
  const result = angka1+angka2

  //handler
  const Angka1Change = (event) =>{
    setAngka1(Number(event.target.value));
  }
  const Angka2Change = (event) =>{
    setAngka2(Number(event.target.value));
  }
  return (
    <form>
      <div>
        <input type="number" value={angka1} onChange={Angka1Change} />
      </div>
      <div>
      <input type="number" value={angka2} onChange={Angka2Change} />
      </div>
      <h2>Hasil : {result} </h2>
    </form>
  )
}

export default App
