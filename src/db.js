import { connect } from 'mongoose'

export async function connectDB () {
  try {
    await connect('mongodb://0.0.0.0:27017/portealbodb')
  } catch (error) {
    console.log(error)
  }
}
