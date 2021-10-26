import express from 'express'
import 'express-async-errors'
import mongoose from 'mongoose'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'
import { errorHandler } from './middlewares/error-handler'
import { NotFoundError } from './errors/not-found-error'
const app = express()
app.use(express.json())

app.use(currentUserRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(signupRouter)

app.all('*', async (req, res, next) => {
  throw new NotFoundError()
})

app.use(errorHandler)

const start = async () => {
  await mongoose
    .connect('mongodb://auth-mongo-srv:27017/auth')
    .then((success) => console.log('Connected to MongoDB', success))
    .catch((err) => console.error('Error connecting to MongoDB', err))

  app.listen(3000, () => {
    console.log('Listen on port 3000!!')
  })
}

start()
