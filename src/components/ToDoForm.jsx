import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useFirestore } from "../hooks/useFirestore";
import useCollection from "../hooks/useCollection";

function ToDoForm({ editingId, setEditingId, title, setTitle, deadline, setDeadline, handleCancel }) {
    const { addTodo, updateTodo } = useFirestore();
    const { data: todos } = useCollection("mytodos");

   

    useEffect(() => {
        if (editingId) {
            const todo = todos.find(t => t.id === editingId);
            if (todo) {
                setTitle(todo.title);
                setDeadline(todo.deadline);
            }
        }
    }, [editingId, todos]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title && !deadline) {
            toast.error("Please provide title and deadline");
            return;
        }

        if (editingId) {
            updateTodo({
                collName: "mytodos",
                id: editingId,
                data: { title, deadline, date: new Date() }
            });
            setEditingId(null);
        } else {
            addTodo({
                collName: "mytodos",
                data: { title, deadline, date: new Date() }
            });
        }

        setTitle("");
        setDeadline("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mx-auto w-[300px] space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6 my-5">
                <h1 className="text-center text-2xl font-bold">
                    {editingId ? "Edit Todo" : "Create Your Todos"}
                </h1>

                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 w-full rounded-lg bg-white py-3 px-2 border"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Deadline</label>
                    <input
                        type="number"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="mt-1 w-full rounded-lg bg-white py-3 px-2 border"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <button type="submit" className="flex-1 rounded-lg bg-indigo-600 px-12 py-3 text-white">
                        {editingId ? "Update Todo" : "Create Todo"}
                    </button>

                    {editingId && (
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="flex-1 rounded-lg bg-red-500 px-12 py-3 text-white"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ToDoForm;
