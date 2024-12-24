import React, { Suspense, useEffect } from 'react';
import './Dashboard.css';

import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter, Link } from "react-router-dom"
import Header from '../header/page';
import Liveprice from '../header/liveprice';
import Account from '../header/account';
import Cart from '../header/cart';
import Nav from '../header/nav';
import VenderDashboard from '../vender/Dashboard';
import UserDashboard from '../user/dashboard';
import PlatformAdmin from '../pAdmin/Dashboard';
import Home from '../Home/page';
import Users from '../pAdmin/Users';
import Venders from '../pAdmin/Venders';
import Products from '../pAdmin/Products';
import Request from '../pAdmin/Request';
import Report from '../vender/Report';
import VendorProduct from '../vender/VendorProduct';
import Profile from '../vender/Profile';
import AddProduct from '../vender/AddProduct';
import Delete from '../pAdmin/Delete';

// Lazy load route components
// const Login = React.lazy(() => import('../Login/page'));
const DataCards = React.lazy(() => import('../data/page'));
const Details = React.lazy(() => import('../Details/page'));
const MainLogin = React.lazy(() => import('../mainLogin/page'));
const Payment = React.lazy(() => import('../payment/page'));
const ForgetPassword = React.lazy(() => import('../forgetpassword/page'));
const Register = React.lazy(() => import('../registerUser/page'));
const SmartContactAudit = React.lazy(() => import('../SmartContactAudit/page'));
const SmartContactMonitoring = React.lazy(() => import('../SmartContactMonitoring/page'));
const ChangePassord = React.lazy(() => import('../changepassword/page'));


// Vendor Routers

const AddProductData = React.lazy(() => import('../vender/NewAddProduct'));

const Dashboard = (ref: any) => {

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
        <BrowserRouter>
            <div>
                <header className='w-100' style={{ background: '#011335', height: '110px' }}>
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
                        <Nav />
                    </div>
                </header>

                <section style={{ overflow: 'auto' }}>
                    <Suspense fallback={<div>Loading page...</div>} >
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<MainLogin send={setChildData} />} />
                            <Route path="/user" element={<UserDashboard />} >
                                <Route index element={<DataCards getItems={setDataItem} />} />
                                <Route path="details" element={<Details />} />
                                <Route path="payment" element={<Payment />} />
                            </Route>
                            <Route path="/vendor" element={<VenderDashboard />} >
                                <Route index element={<Report />} />
                                <Route path="vproducts" element={<VendorProduct />} />
                                <Route path="profile" element={<Profile />} />
                                {/* <Route path="addproduct" element={<AddProduct />} /> */}
                                <Route path="addproduct" element={<AddProductData />} />

                            </Route>
                            <Route path="/padmin" element={<PlatformAdmin />} >
                                <Route index element={<Request />} />
                                <Route path="users" element={<Users />} />
                                <Route path="vendors" element={<Venders />} />
                                <Route path="products" element={<Products />} />
                                <Route path="delete" element={<Delete />} />
                            </Route>
                            <Route path="forgetpassword" element={<ForgetPassword />} />
                            <Route path="register" element={<Register />} />
                            <Route path="changePassword" element={<ChangePassord />} />
                            <Route path="smartcontactaudit" element={<SmartContactAudit />} />
                            <Route path="smartcontactmonitoring" element={<SmartContactMonitoring />} />
                            <Route path="*" element={<h2 className="text-danger">Not Found</h2>} />
                        </Routes>
                    </Suspense>
                </section>
            </div>
        </BrowserRouter>
    )
}

export default Dashboard