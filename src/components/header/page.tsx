import { Dialog } from "primereact/dialog"
import { Link, useNavigate } from "react-router-dom"
import MainLogin from "../mainLogin/page"
import { useEffect, useState } from "react";
import { allTxn, coins } from "../../services/apiService";
import './header.css';
import Liveprice from "./liveprice";
import Account from "./account";
import Cart from '../header/cart';
import Nav from "./nav";


const Header = () => {

    const [cartCount, setCartCount] = useState<any>([]);
    const [childData, setChildData] = useState<any>([]);

    const setDataItem = (name: any) => {
        setCartCount((prevCart: any) => {
            const existingItem = prevCart.find((cartItm: any) => cartItm.id == name.id);
            if (existingItem) {
                return prevCart.map((cartItm: any) =>
                    cartItm.id === name.id
                        ? { ...cartItm, quantity: cartItm.quantity + 1 }
                        : cartItm
                );
            } else {
                return [...prevCart, { ...name, quantity: 1 }];
            }
        })
    }

    return (
        <header className='w-100' style={{ background: '#011335', height:'110px' }}>
            <div className='topnav'>
                <div>
                    {/* <Header /> */}
                    <div className="d-flex justfy-content-between">
                        <div>
                            <span className="fs-3 fw-bold ms-3" ><Link to="/" className='text-white' style={{ textDecoration: 'none' }}>SPYDR360</Link></span>
                            <div className="fw-bold ms-3" style={{ color: '#fff' }}>Web3 Market Place</div>
                        </div>

                    </div>
                </div>
                <div>
                    <div>
                        <div className='input-group input-group-sm p-1'>
                            <input type="text" className="form-control" />
                            <button className='btn btn-warning bi bi-search'></button>
                        </div>
                    </div>
                </div>
                <div className='d-flex  justify-content-between'>
                    <Liveprice />
                    <Account uData={childData} />
                    <Cart DataItems={cartCount} />
                </div>
            </div>
            <div style={{ padding: '0', marginTop: '-30px' }}>
            </div>
                <Nav />
        </header>






    )
}

export default Header