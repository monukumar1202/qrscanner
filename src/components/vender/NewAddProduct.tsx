import React from 'react';
import './vender.css'

const NewAddProduct = () => {

    const categories = ['Smart Contact Audit', 'Smart Contact Monitoring'];
    const offer = ['Basic', 'Pro', 'Pro Plus'];
    return (
        <div className="p-4 d-flex justify-content-center">
            <div className='p-4' style={{width:'30%', borderRadius:'10px', background: 'white'}} >
                <h4>Add Product</h4>
                <form>
                    <div className="email">
                        <label>Product Category</label>
                        <select name="category" id="category" className='form-select-sm form-select'>
                            {
                                categories.map((item: any) => {
                                    return <option className='form-control' key={item} value={item}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="email">
                        <label>Offering</label>
                        <select name="category" id="category" className='form-select-sm form-select'>
                            {
                                offer.map((item: any) => {
                                    return <option className='form-control' key={item} value={item}>{item}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="email">
                        <label>Price</label>
                        <input className="form-control form-control-sm d-block w-100" name="description" placeholder="Price" />
                    </div>
                    <div className="email">
                        <label>Product Description</label>
                        <textarea className="form-control form-control-sm d-block w-100" name="description" placeholder="Enter Description" ></textarea>
                    </div>
                    <div className="email">
                        <button className='btn btn-warning btn-sm w-100 mt-4'>Add Request</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewAddProduct
