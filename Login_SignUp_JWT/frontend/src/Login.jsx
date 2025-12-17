import axios from "axios";
import { useState } from "react";
import { backendUrl } from "./App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
    const [currentState, setCurrentState] = useState("Login");

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleFormSubmission = async (event) => {
        event.preventDefault();

        try {
            if (currentState === "Signup") {
                const response = await axios.post(backendUrl +  'api/user/register', {name, email, password})
                if (response.data.success) {
                    //uncomment if you want to redirect to home page after registration
                    // setToken(response.data.token)

                    //comment next 3 lines if you want to redirect to home page after registration
                    setCurrentState("Login");
                    setEmail("");
                    setPassword("");
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
            } else {
                const response = await axios.post(backendUrl + 'api/user/login', {email, password})
                if (response.data.success) {
                    setToken(response.data.token)
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray">
            <form onSubmit={handleFormSubmission} className="bg-white w-full max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg space-y-6">
                <div className="text-center">
                    <p className="text-3xl font-bold text-gray-800">{currentState}</p>
                </div>

                {
                    currentState === "Login" ? null : (
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"/>
                    )
                }
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-green-500"/>

                <div className="flex justify-between text-sm text-blue-600">
                    <p className="cursor-point hover:underline">Forgot Password</p>
                    {
                        currentState === "Login" ? (
                            <p className="cursor-point hover:underline" onClick={() => setCurrentState("Signup")}>Create account</p>
                        ) : (
                            <p className="cursor-point hover:underline" onClick={() => setCurrentState("Login")}>Login Here</p>
                        )
                    }
                </div>

                <button type="submit" className="w-full bg-green-600 hover:bg-green-800 text-white font-semibold py-3 rounded-md transition duration-300">{currentState==="Login" ? "Sign In" : "Sign Up"}</button>
            </form>
        </div>
     );
}
 
export default Login;