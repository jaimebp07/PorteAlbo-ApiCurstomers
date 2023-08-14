import {connect} from 'mongoose'


const connectDB = async () => {
    try{
        await connect('mongodb://0.0.0.0:27017/portealbodb')
    } catch (error) {
        console.log(error);
    }
}

export { connectDB };