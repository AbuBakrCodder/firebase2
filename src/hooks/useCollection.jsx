import { useEffect, useState } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"

function useCollection(collectionName) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, collectionName),
            (snapshot) => {
                const toDoData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                setData(toDoData)   // ✅ MUHIM
            }
        )

        return () => unsubscribe()
    }, [collectionName])

    return { data }
}

export default useCollection
