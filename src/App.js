import './App.css';
import {useCallback, useEffect, useMemo, useState} from "react";
import Form from "./Form/Form";
import Todos from "./Todos/Todos";

function App() {
  const [todos, setTodos] = useState([])
  const [changeTheme, setChangeTheme] = useState(false)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
      .then(response => response.json())
      .then(data => {
        setTodos(data.map(i=>{
          return{
            ...i,
            date:new Date().toISOString().substring(0,10),
          }
        }))
      })
  },[])

  const styles = useMemo(()=>{
    return{
      background: changeTheme ? 'rgba(0,0,0,0.8)' : 'white',
      color: changeTheme ? 'grey' : 'black',
      height:'1000px',
      transition:'0.4s'
    }
  },[changeTheme])

  const onSave = useCallback (({title,date})=>{
    setTodos((prevState)=>{
      return[{
        title,
        date,
        id: Date.now()
      },...prevState]
    })
  },[])

  const onDelete = useCallback((itemId)=> {
    setTodos(prevState => prevState.filter(i=>i.id!==itemId))
  },[])

  return (
    <div style={styles} className="App">
      <button onClick={()=>setChangeTheme(prevState => !prevState)}>Change color</button>
      <Form onSave={onSave} />
      <Todos onDelete={onDelete} todos={todos}/>
    </div>
  );
}

export default App;
