import { useState } from "react"
import Task from "./components/Task"
import './App.css'


function App() {
  const [title, setTitle] = useState("My Task Board")
  return (
    <div className='container-fluid' >
      <div className="col-8 offset-4 mt-5">
        <h1 className="app-title"> 
          <img src="/public/Logo.svg" alt="pile of files icon" /> 
            <span className="mx-2">{ title }</span>
          <sup><img src="/Edit_duotone.svg" alt="pencil icon" /></sup>
        </h1>
        <p className="app-sub-title ms-5">Tasks to keep organised</p>
        <Task name="Task in Progress" status="inprogress"/>
        <Task name="Task Completed" status="done"/>
        <Task name="Task Won't Do" status="won't do"/>
        <Task name="Task To Do" description="Work on a Challenge on devChallenges.io, learn TypeScript." status="todo"/>
        <div className="x-l-warning p-3 w-50 my-3 rounded d-flex">
          <span className={'p-2 rounded d-warning'}>
              <img src='/Add_round_duotone.svg' className='d-flex flex-row-reverse' alt="" />
            </span>
          <span className="align-self-center mx-3 fw-semibold">
            Add new task
          </span>
        </div>
      </div>
    </div> 
  )
}

export default App
