import React, { useEffect, useState } from 'react'
import { Pagination, Table } from 'react-bootstrap'
import { getallUser } from '../../services/apiService';

const Users = () => {

  let active = 1;
  let items = [];
  const [user, setUser] = useState<any>([]);

  async function loadUser(){

    const userData = await getallUser();
    // console.log(userData.data);
    const specificUser = userData.data.filter((user:any) => user.userRole === 'Customer')
    setUser(specificUser)
  }

  useEffect(()=>{
    loadUser()
  }, [])

  
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div className='p-3'>
      <Table striped bordered hover size="sm">
        <thead className='text-center'>
          <tr>
            <th>Sr.No</th>
            <th>Account No.</th>
            <th>Name</th>
            <th>user ID</th>
            <th>Mobile</th>
            <th>Role</th>
            <th>Tokens</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {
            user.map((item: any, index: any) => {
              return (
                <tr>
                  <td>{index = index + 1}</td>
                  <td>{item.userAccountNumber}</td>
                  <td>{item.userName}</td>
                  <td>{item.userId}</td>
                  <td>{item.userMobile}</td>
                  <td>{item.userRole}</td>
                  <td>{item.userCoin}</td>  
                </tr>
              )
            })
          }
        </tbody>
      </Table>

      <div className='d-flex justify-content-center'>
        <Pagination size="sm">{items}</Pagination>
      </div>
    </div>

  )
}

export default Users
