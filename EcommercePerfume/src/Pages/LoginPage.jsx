import { useState } from "react";
import CustomInputComponent from "../Components/CustomInputComponent";

function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const inputData = [
        { label: "User Name", key: "username" },
        { label: "Password", key: "password" }
    ];
    return (
        <div className="d-flex justify-content-center vh-100 align-items-center">
            <form style={{ width: "320px" }} className="d-flex flex-column shadow p-4">
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
                <button className="btn btn-primary w-100 mt-3" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default LoginPage;


