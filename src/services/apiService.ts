import axios from "axios";


const baseurl:string = "http://192.168.131.5:5000";
const baseurl1:string = "http://192.168.131.46:30095";

export const loginservice = async (e: any) => {
    try{
        const responce = await axios.post(baseurl1+'/user/validation', e);
        // console.log(responce)
        return responce.data;
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
};

export const registerservice = async (e: any) => {
    try{
        const responce = await axios.post(baseurl1+'/user/enroll', e);
        // console.log(responce)
        return responce.data;
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
};

export const addProductService = async (e: any) => {
    try{
        const responce = await axios.post(baseurl1+'/product/insert', e, {
            headers:{
                'Content-Type' : 'multipart/form-data',
            }
        });
        // console.log(responce)
        return responce.data;
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
};

export const getProductService = async (e: any) => {
    try{
        const responce = await axios.post(baseurl1+'/product/get', e, {
            headers:{
                'Content-Type' : 'multipart/form-data',
            }
        });
        // console.log(responce)
        return responce.data;
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
};

export const postProfileData = async (e: any) => {
    try{
        const responce = await axios.post(baseurl1+'/user/update/vendor', e, {
            headers:{
                'Content-Type' : 'multipart/form-data',
            }
        });
        // console.log(responce)
        return responce.data;
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
};

// Approve/Reject product API

export const approveRejectProduct = async (e: any) => {
    try{
        const responce = await axios.post(baseurl1+'/product/update/status', e, {
            headers:{
                'Content-Type' : 'multipart/form-data',
            }
        });
        // console.log(responce)
        return responce.data;
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
};

// Delete product API

export const DeteteProduct = async (e: any) => {
    try{
        const responce = await axios.post(baseurl1+'/product/remove', e, {
            headers:{
                'Content-Type' : 'multipart/form-data',
            }
        });
        // console.log(responce)
        return responce.data;
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
};

// buy Tokens from Backend API

export const buyTokens = async (e: any) => {
    try{
        const responce = await axios.post(baseurl1+'/user/update/coin', e, {
            headers:{
                'Content-Type' : 'multipart/form-data',
            }
        });
        // console.log(responce)
        return responce.data;
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
};


// Get all user API
export const getallUser = async () => {
    try{
        const responce = await axios.get(baseurl1+'/user/getall');
        return responce.data
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
}


export const allTxn = async () => {
    try{
        const responce = await axios.get(baseurl+'/api/transaction');
        return responce.data
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
}

export const coins = async () => {
    try{
        const responce = await axios.get(baseurl+'/api/coins');
        return responce.data
    } catch (err:any){
        console.error('Error creating post:', err);
        throw err;
    }
}
