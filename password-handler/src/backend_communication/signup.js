import RestRequest from '../backend_communication/RestRequest';
import { login } from './login';

export function signup(uname, setLogin, email, password, userIP, setPFP, errorCallback) 
{
    let requestData = {};
    requestData["uname"] = uname;
    requestData["email"] = email;
    requestData["password"] = password;
    requestData["ip"] = userIP;
    RestRequest.post("/user", requestData, null, (response) => {
        if (response.status === 201) {
            login(uname, setLogin, password, userIP, false, setPFP, errorCallback);
            return;
        } 
        if (response.status === 470) {
            errorCallback("UNAME_TAKEN");
            return;
        } 

        if (response.status === 471) {
            errorCallback("EMAIL_TAKEN");
            return;
        } 


    });
}