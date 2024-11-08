import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Proyecto Final Backend + Laboratorio Full Stack</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador {count}
        </button>
      </div>
    </>
  )
}

export default App
