
import './register.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { registerservice } from '../../services/apiService';
import { dialcodeData } from './dialcode'; 

const Register = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState([]);
    const [role, setRole] = useState(['Customer', 'Vendor']);
    const [selectedOption, setSelectedOption] = useState('+91-IN');
    const [selectedrole, setSelectedrole] = useState('Customer');

    async function handleRegister(e: any) {
        e.preventDefault();
        try {
            let number = (selectedOption.split("-")[0])+-+mobile;
            let requestBody = { name, email, number, password, selectedrole };
            const data: any = await registerservice(requestBody);
            console.log(data);
            if (data.data !== "Failed") {
                alert("Registration Successfull");
                navigate('/login');
            } else {
                alert('Registration Failed');
            }
        } catch (error: any) {
            console.log(error);
        }
    }

    function handleDailCode() {
        const dial = dialcodeData.getDialData()
        const sortedData:any = dial.sort((a: any, b: any) => a.dial_code - b.dial_code);
        setCode(sortedData);
    }

    useEffect(() => {
        handleDailCode();
    }, [])

    function handlegotoLogin() {
        navigate('/login')
    }

    const handleChange = (event: any) => {
        setSelectedOption(event.target.value)
    }

    return (
        <>
            <div className="container main-cont1 p-4" style={{ background: 'white' }}>
                <div className="container">
                    <form onSubmit={handleRegister}>
                        <p className="text-dark title text-center">Create Account</p>
                        <div className="name">
                            <label >Name</label>
                            <input placeholder='First and last name' onChange={e => { setName(e.target.value) }} type="text" className="form-control form-control-sm d-block w-100" id="inputname" />
                        </div>
                        <div className="name">
                            <label >Email</label>
                            <input placeholder='Your Email' onChange={e => { setEmail(e.target.value) }} type="email" className="form-control form-control-sm d-block w-100" id="inputname" />
                        </div>
                        <div className="mobile mt-2">
                            <label >Mobile Number</label>
                            <div className='input-group'>
                                <select value={selectedOption} onChange={handleChange} className='form-select form-select-sm' name="code">
                                    {
                                        code.map((item: any) =>
                                            <option >+{item.dial_code}-{item.code}</option>
                                        )
                                    }
                                </select>
                                <input placeholder='Mobile number' onChange={e => { setMobile(e.target.value) }} type="number" style={{ marginLeft: '5px' }} className="w-50 form-control form-control-sm d-block" id="inputmobile" />
                            </div>
                        </div>
                        <div className="password mt-2">
                            <label >Password</label>
                            <input placeholder='At least 6 characters' onChange={e => { setPassword(e.target.value) }} type="password" className="form-control form-control-sm d-block w-100" id="inputpassword" />
                        </div>
                        <div className="role mt-2">
                            <label >Account Type</label>
                            <div className='w-100'>
                                <select value={selectedrole} onChange={e=>setSelectedrole(e.target.value)} className='form-select form-select-sm' name="code">
                                    {
                                        role.map((item: any) =>
                                            <option >{item}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <span className='mt-1' style={{ fontSize: '12px' }}>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
                            <div className="button-sbt">
                                <button type="submit" className="btn btn-warning btn-sm w-100 mt-3">Create Account</button>
                            </div>
                            <div className="mt-2 details">
                                <span>Already have an account? </span>
                                <a className="toggle-list" style={{cursor:'pointer'}} onClick={() => handlegotoLogin()}> Sign In</a>
                            </div>
                        </span>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Register