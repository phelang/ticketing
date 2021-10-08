import express from 'express'

const router = express.Router()

router.get('/api/users/currentuser', (req, res) => {
  res.send('Hi Google Cloud Kubernetes Engine!')
})

export { router as currentUserRouter }
