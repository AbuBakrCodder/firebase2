import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useFirestore } from "../hooks/useFirestore";
import { FaPencil } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

function ToDoList({ todos, setEditingId, editingId, handleCancel }) {
  const monthsName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [completed, setCompleted] = useState(() => {
    const saved = localStorage.getItem("completedTodos");
    return saved ? JSON.parse(saved) : {};
  });


  useEffect(() => {
    localStorage.setItem("completedTodos", JSON.stringify(completed));
  }, [completed]);

  const toggleCompleted = (id) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  console.log(todos);


  const { deleteTodo } = useFirestore();

  return (
    <div className="flex items-center justify-center gap-5 flex-col">
      {
        todos && todos.length === 0 && (
          <h1 className="text-2xl font-bold">No todos available. Please add some tasks!</h1>
        )
      }
      {todos && todos.map(({ id, title, date, deadline }) => {
        const todoDate = date.toDate();
        const day = todoDate.getDate();
        const month = todoDate.getMonth();
        const hour = todoDate.getHours();
        const minute = todoDate.getMinutes().toString().padStart(2, "0");

        return (
          <div
            key={id}
            onClick={() => { toggleCompleted(id); toast.success(completed[id] ? "Marked as incomplete" : "Marked as completed") }}
            className={`w-[400px] border rounded-2xl px-7 py-2 flex flex-col gap-1 relative group cursor-pointer transition-all ${completed[id] ? "line-through opacity-50" : ""}`}
          >
            <p className="text-[10px] italic">
              Created at: {`${day}-${monthsName[month]} ${hour}:${minute}`}
            </p>
            <div className="flex justify-between flex-col gap-1">
              <h1 className="text-2xl">Task: {title}</h1>
              <p>Deadline: {deadline ? day + Number(deadline) + "-" + monthsName[month] : "No deadline"}</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(id);
                toast.success("Todo deleted!");
              }}
              className="absolute top-2 right-5 text-xl hover:text-red-600 hover:scale-125 active:scale-75 opacity-0 group-hover:opacity-100"
            >
              <FaTrash />
            </button>
            <button
              className="absolute top-2 right-13 text-xl hover:text-blue-600 hover:scale-125 active:scale-75 opacity-0 group-hover:opacity-100"
            >
              {editingId !== id && <FaPencil onClick={(e) => {
                e.stopPropagation();
                setEditingId(id);
              }} />}
              {editingId === id && (<MdCancel onClick={(e) => {
                e.stopPropagation();
                handleCancel()
              }} className="text-xl text-red-600 opacity-0 group-hover:opacity-100" />)}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;