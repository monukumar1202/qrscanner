import { Dialog } from "primereact/dialog"
import MainLogin from "../mainLogin/page"
import { useEffect, useState } from "react";
import { allTxn, buyTokens, coins } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";


const Account = (uData: any) => {

    const navigate = useNavigate();

    const [displayPositionOut, setDisplayPositionOut] = useState(false);
    const [positionOut, setPositionOut] = useState<any>('top-center');
    const [displayPositionSign, setDisplayPositionSign] = useState(false);
    const [positionSign, setPositionSign] = useState<any>('top-center');

    // const [displayPositionPay, setDisplayPositionPay] = useState(false);
    // const [positionPay, setPositionPay] = useState<any>('top-center');

    const [coin, setCoin] = useState<any>([]);
    const [buyCoin, setBuyCoins] = useState<any>([])
    const [transaction, setTransaction] = useState<any>([]);
    const [childData, setChildData] = useState<any>([]);


    const dialogFuncMapOut: any = {
        'displayPositionOut': setDisplayPositionOut,
    }

    const getData = async () => {
        const data: any = await coins();
        setBuyCoins(data)
    }

    const handlecoins = async () => {
        setCoin(childData);
    }


    const handleUserClick = (name: any, name1: any, position: any) => {
        const udata = JSON.parse(localStorage.getItem('LoginData')!);
        if (udata === null) {
            // onSignInClick(name, position);
            navigate('/login')
        } else {
            if (udata.name === "Account" || udata.name === null || udata.name === "") {
                navigate('/login')
            } else {
                onLogoutClick(name1, position);
                handlecoins();
                handleTransaction();
                getData();
            }   
        }
    }

    const handleTransaction = async () => {
        const data: any = await allTxn();
        setTransaction(data);
    }

    const dialogFuncMapSign: any = {
        'displayPositionSign': setDisplayPositionSign,
    }


    const onLogoutClick = (name: any, position: any) => {
        dialogFuncMapOut[`${name}`](true);

        if (position) {
            setPositionOut(positionOut);
        }
    }

    const onSignInClick = (name: any, position: any) => {
        dialogFuncMapSign[`${name}`](true);

        if (position) {
            setPositionSign(positionSign);
        }
    }

    const handleLogout = (name: any) => {
        let temp = {
            id: 0,
            name: "Account",
            userId: "",
            mobile: "",
            password: "",
            role: "Guest",
            coin: 0
        };
        localStorage.setItem('LoginData', JSON.stringify(temp));
        dialogFuncMapOut[`${name}`](false);
        setChildData(temp);
        navigate('/')
    }

    const onHideOut = (name: any) => {
        dialogFuncMapOut[`${name}`](false);
    }


    const onHideSign = (name: any) => {
        dialogFuncMapSign[`${name}`](false);
    }


    const handleBuy = async (item: any) => {
        // console.log('button clicked : '+ item);
        let userData = JSON.parse(localStorage.getItem('LoginData')!);
        let accountNo = userData.accNumber;

        const formData = new FormData();

        formData.append('accountNo', accountNo);
        formData.append('amount', item);
        const response:any = await buyTokens(formData);
        // console.log(response)

        if (response.data.status === 'success') {
            userData.coin = userData.coin + response.data.coin;
            localStorage.setItem('LoginData', JSON.stringify(userData));
            setChildData(userData);
            alert('Tocken buy Successfully');
            onHideSign('displayPositionSign');
        }
    }

    const handleTokens = (name: any,) => {
        onSignInClick(name, 'top-center');
        onHideOut('displayPositionOut');
    }

    useEffect(() => {
        // localStorage.removeItem('LoginData');
        const usdata = JSON.parse(localStorage.getItem('LoginData')!);
        let temp: any = {
            id: 0,
            name: "Account",
            userId: "",
            mobile: "",
            password: "",
            role: "Guest",
            coin: 0
        };
        if (usdata === null) {
            setChildData(temp)
        } else {
            if (usdata.name === "Account") {
                onHideSign('displayPositionSign');
                onHideOut('displayPositionOut');
                setChildData(temp)
            } else {
                setChildData(usdata);
                onHideSign('displayPositionSign');
                onHideOut('displayPositionOut');
            }
        }

    }, [uData])


    return (
        <div>
            <p style={{ fontSize: '12px', marginBottom: '0', padding: 'none', color: 'white' }}>Hello, Sign In</p>
            <p onClick={() => handleUserClick('displayPositionSign', 'displayPositionOut', 'top-center')} style={{ fontSize: '14px', fontWeight: 'bold', padding: 'none', cursor: 'pointer', color: 'white' }}>
                {childData.name}
            </p>

            <Dialog header="Wallet" visible={displayPositionOut} position={positionOut} style={{ width: '40vw', background: '#001d41', color: '#fff', padding: '1rem', borderRadius: '5px' }} onHide={() => onHideOut('displayPositionOut')} draggable={false} resizable={false}>
                <div className='p-2'>

                    <div className='d-flex'>
                        <div className='w-100 p-2'>
                            <span className='bi bi-person-circle' style={{ fontSize: '50px' }}></span>
                        </div>
                        <div style={{ textAlign: 'end' }}>
                            <button className='btn btn-danger btn-sm' onClick={() => handleLogout('displayPositionOut')}>Logout</button>
                            <button className='btn btn-danger btn-sm mt-2' onClick={() => handleTokens('displayPositionSign')}>Buy Tokens</button>
                        </div>
                    </div>
                    <div>
                        <p style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '0' }}>Available balance</p>
                        <span className='d-flex'><h3><img src="../images/coin.png" style={{ width: '23px' }} alt="coin" /> {coin.coin} </h3> <p style={{ fontSize: '10px', marginTop: '14px' }}></p> <h3>&nbsp;(${coin.coin * 0.50})</h3></span>
                    </div>

                    <div className='card p-1' style={{ background: '#fff', height: '250px', overflow: 'auto' }}>
                        <table className="table table-hover" style={{ overflow: 'hidden' }}>
                            <thead style={{ fontWeight: '300', fontSize: '12px' }}>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th></th>
                                    <th style={{ textAlign: 'end' }}>Transaction</th>
                                </tr>
                            </thead>
                            <tbody style={{ fontWeight: '300', fontSize: '12px' }}>
                                {
                                    transaction.map((item: any) =>
                                        <tr key={item.id}>
                                            <td>
                                                <div>{item.date}</div>
                                            </td>
                                            <td>
                                                <div style={{ fontWeight: '400' }}>{item.Discription}</div>
                                            </td>
                                            <td>
                                                <img src="../images/bcicon.png" alt="bcicon" style={{ width: '30px', cursor: 'pointer' }} />
                                            </td>
                                            <td style={{ textAlign: 'end' }}>
                                                <div>{item.coin}</div>
                                                <div className={`${item.status === "Received" ? "text-success" : "text-danger"}`}>{item.status}</div>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </Dialog>

            <Dialog header="Tokens" visible={displayPositionSign} position={positionSign} style={{ width: '35vw', color: '#fff', background: '#001d41', padding: '1rem', borderRadius: '5px' }} onHide={() => onHideSign('displayPositionSign')} draggable={true} resizable={false}>
                <div style={{padding:'1rem'}}>
                    <table className="table table-hover" style={{ overflow: 'hidden', borderRadius:'5px' }}>
                        <thead style={{ fontWeight: '300', fontSize: '12px' }}>
                            <tr>
                                <th>Coins</th>
                                <th style={{ textAlign: 'end' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontWeight: '300', fontSize: '12px' }}>
                            {
                                buyCoin.map((item: any) =>
                                    <tr key={item.id}>
                                        <td>
                                            <img src="../images/coin.png" style={{ width: '20px' }} alt="coin" /> <span style={{ fontWeight: 'bold', fontSize: '14px' }}> &nbsp; {item.coin}</span>
                                        </td>
                                        <td style={{ textAlign: 'end' }}>
                                            <button onClick={() => handleBuy(item.price)} className='btn btn-danger btn-sm'>$ {item.price}</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Dialog>

            <Dialog header="Payment" visible={displayPositionSign} position={positionSign} style={{ width: '35vw', color: '#fff', background: '#001d41', padding: '1rem', borderRadius: '5px' }} onHide={() => onHideSign('displayPositionSign')} draggable={true} resizable={false}>
                <div style={{padding:'1rem'}}>
                    <table className="table table-hover" style={{ overflow: 'hidden', borderRadius:'5px' }}>
                        <thead style={{ fontWeight: '300', fontSize: '12px' }}>
                            <tr>
                                <th>Coins</th>
                                <th style={{ textAlign: 'end' }}>Amount</th>
                            </tr>
                        </thead>
                        <tbody style={{ fontWeight: '300', fontSize: '12px' }}>
                            {
                                buyCoin.map((item: any) =>
                                    <tr key={item.id}>
                                        <td>
                                            <img src="../images/coin.png" style={{ width: '20px' }} alt="coin" /> <span style={{ fontWeight: 'bold', fontSize: '14px' }}> &nbsp; {item.coin}</span>
                                        </td>
                                        <td style={{ textAlign: 'end' }}>
                                            <button onClick={() => handleBuy(item.price)} className='btn btn-danger btn-sm'>$ {item.price}</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Dialog>
        </div>
    )
}

export default Account