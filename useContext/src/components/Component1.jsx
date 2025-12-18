import { useContext } from "react";
import { Context } from "../context/context";

const Component1 = () => {
    const value = useContext(Context)
    return ( 
        <span>
            <span>Component1.jsx:</span>
            <button onClick={()=>value.setCount((count)=>count+1)}>Increment</button>
        </span>
     );
}
 
export default Component1;