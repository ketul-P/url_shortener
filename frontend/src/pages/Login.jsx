import { useNavigate } from "react-router-dom";
import "../styles/login.css";


function Login(){

    const navigate = useNavigate();


    function handleLogin(){

        // Later connect Spring Security JWT here

        navigate("/home");

    }


    return (

        <div className="login-container">


            <div className="login-card">


                <h1>
                    Shortly
                </h1>


                <p>
                    Sign in to manage your links
                </p>


                <input
                    type="email"
                    placeholder="Email"
                />


                <input
                    type="password"
                    placeholder="Password"
                />


                <button onClick={handleLogin}>
                    Login
                </button>


                <span>
                    Don't have an account?
                    <a>
                        Register
                    </a>
                </span>


            </div>


        </div>

    );

}


export default Login;