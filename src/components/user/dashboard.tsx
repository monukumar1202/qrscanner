import { Outlet, Route, Routes } from "react-router-dom"
import DataCards from "../data/page"
import { useState } from "react"
import Header from "../header/page"


const UserDashboard = () => {

    return( 
        <div style={{overflow:'auto'}}>
            {/* <Header /> */}
            <Outlet />
        </div>
    )
}

export default UserDashboard