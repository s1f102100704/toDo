import {  useState } from 'react'
import './App.css'
import styles from './index.module.css'

const App=()=> {
  const [toDoList,setToDoList] = useState<string[]>([])

  let toDoThing :string;
  
  const getValue = async(value:string)=>{
    toDoThing = value;
  }
  const addList = ()=>{
    setToDoList([...toDoList,toDoThing])
  }
  return (
    <>
      <div>toDo list</div>
      <div className={styles.form} onSubmit={addList}>
        <form>
        <input type = "text" onChange={(e)=>getValue(e.target.value)}/>
        <input className = {styles.add} type='submit' value = '追加' />
        </form>
      </div>
    </>
  )
}

export default App
