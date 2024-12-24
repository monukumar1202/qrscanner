import BasicDemo from './Carousal';
import Carousal from './Carousal'
import Footer from './Footer';
import HomeNav from './HomeNav';
import './home.css';

const Home = () => {
    return (
        <>
            <div className="container-fluid homepage-bgimage">
                {/* <HomeNav /> */}
                <div className="text">
                    <div className='texttitle'>
                        <div>
                            <div>Spydr360</div>
                            <p>Web3 market place</p>
                        </div>
                    </div>
                    <div className='textimages'>
                        <img className='coin' src="../images/coin-1.png" alt="coin" width="350" />
                    </div>
                </div>
            </div>
            <div className='text-center p-3'>
                <h4>Our Vendors</h4>
                <BasicDemo />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Home