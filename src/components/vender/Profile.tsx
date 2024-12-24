import React, { useEffect, useState } from 'react';
import './vender.css'
import { countryData } from './country';
import axios from "axios";
import newList from './newList.json';
import newdata from './countries.json';

import newdatas from './states.json';
import newdatac from './cities.json';
import { postProfileData } from '../../services/apiService';


const Profile = () => {

 // const [country, setCountry] = useState<any>();
  const [city, setCity] = useState<any>([]);
  const [allstate, setAllstate] = useState<any>([]);
  const [search, setSearch] = useState<any>([]);

  const [newlistcountry, setNewlistcountry] = useState<any>(newdata[2].data);
  const [newliststate, setNewliststate] = useState<any>(newdatas.data);
  const [newlistcity, setNewlistcity] = useState<any>(newdatac[2].data);

  // profile data
  const [orgName, setOrgName] = useState<any>('');
  const [imagefile, setImagefile] = useState(null);
  const [country, setCountry1] = useState<any>('');
  const [stateselected, setStateselected] = useState<any>('');
  const [city1, setCity1] = useState<any>('');
  const [address, setAddress] = useState<any>('');

  let newCountry:any = "";
  let newStatedata:any = "";
  
  const handleChange = (event:any) =>{
    let search = event.target.value;
    newlistcountry.map((item:any)=>{
      if(item.name === search){
        newCountry = item;
        setCountry1(item.name);
        return;
      }
    });
    const statelist = newliststate.filter((item:any)=>item.countryId === newCountry.id);
    setAllstate(statelist);
  }

  const handleStateChange = (event:any) => {
    let search = event.target.value;
    allstate.map((item:any)=>{
      if(item.name === search){
        newStatedata = item;
        setStateselected(item.name);
        return;
      }
    });
    console.log(newStatedata);
    const citylist = newlistcity.filter((item:any)=>item.stateId === newStatedata.id);
    setCity(citylist);
  }

  const handleCityChange = (event:any) => {
    let search = event.target.value;
    setCity1(search);
  }

  const handleImageChange = (event: any) =>{
    setImagefile(event.target.files[0]);
  }

  async function handleProfile (e:any) {
    e.preventDefault();
    try{

      let userData = JSON.parse(localStorage.getItem('LoginData')!);
      let accountNo = userData.accNumber;

      const formData = new FormData();
      formData.append('orgName', orgName);
      formData.append('imagefile', imagefile!);
      formData.append('country', country);
      formData.append('state', stateselected);
      formData.append('city', city1);
      formData.append('address', address);
      formData.append('accountNo', accountNo);

      const response = await postProfileData(formData);
      console.log(response);
    } catch(error: any){
      console.log(error);
    }
  }


  return (
      <div className="p-4 d-flex justify-content-center">
          <div className='p-4' style={{width:'30%', borderRadius:'10px', background: 'white'}} >
              <h4>Vendor Profile</h4>
              <form onSubmit={handleProfile}>
                  <div className="email">
                      <label>Profile Image</label>
                      <input type="file" accept="image/*" onChange={handleImageChange} className="form-control form-control-sm d-block w-100" name="image" placeholder="Select Image" />
                  </div>
                  <div className="email">
                      <label>Organization Name</label>
                      <input className="form-control form-control-sm d-block w-100" onChange={e=>setOrgName(e.target.value)} name="organization" placeholder="Enter Organization Name" />
                  </div>
                  <div className="email">
                      <label>Country</label>
                      <select className='form-select-sm form-select' onChange={handleChange} name="country" id="country">
                        {
                          newlistcountry.map((item: any, index: number) => {
                            return <option key={index} value={item.name}>{item.name}</option>
                          })
                        }
                      </select>
                  </div>
                  <div className="email">
                      <label>States</label>
                      <select className='form-select-sm form-select' onChange={handleStateChange} name="country" id="country">
                        {
                          allstate.map((item: any, index: number) => {
                            return <option key={index} value={item.name}>{item.name}</option>
                          })
                        }
                      </select>
                  </div>
                  <div className="email">
                      <label>City</label>
                      <select className='form-select-sm form-select' onChange={handleCityChange} name="country" id="country">
                        {
                          city.map((item: any, index: number) => {
                            return <option key={index} value={item.name}>{item.name}</option>
                          })
                        }
                      </select>
                  </div>
                  <div className="email">
                      <label>Address</label>
                      <input className="form-control form-control-sm d-block w-100" onChange={e=>setAddress(e.target.value)} name="address" placeholder="Enter Address" />
                  </div>
                  <div className="email">
                      <button className='btn btn-warning btn-sm w-100 mt-4'>Submitt</button>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Profile
