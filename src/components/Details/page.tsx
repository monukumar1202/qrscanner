import './details.css';
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Details = (data: any) => {


    const [totalBalance, setTotalBalance] = useState<any>(5000);

    const [dataItems, setDataItems] = useState<any>([]);

    // const [flag, setFlag] = useState(true);

    const totalItems = dataItems.reduce((accumulator: any, item: any) => {
        return accumulator + item.quantity;
    }, 0);

    // Calculate total price of items in the cart
    const totalPrice = dataItems.reduce((accumulator: any, item: any) => {
        return accumulator + item.quantity * item.productPrice;
    }, 0);

    const balance:any = (totalBalance - (totalPrice * 2))

    useEffect(() => {
        const dataItm = JSON.parse(localStorage.getItem('cardItems')!);
        setDataItems(dataItm);
    }, [])


    function handleProceed() {
        // if (data.data == "Account") {
        //     navigate('/login')
        // } else {
        //     navigate('/payment')
        // }
    }

    // Function to increase the quantity of an item
    const increaseQuantity = (id: any) => {
        setDataItems((prevCart: any) =>
            prevCart.map((cartItem: any) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    // Function to decrease the quantity of an item
    const decreaseQuantity = (id: any) => {
        setDataItems((prevCart: any) => {
            const existingItem = prevCart.find((cartItem: any) => cartItem.id === id);
            if (existingItem.quantity > 1) {
                return prevCart.map((cartItem: any) =>
                    cartItem.id === id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                );
            } else {
                return prevCart.filter((cartItem: any) => cartItem.id !== id);
            }
        });
    };

    const handleClickImage = (iamge: any) => {
        const imageD = iamge && iamge.data ? `data:image/png;base64,${iamge.data}` : '';
        return imageD
    }

    return (

        <div className="p-3" style={{ background: '#EAEDED' }}>
            <div className="mainCard">
                <div className='itemCard'>
                    <div style={{ borderBottom: '1px solid #a9abaa' }}>
                        <h4>Cart Details</h4>
                    </div>
                    {
                        dataItems.map((item: any, index: number) =>
                            <div key={index} style={{ borderBottom: '1px solid #a9abaa', padding: '10px' }} className='d-flex'>
                                <div className='itemImg'>
                                    <img className="card-img-top" src={handleClickImage(item.productImage)} height="60" style={{ width: '150px', borderRadius: '5px', marginTop: '2rem' }} />
                                </div>
                                <div className="ms-3 w-100" >
                                    <div className='d-flex justify-content-between' style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                        <div>{item.productName}</div>
                                        <div>$ {item.productPrice}</div>
                                    </div>
                                    <div>
                                        <dt>Rating</dt>
                                        <dd>
                                            <span style={{ background: '#0b852b', padding: '6px', borderRadius: '5px', color: '#fff', fontSize: '12px' }}>{item.rating.rate} <span className="bi bi-star-fill text-white"></span></span> [{item.rating.count}] ratings
                                        </dd>
                                    </div>
                                    <div>
                                        <dt>Quantity</dt>
                                        <dd style={{ width: '20%', marginTop: '5px' }}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend" onClick={() => decreaseQuantity(item.id)}>
                                                    <span className="input-group-text bi bi-dash cursor: 'pointer'"></span>
                                                </div>
                                                <input value={item.quantity} type="text" className="form-control" readOnly style={{ height: '30px' }} />
                                                <div className="input-group-append" onClick={() => increaseQuantity(item.id)}>
                                                    <span className="input-group-text bi bi-plus cursor: 'pointer'"></span>
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className="d-flex justify-content-end h5">
                        <span style={{ fontWeight: 'bold' }}>Total ({totalItems} items): $ {totalPrice}</span>
                    </div>
                </div>
                <div className='buy'>
                    <div className='mt-4'>
                        <div style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', width: '100%' }}>
                            <div>
                                <h6 style={{ fontWeight: 'bold', textAlign: 'end' }}> Total ({totalItems} items):</h6>
                            </div>
                            <div>
                                <h5 style={{ fontWeight: 'bold', textAlign: 'start' }}>&nbsp;$ {totalPrice}</h5>
                            </div>
                        </div>
                        <div className='text-success' style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', width: '100%' }}>
                            <div className='p-1 '>
                                <h6 style={{ fontWeight: 'bold', textAlign: 'end' }}> Balance :</h6>
                            </div>
                            <div>
                                <h5 style={{ fontWeight: 'bold', textAlign: 'start' }}><img src="../images/coin.png" alt="coin" style={{ width: '20px' }} /> 5000</h5>
                            </div>
                        </div>
                        <hr />
                        <div className='text-danger' style={{ display: 'grid', gridTemplateColumns: '6fr 6fr', width: '100%' }}>
                            <div className='p-1'>
                                <h6 style={{ fontWeight: 'bold', textAlign: 'end' }}> Balance after Purchase :</h6>
                            </div>
                            <div>
                                <h5 style={{ fontWeight: 'bold', textAlign: 'start' }}> <img src="../images/coin.png" alt="coin" style={{ width: '20px' }} /> {balance}</h5>
                            </div>
                        </div>
                        <div className='p-4'>
                            {balance > -1 ? <button onClick={() => handleProceed()} className='btn btn-warning w-100' style={{ borderRadius: '20px' }}> Proceed to Buy</button> : <button className='btn btn-warning w-100' style={{ borderRadius: '20px' }}> Buy more Tokens</button>} 
                        </div>
                        <div className='p-4'>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details