import {User} from "../models/user.model.js"
export const register =async (req,res) => {
    try{
        const{fullname,email,phoneNumber,password,role}=req.body;
        if(!fullname || !email ||!phoneNumber ||!password || !role)
        {
            
        }
    }
}