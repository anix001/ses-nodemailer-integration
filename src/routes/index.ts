import { Router } from "express";
import sendmail from "../service/sendMail";

const router = Router();

//[Routes]
router.post('/sendmail',(req, res)=>{
   sendmail();
});

export default router;