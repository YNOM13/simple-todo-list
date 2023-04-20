import {useRef, useState} from "react";

export default function Form({onSave}) {
  const [form, setForm] = useState({
    title:'',
    date:new Date().toISOString().substring(0,10)
  })
  const inputFocus = useRef(null)
  function onSubmit(e) {
    e.preventDefault()

  if(form.title.trim() !== ''){
    onSave(form)

    setForm((prevState)=>{
      return{
        ...prevState,
        date: new Date().toISOString().substring(0,10),
        title: '',
      }
    })
   }
  }

  function onFocus() {
    inputFocus.current.focus()
  }
  function onChange(e) {
    const {value, name} = e.target

    setForm((prevState) => {
      return{
        ...prevState,
        [name]:value,
      }
    })
  }
  return(
    <form onSubmit={onSubmit}>
      <input ref={inputFocus} onChange={onChange} type="text" name="title" value={form.title}/>
      <input onChange={onChange} type="date" name="date" value={form.date}/>
      <button onClick={onFocus}>Add</button>
    </form>
  )
}