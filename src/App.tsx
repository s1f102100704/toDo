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
  // const [checked,setChecked] = useState(false)

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

  const handleCheck =(event: React.ChangeEvent<HTMLInputElement>,list:doList,index:number)=>{
    console.log(index)
    setToDoList((prev) => prev.filter((_, i) => i !== index))
    console.log(toDoList)
  }

  return (
    <div className={styles.main}>
      <div className={styles.content}>
      <h1 className={styles.title}>今日のやること</h1>
      {toDoList.map((list,index)=>(
        <div>
          <div className={styles.toDoThing}>
            <div ><input type="checkbox" onChange={(event) => handleCheck(event,list, index)} className={styles.checkbox}/></div>
            <div key={index} >
              <div className={styles.toDoTitle}>{list.title}</div>
              <div className={styles.toDoDetail}>{list.detail}</div>
            </div>
          </div>
          <div className={styles.border}></div>
        </div>
      ))}

        <form className={`${styles.form} ${focusForm ? styles.focused:''} `} onSubmit={addList} >
          <div className = {styles.textbox}  onFocus={focusText} onBlur={blurText}>
            <input type = "text" className={styles.titleText} onChange={(e)=>getTitleText(e.target.value)} placeholder='タイトル'/>
            <input type= "text" className={styles.detailText} onChange={(e)=>getDetailText(e.target.value)} placeholder='説明'/>
          </div> 
          <div className = {styles.submit} >
            <input className = {styles.add} type='submit' value = '追加' />
          </div>
        </form>
      </div>
     
    </div>
  )
}

export default App
