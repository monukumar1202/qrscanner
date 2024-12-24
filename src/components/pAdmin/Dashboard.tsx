import { Outlet } from "react-router-dom";
import Pnav from "./Pnav";
import Header from "../header/page";


const PlatformAdmin = () => {

    return(
        <div style={{height:'100%'}}>
            <div>
                {/* <Header /> */}
                <Pnav />
            </div>
                <Outlet />
        </div>
    )
}

export default PlatformAdmin;