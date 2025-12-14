import { createContext, useReducer } from "react";

export const globalcontext = createContext();

function GlobalContextProvider({ children }) {

    const changeState = (state, { type, payload }) => {
        switch (type) {
            case "LOGINREGISTER":
                return { ...state, user: payload };
            case "LOGOUT":
                return { ...state, user: null };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(changeState, {
        user: null,
    });

    return (
        <globalcontext.Provider value={{ ...state, dispatch }}>
            {children}
        </globalcontext.Provider>
    );
}

export default GlobalContextProvider;
