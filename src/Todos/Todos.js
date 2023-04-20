import Todo from "../Todo/Todo";

export default function Todos({todos, onDelete}) {
  console.log('here 1 23 ')
  return(
    <>
      {todos.map(i=><Todo key={i.id} todos={i} onDelete={onDelete}/>)}
    </>
  )
}