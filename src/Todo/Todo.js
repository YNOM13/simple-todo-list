export default function Todo({onDelete,todos:{title, id, date}}) {
  return(
    <fieldset style={{display:'flex', justifyContent:'space-between', background:'lightgreen'}}>
      <span style={{padding:'5px', background:'white'}}>{title}</span>
      <span style={{padding:'5px', background:'white'}}>{date}</span>
      <button onClick={()=>onDelete(id)}>&times;</button>
    </fieldset>
  )
}