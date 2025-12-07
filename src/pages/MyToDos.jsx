import ToDoForm from "../components/ToDoForm"
import ToDoList from "../components/ToDoList"
import useCollection from "../hooks/useCollection"

function MyToDos() {
  const { data: todos } = useCollection("mytodos")

  return (
    <div className="w-full flex items-center justify-around">
      <ToDoList todos={todos} />
      <div>
        <ToDoForm />
      </div>
    </div>
  )
}

export default MyToDos
