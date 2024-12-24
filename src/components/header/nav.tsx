import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Nav = () => {
    const [list, setList] = useState<any>(['Smart Contact Audit', 'Smart Contact Monitoring']);
    const [selectedOption, setSelectedOption] = useState('Smart Contact Audit');


    const navigate = useNavigate();


    const handleBuy = (props: any) => {
        console.log(props.target.value);
        if (props.target.value === "Smart Contact Audit") {
            navigate('/smartcontactaudit')
            setSelectedOption("Smart Contact Audit");
        } else {
            navigate('/smartcontactmonitoring')
            setSelectedOption("Smart Contact Monitoring");
        }
        if (props.target.value === "All") {
            navigate('/')
            setSelectedOption("All")
        }
    }
    
    return (
        <div className="w-100 d-flex justify-content-end p-2">
                {
                    <select value={selectedOption} onChange={handleBuy} className='form-select form-select-sm' style={{ width: '230px' }} name="sleectItem">
                        {
                            list.map((item: any) => {
                                return <option value={item.id} key={item}>{item}</option>
                            })
                        }
                    </select>
                }
            </div>
    )
}

export default Nav