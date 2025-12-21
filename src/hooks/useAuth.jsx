import { useState } from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    signInWithPopup,
} from "firebase/auth"
import { auth, provider } from "../firebase/firebaseConfig"
import { doc, setDoc, serverTimestamp, deleteDoc } from "firebase/firestore"
import { db } from "../firebase/firebaseConfig"
import { deleteUser } from "firebase/auth";
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom";


export const useAuth = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    //  REGISTER
    const register = async ({ displayname, email, password, imageUrl }) => {
        try {
            setLoading(true)
            setError(null)

            const res = await createUserWithEmailAndPassword(auth, email, password)

            await updateProfile(res.user, {
                displayName: displayname,
                photoURL: imageUrlz
            })

            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName: displayname,
                email,
                photoURL: imageUrl,
                createdAt: serverTimestamp()
            })

            setLoading(false)
            return res.user
        } catch (err) {
            setError(err.message)
            setLoading(false)
            throw err
        }
    }

    //  LOGIN
    const login = async (email, password) => {
        try {
            setLoading(true)
            setError(null)

            await signInWithEmailAndPassword(auth, email, password)

            setLoading(false)
        } catch (err) {
            setError(err.message)
            setLoading(false)
            throw err
        }
    }

    //  LOGOUT
    const logout = async () => {
        try {
            await signOut(auth)
        } catch (err) {
            setError(err.message)
        }
    }

    const handleDelete = async () => {
        if (!auth.currentUser) return;

        const user = auth.currentUser;

        try {
            await deleteDoc(doc(db, "users", user.uid));
            await deleteUser(user);

            alert("Account successfully deleted!");
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
            alert("Accountni o'chirishda xatolik yuz berdi!");
        }
    };

    // GOOGLE LOGIN 
    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                toast.success("Logged in with Google successfully")
                navigate("/");

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    return { register, login, logout, handleDelete, loginWithGoogle, loading, error }
}
