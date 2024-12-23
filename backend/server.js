import app from './app.js';
import 'dotenv/config'

import mongoose from 'mongoose';


const PORT = process.env.PORT || 7000;
mongoose.connect(`mongodb+srv://tosifkankod146:${process.env.DB_PASSWORD}@guestbook.tkfse.mongodb.net/`).then(() => {
    app.listen(PORT, () => { 
        console.log("server connected on port: ", PORT);  
    })
  
}).catch((err) => {
    console.log(err);
  
}) 