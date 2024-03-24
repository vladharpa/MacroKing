import { Users } from "../models/credentials.model.js";
import { app } from "../config/express.js";
import  path  from "path";



const fileDirectory = path.resolve('src','views');
app.get('/register', async (req,res) => {
    res.render('register.ejs', {inUse: false});
    
});

app.post('/register',async (req,res)=>{
    // let inUse=true;
    // const UserDB = await Users.find();
    // for(let user of UserDB)
    // {
    //     if(user.email==req.body.email)
    //     {
    //         inUse=false;   
    //         console.log('Email already used');
    //         res.render('register.ejs',{inUse});
            
    //     }
    //     if(user.password==req.body.password)
    //     {

    //         inUse=false;
    //         console.log('Password already used');
    //         res.render('register.ejs',{inUse});
            
    //     }
    // }
    // if(inUse==true)
    // {
    //     console.log("Success");
    //     Users.create({email:req.body.email , password:req.body.password});
    //     res.render('register.ejs',{inUse});
    // }
    res.render('register.ejs', { inUse: true });
})
