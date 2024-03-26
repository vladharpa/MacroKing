import { Users } from "../models/credentials.model.js";
import { app } from "../config/express.js";
import  path  from "path";



const fileDirectory = path.resolve('src','views');

app.get('/register', async (req,res) => {
    res.render('register', {inUse: false});
    
});

app.post('/register',async (req,res)=>{
    let inUse=false;
    const UserDB = await Users.find();
    for(let user of UserDB)
    {
        if(user.email==req.body.email)
        {
            inUse=true;   
            console.log('erroare');
            res.render('./register.ejs',{inUse:inUse});
            
        }
        if(user.password==req.body.password)
        {

            inUse=false;
            console.log('erroare');
            res.render('./register.ejs',{inUse:inUse});
            
        }
    }
    if(inUse==false)
    {
        console.log("succes");
        await Users.create({email:req.body.email , password:req.body.password});
        res.sendFile('D:/WEB/Projects/MacroKing/src/public/registerSuccesfull.html')
        
    }


    
})

