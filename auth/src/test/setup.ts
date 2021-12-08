import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { app } from '../app'

let mongoServer: any

beforeAll(async () => {
  // process.env.JWT_KEY = 'abcdef'

  mongoServer = await MongoMemoryServer.create()
  const mongoUri = mongoServer.getUri()
  await mongoose.connect(mongoUri)
}, 99999)

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections()

  collections.forEach(async (collection) => await collection.deleteMany({}))
})

afterAll(async () => {
  // await mongoServer.stop()
  await mongoose.disconnect()
})
