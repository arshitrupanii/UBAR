import 'dotenv/config'
import mongoose from "mongoose"

console.log()

async function ConnectDb() {
    mongoose.connect(process.env.MONGO_URI, {
    }).then(() => {
        console.log("connect to db !")
    })

}

export default ConnectDb