import { useState } from "react"
import Task from "./components/Task"
import './App.css'
 
type Todo = {
  name: string
  status: "inprogress" | "done" | "won't do" | "todo"
  description?: string
}

function App() {
  const [title, setTitle] = useState("My Task Board")
  const [todoList, setTodoList] = useState<Todo[]>([
    {
      name: "Task in Progress",
      status: "inprogress"
    },
    {
      name: "Task Completed",
      status: "done"
    },
    {
      name: "Task won't do",
      status: "won't do"
    },
    {
      name: "Task to do",
      description: "work on a challenge on devChallenges.io, learn TypeScript.",
      status: "todo"
    }
  ])
  return (
    <div className='container-fluid' >
      <div className="col-8 offset-4 mt-5">

        <h1 className="app-title"> 
          <img src="/Logo.svg" alt="pile of files icon" /> 
            <span className="mx-2">{ title }</span>
          <sup className="d-btn"><img src="/Edit_duotone.svg" alt="pencil icon" /></sup>
        </h1>
        <p className="app-sub-title ms-5">Tasks to keep organised</p>

        {
          todoList.map( todo => <Task name={todo.name} status={todo.status} description={todo.description}/>)
        }

        <div className="x-l-warning p-3 w-50 my-3 rounded d-flex">
          <span className={'p-2 rounded d-warning d-btn'}>
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
