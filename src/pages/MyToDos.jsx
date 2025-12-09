import ToDoForm from "../components/ToDoForm"
import ToDoList from "../components/ToDoList"
import useCollection from "../hooks/useCollection"
import { useState } from "react"

function MyToDos() {
  const { data: todos } = useCollection("mytodos")
  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const handleCancel = () => {
    setEditingId(null);
    setTitle("");
    setDeadline("");
  };

  return (
    <div className="w-full flex items-center justify-around">
      <ToDoList title={title} setTitle={setTitle} deadline={deadline} setDeadline={setDeadline} editingId={editingId} todos={todos} setEditingId={setEditingId} handleCancel={handleCancel}/>
      <div>
        <ToDoForm title={title} setTitle={setTitle} deadline={deadline} setDeadline={setDeadline} editingId={editingId} setEditingId={setEditingId} handleCancel={handleCancel}/>
      </div>
    </div>
  )
}

export default MyToDos
