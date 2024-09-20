import dotenv from 'dotenv';

//[Load environment from .env files]
dotenv.config();

interface Config{
    port:number,
    accessKey:string,
    secretAccessKey:string,
    sessionToken:string 
};

const config: Config = {
    port: parseInt(process.env.PORT as string) || 8000,
    accessKey: process.env.ACCESS_KEY as string,
    secretAccessKey: process.env.SECRET_ACCESS_KEY as string,
    sessionToken: process.env.SESSION_TOKEN as string  
};

export default config;