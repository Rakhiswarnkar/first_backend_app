import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB().then(()=>{
    // 8000 saves us when port gets failed in prod
app.listen(process.env.PORT || 8000, ()=>{
console.log(`port is running in ${process.env.PORT}`)
})
}).catch((error)=>{
console.log('mongoDB connection failed-->', error)
})

// import express from 'express';
 

// const app = express();


//  (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)
//         app.on('error', ()=>{
//             console.log(error)
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.log(error)
//     }

// })()