import './mainlogin.css';
import { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { loginservice } from '../../services/apiService';

const MainLogin = (props: any) => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { send } = props;

    const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
            let requestBody = { username, password };
            const data: any = await loginservice(requestBody);
            // console.log(data);
            if (data.data.status !== "Failed") {
                localStorage.setItem('LoginData', JSON.stringify(data.data))
                send(data.data);
                if(data.data.role === "Vendor"){
                    navigate('/vendor');
                }else if(data.data.role === "Customer"){
                    navigate('/user');
                }else if(data.data.role === "PlatformAdmin"){
                    navigate('/padmin');
                }
                // alert('Login Success');
            } else {
                alert('Login Failed');
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    function handleRegister() {
        navigate('/register')
        send('');
    }

    function handleForgetPsd() {
        navigate('/forgetpassword')
        send('');
    }


    return (
        <>
            <div className="container main-cont p-4" style={{ background: 'white' }}>
                <div className="container">
                    <form onSubmit={handleLogin}>
                        <p className="text-dark title text-center">Sign in</p>
                        <div className="email">
                            <label>Email or Mobile phone number</label>
                            <input onChange={e => { setUsername(e.target.value) }} type="email" className="form-control form-control-sm d-block w-100" id="inputemail" />
                        </div>
                        <div className="password mt-2">
                            <label >Password</label>
                            <input onChange={e => { setPassword(e.target.value) }} type="password" className="form-control form-control-sm d-block w-100" id="inputpassword" />
                        </div>
                        <div className="button-sbt">
                            <button type="submit" className="btn btn-warning btn-sm w-100 mt-3">Continue</button>
                        </div>
                        <div className="details">
                            <p className="toggle-list" style={{cursor:'pointer'}} onClick={() => handleForgetPsd()}>Forgot Password?</p>
                        </div>
                    </form>
                    <div className="container second-part d-flex flex-column justify-content-center align-items-center mt-4">
                        <h4 className="h4"><span className='help'>New to Spyder?</span></h4>
                        <button onClick={() => handleRegister()} className="btn btn-secondary btn-sm w-100 mt-2">Create your Sypdr account</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainLogin