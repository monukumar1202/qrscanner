"use client"

import { useEffect, useState, useReducer } from "react";

import data from './exampleData/Exdata.json';
import { BsStarFill } from "react-icons/bs";
import { getProductService } from "../../services/apiService";

const DataCards = (props: any) => {

    const { getItems } = props;

    // const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{ id: 0, title: '', category: '', description: '', image: '', price: 0, rating: { rate: 0, count: 0 } }]);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState<any>([]);

    const [showbtn, setShowbtn] = useState<boolean>(true)

    async function LoadProducts() {
        let userData = JSON.parse(localStorage.getItem('LoginData')!);
        let accountNo = userData.accNumber;
        let role = userData.role;
        let name = userData.name;
        let status = "Approved";

        const formData = new FormData()

        formData.append('accountNo', accountNo);
        formData.append('role', role);
        formData.append('name', name);
        formData.append('status', status);
        // console.log('FormData :', Array.from(formData.entries()));
        const response = await getProductService(formData);
        // console.log(response);
        setProducts(response.data);
    }

    function handleAddClick(product: any) {
        cartItems.push(product);
        getItems(product)
        // console.log(product);
        setCartCount(cartItems.length);


        // props.getItems(product);
        setShowbtn(false)
    }


    useEffect(() => {

        LoadProducts();

    }, [])


    const colors = {
        orange: "#F2C265",
        grey: "a9a9a9"
    }

    
    const handleClickImage = (iamge: any) => {
        const imageD = iamge && iamge.data ? `data:image/png;base64,${iamge.data}` : '';
        return imageD
    }

    return (
        <div className="p-3" style={{ background: '#EAEDED' }}>
            <section>
                <main className="d-flex flex-wrap overflow-auto">
                    {
                        products.map((product: any, index:any) =>

                            <div key={index} className="card p-2 m-2" style={{ width: '245px' }}>
                                <div className="p-2" style={{ textAlign: 'center' }}>
                                    <img src={handleClickImage(product.productImage)} alt={product.image} className="card-img-to" height="50px" width="160px" />
                                </div>
                                <div className="card-header p-2" style={{ height: '60px', background: 'transparent' }}>
                                    <div className="d-flex justify-content-between">
                                        <div style={{ fontWeight: 'bold' }}>{product.productName}</div>
                                        <div style={{ fontWeight: 'bold' }}>$ {product.productPrice}</div>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '12px' }}>{product.productAddress}</p>
                                    </div>
                                </div>
                                <div className="card-body" style={{ padding: '2px' }}>
                                    <dl>
                                        <dt>Description</dt>
                                        <dd style={{ height: '100px', overflow: 'auto' }}>{product.productDescription}</dd>
                                        <dt>Rating</dt>
                                        <dd>
                                            {
                                                [1, 2, 3, 4, 5].map((item) => {
                                                    return (
                                                        <>
                                                            <BsStarFill key={item} size={16}
                                                                color={item < product.rating.rate ? colors.orange : colors.grey} />
                                                        </>
                                                    )
                                                })
                                            }
                                            <span className="text-secondary p-1 fw-bold">{product.rating.count} ratings</span>
                                        </dd>
                                    </dl>
                                </div>
                                <div>
                                    <button onClick={() => handleAddClick(product)} className="btn btn-warning btn-sm bi bi-cart4 w-100"> Add to Cart </button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}

export default DataCards

