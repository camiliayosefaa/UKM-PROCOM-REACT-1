import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bilangan1, setCount1] = useState(2);
  const [bilangan2, setCount2] = useState(3);
  const hasil = Number(bilangan1) + Number(bilangan2);

  return (
    <>
      <h1>Kalkulator Sederhana</h1>
      <h2>Penjumlahan</h2>
      <div className="card">
        <input 
          value={bilangan1}
          onChange={e => setCount1(e.target.value)}
          type='number'
        /> <br />
        <input 
          value={bilangan2}
          onChange={e => setCount2(e.target.value)}
          type='number'
        />
        <p>
          Hasil : {hasil}
        </p>
      </div>
      <p className="read-the-docs">
        By yosefa
      </p>
    </>
  )
}

export default App
