import { FaTrash } from "react-icons/fa";

function ToDoList({ todos }) {
  const monthsName = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="flex items-center justify-center gap-5 flex-col">
      {todos && todos.map(({ id, title, date, deadline }) => {
        const todoDate = date.toDate();
        const day = todoDate.getDate();
        const month = todoDate.getMonth();
        const hour = todoDate.getHours();
        const minute = todoDate.getMinutes().toString().padStart(2, "0");

        return (
          <div key={id} className="w-[400px] border rounded-2xl px-7 py-2 flex flex-col gap-1 relative group">
            <p className="text-[10px] italic">
              Created at: {`${day}-${monthsName[month]} ${hour}:${minute}`}
            </p>
            <div className="flex justify-between flex-col gap-1">
              <h1 className="text-2xl">Task: {title}</h1>
              <p>Deadline: {deadline ? deadline.toLocaleString() : "No deadline"}</p>
            </div>
            <button className="absolute top-2 right-5 text-xl hover:text-red-600 hover:scale-125 active:scale-75 opacity-0 group-hover:opacity-100"><FaTrash /></button>
          </div>
        );
      })}
    </div>
  );
}

export default ToDoList;