import {  FormEvent, useState } from 'react'
import './App.css'
import styles from './index.module.css'

const App=()=> {
  const [toDoList,setToDoList] = useState<string[]>([])
  const [toDoThing,setToDoThing] = useState("")
  
  const getValue = async(value:string)=>{
    
    setToDoThing(value);
  }
  const addList = async(event:FormEvent)=>{
    event.preventDefault()
    setToDoList((prev)=>[...prev,toDoThing])
    console.log(toDoList)
  }
  return (
    <>
      <div>toDo list</div>
      {toDoList.map((list,index)=>(
        <div key={index}>{list}</div>
      )

      )}
      <form className={styles.form} onSubmit={addList}>
       <input type = "text" onChange={(e)=>getValue(e.target.value)}/>
       <input className = {styles.add} type='submit' value = '追加' />
      </form>
    </>
  )
}

export default App
