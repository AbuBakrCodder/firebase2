import { useEffect, useState } from "react"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { auth } from "../firebase/firebaseConfig"

function useCollection(collectionName) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged(user => {
            if (!user) {
                setData([])
                setLoading(false)
                return
            }

            const q = query(
                collection(db, collectionName),
                where("userId", "==", user.uid) // 🔥 ENG MUHIM JOY
            )

            const unsubscribeData = onSnapshot(q, snapshot => {
                setData(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }))
                )
                setLoading(false)
            })

            return () => unsubscribeData()
        })

        return () => unsubscribeAuth()
    }, [collectionName])

    return { data, loading }
}

export default useCollection
