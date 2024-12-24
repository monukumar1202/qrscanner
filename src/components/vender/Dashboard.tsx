import { Tab, Tabs } from "react-bootstrap"
import { Outlet } from "react-router-dom"
import Report from "./Report"
import AddProduct from "./AddProduct"
import Vnav from "./Vnav"
import Header from "../header/page"


const VenderDashboard = () => {
    return (
        <>
            {/* <Tabs
                defaultActiveKey="Report"
                id="uncontrolled-tab-example"
                className="mb-3" >
                <Tab eventKey="Report" title="Report">
                    <Report />
                </Tab>
                <Tab eventKey="Request" title="Request">
                    <AddProduct />
                </Tab>
            </Tabs> */}
            <div style={{height:'100%'}}>
            <div>
                {/* <Header /> */}
                <Vnav />
            </div>
                <Outlet />
        </div>
        </>
    )
}

export default VenderDashboard