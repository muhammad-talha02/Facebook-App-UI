import axios from "axios"
import { LoginStart, LoginSuccess, LoginFailed } from "../context/AuthActions.jsx";
export const loginCall = async (userCredentials, dispatch) => {
    dispatch(LoginStart());

    try {
console.log("dispatchng")
        const res = await axios.post("/api/auth/login", userCredentials);
        console.log(res.data)
        dispatch(LoginSuccess(res.data))
    }
    catch (error) {
        console.log("error")
        dispatch(LoginFailed(error))
    }
}