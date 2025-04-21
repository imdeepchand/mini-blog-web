import axios from 'axios';
import { APIENDPOINT } from '../config';

class AuthService {
 static async signin(body: {username:string,password:string}):Promise<any> {
   return await axios.post(`${APIENDPOINT}/signin`, body);
 }

 static async signup(body: {name: string;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;}):Promise<any> {
   return await axios.post(`${APIENDPOINT}/signup`, body);
 }
}

export default AuthService;