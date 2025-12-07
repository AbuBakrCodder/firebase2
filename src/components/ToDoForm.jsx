function ToDoForm() {
    return (
        <div>
            <form action="#" className="mx-auto w-[300px] space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6 my-5">
                <h1 className="text-center text-2xl font-bold">Create your todos</h1>
                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="title">Title</label>

                    <input className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none" id="title" type="text" placeholder="Enter task" />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-900" htmlFor="deadl">Deadline</label>

                    <input className="mt-1 w-full rounded-lg bg-white py-3 px-2 border-gray-300 focus:border-indigo-500 focus:outline-none" id="number" type="pass" placeholder="Enter deadline" />
                </div>
                <button className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600" type="submit">
                    Create todo
            </button>
            </form>
        </div>
    )
}

export default ToDoForm
