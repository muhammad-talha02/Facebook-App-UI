import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer.jsx";
const INITIAL_STATE = {
    user: {
        _id: "64c619d88f32c24be04f28e6",
        username: "talha",
        email: "talha@gmail.com",
        profilePicture: "/person/2.jpeg",
        coverPicture: "/post/4.jpeg",
        followers: [],
        following: [
            "64c619fc8f32c24be04f28e8",
            "64c61a488f32c24be04f28ec"
        ],
        isAdmin: false,
        desc: "Hey i am talha here",
        DOB: "16 oct 2001",
        city: "Dubai",
        country: "UAE",
        relationship: 1
    },
    isFetching: false,
    error: false
};


export const AuthContext = createContext(INITIAL_STATE);


export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider
         value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

