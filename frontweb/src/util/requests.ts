type LoginData = {
    username : string;
    password : string;
};

export const BASE_URL = process.env.REACT_APP_BASE_URL ?? 'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';

const basicHeader = () => 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET);

export const requestBackendLogin = (loginData : LoginData) => {
    const headers = {
        'Content-Type' : 'application/x-www-form-urlencoded',
        Authorization : basicHeader()
    };
    
};