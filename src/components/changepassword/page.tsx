
import './changepassword.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ChangePassword = () => {

    const location = useLocation();

    const navigate = useNavigate();
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [useroldData, setUseroldData] = useState([]);
    const [requestBodyData, setRequestBodyData] = useState<any>([{ password,  confirmPassword}]);

    // const { send } = props;

    useEffect(()=>{
        console.log(location.state);
        setUseroldData(location.state);
    },[])

    async function handleForgetPassword(e: any) {
        e.preventDefault();
        try {
            let requestBody = [{ password, confirmPassword, useroldData}];
            setRequestBodyData(requestBody)
            await axios.put('http://192.168.131.5:4000/api/changepassword', requestBody)
                .then((res: any) => {
                    console.log(res);
                    if (res.data !== "Failed") {
                        navigate('/login')
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

    return (
        <>
            <div className="container main-cont p-4" style={{ background: 'white' }}>
                <div className="container">
                    <form onSubmit={handleForgetPassword}>
                        <p className="text-dark title text-center">Create new password</p>
                        <span className='mt-1' style={{ fontSize: '12px' }}>We'll ask for this password whenever you sign in.</span>
                        <div className="email">
                            <label >New password</label>
                            <input onChange={e => { setpassword(e.target.value) }} type="email" className="form-control form-control-sm d-block w-100" id="inputname" />
                        </div>
                        <div className="email">
                            <label >Password again</label>
                            <input onChange={e => { setconfirmPassword(e.target.value) }} type="email" className="form-control form-control-sm d-block w-100" id="inputname" />
                        </div>
                            <div className="button-sbt">
                                <button type="submit" className="btn btn-warning btn-sm w-100 mt-3">Save change and sign in</button>
                            </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ChangePassword