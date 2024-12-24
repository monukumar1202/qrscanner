import { Dialog } from "primereact/dialog"
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Cart = (DataItems: any) => {
    const [cartCount, setCartCount] = useState<any>([]);
    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState<any>('top-right');

    const udata = JSON.parse(localStorage.getItem('LoginData')!);

    const navigate = useNavigate();

    const dialogFuncMap: any = {
        'displayPosition': setDisplayPosition,
    }

    // Function to increase the quantity of an item
    const increaseQuantity = (id: any) => {
        setCartCount((prevCart: any) =>
            prevCart.map((cartItem: any) =>
                cartItem.id === id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
        );
    };

    // Function to decrease the quantity of an item
    const decreaseQuantity = (id: any) => {
        setCartCount((prevCart: any) => {
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

    const onClick = (name: any, position: any) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name: any) => {
        dialogFuncMap[`${name}`](false);
    }

    const onProceed = (name: any) => {
        dialogFuncMap[`${name}`](false);
        localStorage.setItem('cardItems', JSON.stringify(cartCount));
        navigate('/user/details')
    }

    useEffect(() => {
               
        setCartCount(DataItems.DataItems);

    }, [DataItems])

    const renderFooter = (name: any) => {
        return (
            <div>
                <button onClick={() => onHide(name)} className="btn btn-light p-button-text" style={{ fontWeight: 'bold' }}>Cancel</button>
                <button onClick={() => onProceed(name)} autoFocus className="btn btn-primary ms-2"> <Link to="/details" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>Proceed</Link></button>
            </div>
        );
    }


    return (
        <div className='userArea'>
            

            <div className="fs-5 p-1">

                <button data-bs-target="#cart" data-bs-toggle="modal" onClick={() => onClick('displayPosition', 'top-right')} className="bi bi-cart3 btn btn-light position-relative mx-4" style={{ marginTop: '4px', border: 'none', background: 'transparent', color: '#fff' }}>
                    <span className="badge rounded position-absolute rounded-circle bg-danger" style={{ marginTop: '-4px', fontSize: '12px' }}> {cartCount.length} </span>
                </button>

                <Dialog header="Your Cart Items" visible={displayPosition} position={position} modal style={{ color: '#fff', background: '#001d41', width: '50vw', padding: '1rem', borderRadius: '5px' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}
                    draggable={false} resizable={false}>
                    <div className='p-1' style={{ textAlign: 'end' }}>
                        <h5>Balance : &nbsp;
                            <img src="../images/coin.png" alt="coin" style={{ width: '25px' }} /> &nbsp;{udata.coin}
                        </h5>

                    </div>
                    <table className="table table-hover" style={{background:'#fff', borderRadius:'5px',padding:'1rem'}}>
                        <thead>
                            <tr className='tabletitle'>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Tokens</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartCount.map((item: any) =>
                                    <tr key={item.id}>
                                        <td>{item.productName}</td>
                                        <td>
                                            $ {item.productPrice}
                                        </td>
                                        <td>
                                            {item.productPrice * 2}
                                        </td>
                                        <td style={{ width: '25%' }}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend" onClick={() => decreaseQuantity(item.id)}>
                                                    <span className="input-group-text bi bi-dash cursor: 'pointer'"></span>
                                                </div>
                                                <input value={item.quantity} type="text" className="form-control" readOnly style={{ height: '30px' }} />
                                                <div className="input-group-append" onClick={() => increaseQuantity(item.id)}>
                                                    <span className="input-group-text bi bi-plus cursor: 'pointer'"></span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </Dialog>
            </div>
        </div>

    )
}

export default Cart