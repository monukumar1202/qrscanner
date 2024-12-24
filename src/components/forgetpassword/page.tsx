
import './forgetpassword.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

    const navigate = useNavigate();
    const [emailormobile, setEmailormobile] = useState("");
    const [requestBodyData, setRequestBodyData] = useState<any>([{ emailormobile }]);

    // const { send } = props;

    async function handleForgetPassword(e: any) {
        e.preventDefault();
        try {

            let requestBody = [{ emailormobile }];
            setRequestBodyData(requestBody)
            await axios.post('http://192.168.131.5:4000/api/verifyemailormobile', requestBody)
                .then((res: any) => {
                    console.log(res);
                    if (res.data !== "Failed") {
                        navigate('/changePassword', {state: res.data})
                    } else {
                        console.log('Email or mobile is Not verified,  Please enter valid email or mobile.');
                    }
                })
                .catch((err: any) => {
                    console.log(err);
                })
        } catch (error: any) {
            console.log(error);
        }
    }

    function handlegotoLogin() {
        navigate('/login')
    }

    return (
        <>
            <div className="container main-cont p-4" style={{ background: 'white' }}>
                <div className="container">
                    <form onSubmit={handleForgetPassword}>
                        <p className="text-dark title text-center">Password Assistance</p>
                        <span className='mt-1' style={{ fontSize: '12px' }}>Enter the email address or mobile phone number associated with your Amazon account</span>
                        <div className="email">
                            <label >Email or mobile phone number</label>
                            <input onChange={e => { setEmailormobile(e.target.value) }} type="email" className="form-control form-control-sm d-block w-100" id="inputname" />
                        </div>
                            <div className="button-sbt">
                                <button type="submit" className="btn btn-warning btn-sm w-100 mt-3">Continue</button>
                            </div>
                            <div className="mt-2 details">
                                {/* <span>Already have an account? </span> */}
                                <a className="toggle-list" style={{cursor:'pointer'}} onClick={() => handlegotoLogin()}> Sign In</a>
                            </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ForgetPassword