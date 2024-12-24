import React, { useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap'
// import data from './exampleData/Exdata.json';
// import data from '../data/exampleData/Exdata.json';
import { DeteteProduct, approveRejectProduct, getProductService } from '../../services/apiService';
import { Dialog } from 'primereact/dialog';

const Delete = () => {
  
  // const [products, setProducts] = useState<any>([{ id: 0, title: '', category: '', description: '', image: '', price: 0, rating: { rate: 0, count: 0 } }]);
  const [products, setProducts] = useState<any>([]);
  const [visible, setVisible] = useState(false);
  const [imageData, setImage] = useState<any>();
  const [update, setUpdate] = useState('');

  async function LoadProducts() {
    try {
      let userData = JSON.parse(localStorage.getItem('LoginData')!);
      let accountNo = userData.accNumber;
      let role = userData.role;
      let name =  userData.name;
      let status = "Delete Pending";

      const formData = new FormData()

      formData.append('accountNo', accountNo);
      formData.append('role', role);
      formData.append('name', name);
      formData.append('status', status);
      console.log('FormData :', Array.from(formData.entries()));
      const response = await getProductService(formData);
      console.log(response);
      setProducts(response.data);
    } catch (error: any) {
      console.log(error);
    }
  }

  async function hancleRequestClick(item: any) {
    const formData = new FormData()
    const productId = item.productId;
    const status = "Delete Pending";

    formData.append('productId', productId);
    formData.append('newStatus', status);
    const response = await DeteteProduct(formData);
    if (response.data === 'success') {
      setUpdate('success');
      alert('Product Deleted successfully');
    }
  }

  useEffect(() => {
    LoadProducts();
    setUpdate('');
  }, [update])


  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const handleClickImage = (iamge: any) => {
    const imageD = iamge && iamge.data ? `data:image/png;base64,${iamge.data}` : '';
    setImage(imageD)
    setVisible(true)
  }

  return (
    <div className='p-3'>
      <Table striped bordered hover size="sm">
        <thead className='text-center'>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Address</th>
            <th>Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            products.map((item: any, index: any) => {
              return (
                <tr>
                  <td>{index = index + 1}</td>
                  <td>{item.productName}</td>
                  <td>{item.productCategory}</td>
                  <td>{item.productPrice}</td>
                  <td>{item.productAddress}</td>
                  <td><a style={{cursor:'pointer'}} onClick={() => handleClickImage(item.productImage)}>Image</a></td>
                  <td>
                    <span style={{
                      color : (item.status === "Delete Pending"  ? '#FF0000' : '#FF0000')
                    }}>{item.status}</span>
                    </td>
                  <td>
                    <button className="btn btn-danger btn-sm bi bi-x rounded-circle"  onClick={() => hancleRequestClick(item)} data-toggle="tooltip" data-placement="top" title="Delete"></button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

      <Dialog header="Image" visible={visible} style={{ width: '30vw', background: '#001d41', color: '#fff', padding: '1rem', borderRadius: '5px' }} onHide={() => { if (!visible) return; setVisible(false); }}>
        <div style={{textAlign:'center'}}>
          {imageData ? (
            <img src={imageData} alt="Product" style={{ maxWidth: '100%', height: 'auto' }} />
          ) : (
            <p>No image available</p>
          )}
        </div>
      </Dialog>
      <div className='d-flex justify-content-center'>
        <Pagination size="sm">{items}</Pagination>
      </div>
    </div>
  )
}

export default Delete
