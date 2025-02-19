import {  FormEvent, useState } from 'react'

import styles from './index.module.css'
type doList = {
  title:string;
  detail:string;
}
const App=()=> {
  const [focusForm,setFocusForm] =useState(false) 

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

  const focusText = () =>{
    setFocusForm(true)
  }
  const blurText =() =>{
    setFocusForm(false)
  } 

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>今日のやること</h1>
      {toDoList.map((list,index)=>(
        <div className={styles.toDoThing}>
          <div className={styles.checkbox}><input type="checkbox" /></div>
          
          <div key={index} >
            <div>{list.title}</div>
            <div>{list.detail}</div>
          </div>
        </div>
      ))}
      <form className={`${styles.form} ${focusForm ? styles.focused:''} `} onSubmit={addList} >
       <div className = {styles.textbox}  onFocus={focusText} onBlur={blurText}>
        <input type = "text" className={styles.titleText} onChange={(e)=>getTitleText(e.target.value)} />
        <input type= "text" className={styles.detailText} onChange={(e)=>getDetailText(e.target.value)} />
       </div> 
       <div className = {styles.submit} >
        <input className = {styles.add} type='submit' value = '追加' />
       </div>
      </form>
    </div>
  )
}

export default App
