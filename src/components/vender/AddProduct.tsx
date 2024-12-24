import { Field, Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';
import './vender.css';
import { addProductService } from '../../services/apiService';

const AddProduct = () => {

  const [image, setImage] = useState<any>(null);
  const [title, setTitle] = useState('');
  const [imagefile, setImagefile] = useState(null);
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    // cosnt  reader = new FileReader();
    setImagefile(file)
    if (file) {
      const reader: any = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  async function handleRequest(e: any) {
    e.preventDefault();
    try {
      let userData = JSON.parse(localStorage.getItem('LoginData')!);
      let accountNo = userData.accNumber;

      const formData = new FormData()

      formData.append('title', title);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('address', address);
      formData.append('description', description);
      formData.append('imagefile', imagefile!);
      formData.append('accountNo', accountNo);
      // console.log('FormData :', Array.from(formData.entries()));
      // let requestBody = { title, category, price, address, description, imagefile, accountNo };
      // console.log(requestBody);
      const response = await addProductService(formData);
      // console.log(response);
      if (response.data === "success") {
        alert('Product Added Successfully');
        navigate('/vendor')
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  // const handlePrice = (props:any)=>{
  // console.log(Number(props.currentTarget.value))
  // setPrice(Number(props.currentTarget.value))
  // }


  return (
    <div className="main-cont2 p-4" style={{ background: 'white' }}>
      <div className="w-100 text-start">
        <form className='registerform' onSubmit={handleRequest} >
          {/* <p className="text-dark text-start titlecard">Request product</p> */}
          <div className="email">
            <label>Product Title:</label>
            <input type="text" onChange={e => setTitle(e.target.value)} className="form-control form-control-sm d-block w-100" name="title" placeholder="Enter Product Name" />
          </div>
          <div className="email">
            <label>Product Category:</label>
            <input type="text" onChange={e => setCategory(e.target.value)} className="form-control form-control-sm d-block w-100" name="category" placeholder="Enter Product Category" />
          </div>
          <div className="email">
            <label>Product Price:</label>
            <input type="number" onChange={e => { setPrice(e.target.value) }} className="form-control form-control-sm d-block w-100" name="price" placeholder="Enter Product Price" />
          </div>
          <div className="email">
            <label>Product Address:</label>
            <input type="text" onChange={e => setAddress(e.target.value)} className="form-control form-control-sm d-block w-100" name="address" placeholder="Enter Product Address" />
          </div>
          <div className="email">
            <label>Product Image:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} className="form-control form-control-sm d-block w-100" name="image" placeholder="Enter address" />
          </div>
          <div className="email">
            <label>Product Description:</label>
            <textarea className="form-control form-control-sm d-block w-100" onChange={e => setDescription(e.target.value)} name="description" placeholder="Description" ></textarea>
          </div>
          <div className="email">
            <button type="submit" className="btn btn-warning btn-sm mt-3">Submit</button>
          </div>
        </form>
      </div>
      <div className='imagearea'>
        {
          image && <img src={image} alt="product image" className="img" />
        }
      </div>
    </div>
  )
}

export default AddProduct
