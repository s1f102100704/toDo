import {  FormEvent, useState } from 'react'

import styles from './index.module.css'
type doList = {
  title:string;
  detail:string;
}
const App=()=> {
  const [toDoList,setToDoList] = useState<doList[]>([])
  const [toDoTitle,setToDoTitle] = useState("")
  const [toDoDetail,setToDoDetail] = useState("") 

  const getTitleText = async(value:string)=>{
    setToDoTitle(value);
  }
  const getDetailText =async(value:string)=>{
    setToDoDetail(value);
  }
  const addList = async(event:FormEvent)=>{
    event.preventDefault()
    setToDoList((prev)=>[...prev,{title:toDoTitle,detail:toDoDetail}])
  }
  return (
    <div className={styles.main}>
      <div>toDo list</div>
      {toDoList.map((list,index)=>(
        
        <div key={index} className={styles.toDoThing}><input type="checkbox"/>
          <div>{list.title}</div>
          <div>{list.detail}</div>
        </div>
      )

      )}
      <form className={styles.form} onSubmit={addList}>
       <div className = {styles.textbox}>
        <input type = "text" className={styles.titleText} onChange={(e)=>getTitleText(e.target.value)}/>
        <input type= "text" className={styles.detailText} onChange={(e)=>getDetailText(e.target.value)}/>
       </div> 
       
       <input className = {styles.add} type='submit' value = '追加' />
      </form>
    </div>
  )
}

export default App
