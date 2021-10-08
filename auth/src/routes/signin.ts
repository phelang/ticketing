import express from 'express'

const router = express.Router()

router.post('/api/users/signin', (req, res) => {
  res.send('Kubernetes Signin!')
})

export { router as signinRouter }
