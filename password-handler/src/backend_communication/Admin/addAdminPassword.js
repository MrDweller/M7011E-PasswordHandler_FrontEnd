import RestRequest from "../RestRequest";
// import { login } from "../login";

export function addAdminPassword(setLogin, uname, email_token, password, ip, callback) {
    let config = {
        headers: {
            "email-token": email_token
        }
    };

    let requestData = {};
    requestData["password"] = password;

    RestRequest.post("/admin/" + uname, requestData, config, (response) => {
        if (response.status === 200) {
            //login(uname, setLogin, password, ip, true, () => {});
            callback(200);
            return;
        }
        if (response.status === 403) {
            callback(403);
            return;
        }


    });
}