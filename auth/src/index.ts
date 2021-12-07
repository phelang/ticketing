import mongoose from 'mongoose'
import { app } from './app'

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined')
  }
  await mongoose
    .connect('mongodb://auth-mongo-srv:27017/auth')
    .then((success) => console.log('Connected to MongoDB', success))
    .catch((err) => console.error('Error connecting to MongoDB', err))

  app.listen(3000, () => {
    console.log('Listen on port 3000!!')
  })
}

start()
