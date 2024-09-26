import { useState } from "react"
import './App.css'

function App() {
  const [title, setTitle] = useState("My Task Board")
  return (
    <div className='container-fluid' >
      <div className="col-8 offset-4 mt-5">
        <h1 className="app-title"><i className="bi bi-journal-check me-2 text-info"></i>{ title }</h1>
        <p className="app-sub-title ms-5">Tasks to keep organised</p>
      </div>
    </div> 
  )
}

export default App
