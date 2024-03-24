import express, { urlencoded } from "express" // import express
import morgan from "morgan";
import methodOverride from "method-override";
export const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan("tiny")) //logging
app.use(methodOverride("_method")) // override for put and delete requests from forms
app.use(urlencoded({extended: true})) // parse urlencoded request bodies
// View engine setup
app.use(express.static(path.join(__dirname, '../public'), { 
    index: false, 
    extensions: ['html', 'css', 'js'] 
}));


app.set('view engine', 'ejs');
app.set('views', 'src/views');
