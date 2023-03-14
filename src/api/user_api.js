import Apimanager from "./Apimanager";

export const user_login = async data =>{
    try {
        const result = await Apimanager("/user/login",{
            method:"POST",
            Headers:{
                'content-type':"application/json"
            },
            data:data
        })
    } catch (error) {
       return error.response.data 
    }
};