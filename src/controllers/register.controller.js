import { Users } from "../models/credentials.model.js";
import { app } from "../config/express.js";
import  path  from "path";



const fileDirectory = path.resolve('src','views');

app.get('/register', async (req,res) => {
    res.render('register', {inUse:undefined});
    
});

app.post('/register',async (req,res)=>{
    
    let EmailUsed=await Users.find({email:req.body.email});
    let PasswordUsed=await Users.find({password:req.body.password});
    if(EmailUsed[0]==undefined && PasswordUsed[0]==undefined)
    {
        if(req.body.password!=req.body.confirm_password){
            console.log('confirm error');
            res.render('register.ejs',{inUse:"ConfirmareEsuata"})
        }
        else{
            console.log('Uraaa');
            Users.create({email:req.body.email,password:req.body.password})
            res.sendFile("registerSuccesfull.html",{root:'src/public'})
        }
        
    }
    
    if(EmailUsed[0]!=undefined && PasswordUsed[0]==undefined)
    {
        console.log('email error');
        res.render("register.ejs",{inUse:"email"});
    }
    if(EmailUsed[0]==undefined && PasswordUsed[0]!=undefined)
    {
        console.log('password error');
        res.render("register.ejs",{inUse:"password"});
    }
    
     

})

