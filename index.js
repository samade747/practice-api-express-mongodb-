import express from "express.js"
// import { hostname } from "os";
const app = express();

const PORT = process.env.PORT || 5000; 



app.get('/', (req,res)=> {
    res.send('Hi i am samad');
})

cosnt start = async () => {
    try {
        app.listen(PORT, hostname, number)
    }
} catch(error){

}


start()