import { useContext } from "react";
import { Context } from "../context/context";
import Component1 from "./component1";

const Button = () => {
    const value = useContext(Context);
    return ( 
        <div>
            <Component1 />
            <p>Button.jsx: Count is {value.count}</p>
        </div>
     );
}
 
export default Button;
