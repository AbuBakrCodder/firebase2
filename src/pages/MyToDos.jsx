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
    <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-around gap-6 p-4">
      <div className="w-full lg:w-auto">
        <ToDoList title={title} setTitle={setTitle} deadline={deadline} setDeadline={setDeadline} editingId={editingId} todos={todos} setEditingId={setEditingId} handleCancel={handleCancel}/>
      </div>
      <div className="w-full lg:w-auto">
        <ToDoForm title={title} setTitle={setTitle} deadline={deadline} setDeadline={setDeadline} editingId={editingId} setEditingId={setEditingId} handleCancel={handleCancel}/>
      </div>
    </div>
  )
}

export default MyToDos
