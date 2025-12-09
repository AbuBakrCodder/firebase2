import { collection, doc, addDoc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

export const useFirestore = () => {
    // add new todo
    const addTodo = ({ collName, data }) => {
        return addDoc(collection(db, collName), data)
            .then(() => { toast.success("Todo added successfully!") })
            .catch((error) => { toast.error(`Error: ${error.message}`) });
    };
    // delete todo
    const deleteTodo = (id) => {
        deleteDoc(doc(db, "mytodos", id))
    };
    // update todo
    const updateTodo = ({ collName, data, id }) => {
        setDoc(doc(db, collName, id), data).then(() => { toast.success("Todo updated successfully!") }).catch((error) => { toast.error(`Error: ${error.message}`) });
    };

return { addTodo, deleteTodo, updateTodo};
}