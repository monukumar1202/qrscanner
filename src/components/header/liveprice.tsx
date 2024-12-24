import CurrencyDisplay from "../Price/page"


const Liveprice = () => {
    return (
        <div className="d-flex justfy-content-between ms-1">
            <div style={{ textAlign: 'center', marginRight:'1rem'}}>
                <img src="../images/coin.png" style={{ width: '30px', height: '30px' }} alt="coin" />
                <div>
                    <p style={{ fontSize: '14px', color: 'white', fontWeight: 'bold' }}>SPYDR </p>
                </div>
            </div>
            <div style={{ textAlign: 'center', color: '#fff', }}>
                {/* <CurrencyDisplay /> */}
                <img src="../images/trend.png" alt="trends" style={{ width: '210px', height: '55px' }} />
                <p>Price Trends</p>
            </div>
        </div>
    )
}

export default Liveprice