import { useContext } from "react";
import { globalcontext } from "../context/GlobalContext";

export const useGlobalContext = () => {
    const context = useContext(globalcontext);
    if(!context){
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }

    return context;
}