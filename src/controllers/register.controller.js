import { Users } from "../models/credentials.model.js";
import { app } from "../config/express.js";
import  path  from "path";



app.get('/register',async (req,res)=>{
    const fileDirectory = path.resolve('src','public');
    res.sendFile('register.html',{root:fileDirectory });
})

app.post('/register',async (req,res)=>{
    let inUse=true;
    const UserDB = await Users.find();
    for(let user of UserDB)
    {
        if(user.email==req.body.email)
        {
            inUse=false;   
            console.log('Email already used');
            res.redirect('/register');
            
        }
        if(user.password==req.body.password)
        {

            inUse=false;
            console.log('Password already used');
            res.redirect('/register');
            
        }
    }
    if(inUse==true)
    {
        console.log("Success");
        Users.create({email:req.body.email , password:req.body.password});
        res.redirect('/register');
    }

})
