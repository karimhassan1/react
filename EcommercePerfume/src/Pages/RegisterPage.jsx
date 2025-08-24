
import CustomInputComponent from "../Components/CustomInputComponent";
import { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage(){
     const [formData, setFormData] = useState({
            username: '',
            email:'',
            password: '',
            confirmPassword:''

        });

    const inputData = [
        {label:"User Name" , key:'username'},
        { label: "Email", key: "email" },
        { label: "Password", key: "password" },
        {label:"Confirm Password", key:'confirmpassword'}
    ];
    return(
        <div className="d-flex flex-column  justify-content-center vh-100 align-items-center">
            <div style={{ width: "310px" }} className="c-bg-primary c-border-primary rounded">
                <div className="text-white p-2">
                    <h4 className="text-center">Register</h4>
            </div>
            <form  className="d-flex flex-column shadow p-4 bg-white">
                {inputData.map((item, index) => (
                    <CustomInputComponent
                        key={index}
                        label={item.label}
                        value={formData[item.key]}
                        onChange={(e) =>
                            setFormData({ ...formData, [item.key]: e.target.value })
                        }
                    />
                ))}
                <button className="c-bg-primary c-border-primary text-white p-1 rounded w-100 mt-3" type="submit">
                    Login
                </button>
                <div className="d-flex pt-2">
                    <p style={{fontSize:"12px"}} className="m-0">If already User ? <Link to={"/login"}>Login</Link></p>
                    
                </div>
            </form>
            </div>
            
        </div>
    )
}

export default RegisterPage;